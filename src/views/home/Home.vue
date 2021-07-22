<template>
  <div class="home container">
    <div class="navs-bar bg-white flex-h-between ph-8 border-bottom-1">
      <div class="fs-5 fw-bold">Title</div>
      <i class="bi-list font-size-28" @click="triggleNavs"></i>
    </div>
    <div class="row ph-8">
      <div
        class="left-navs_items fs-5 lh-lg bg-white p-8"
        :class="{ 'sm-hide': !isShowNavs }"
      >
        <div
          class="left-navs_item"
          v-for="nav in navs"
          :key="nav.name"
          @click="routePage(nav)"
        >
          <div
            class="flex flex-h-between left-navs_item_name"
            :class="{ active: nav.selected }"
          >
            {{ nav.name }}
            <i
              class="bi-chevron-down fs-6 bi"
              v-if="nav.children"
              :class="{ 'chevron-up': nav.open }"
            ></i>
          </div>
          <collapse :open="nav.open" v-if="nav.children">
            <div class="border-left ml-8">
              <div
                v-for="child in nav.children"
                :key="child.name"
                class="fs-6 pl-16"
                @click.stop="routePage(child)"
              >
                <span :class="{ active: child.selected }">{{
                  child.name
                }}</span>
              </div>
            </div>
          </collapse>
        </div>
      </div>
      <div class="left-navs_content p-16 bg-white ml-8 ml-xs-0">
        <navs-path class="pb-8"></navs-path>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import homeRouter from '@/router/home'
import NavsPath from '@/components/widgets/navs-path/navs-path'
import Collapse from '@/components/widgets/collapse/collapse'

export default {
  name: 'Home',
  components: { NavsPath, Collapse },
  created() {
    this.navs = this.navsHandler(homeRouter)
    if (this._currentNav) {
      this.walkNavsFromBottomToTop(this._currentNav, (parent) => {
        parent.selected = this._currentNav.selected
        // eslint-disable-next-line no-prototype-builtins
        if (parent.hasOwnProperty('open')) {
          parent.open = this._currentNav?.selected
        }
      })
    }
  },
  data() {
    this._currentNav = null
    return {
      navs: [],
      isShowNavs: false, // 移动端展示
    }
  },
  methods: {
    /**
     * 设置导航
     * @param routes
     * @param parent
     * @return {[]}
     */
    navsHandler(routes, parent) {
      let navs = []
      let root = parent ? parent.path : routes.path
      routes.children.forEach((r) => {
        if (r.meta && r.path) {
          const n = {
            name: r.meta.name,
            path: root + '/' + r.path,
            selected: r.name === this.$route.name,
            parent,
          }
          if (r.children?.length > 0) {
            n.children = this.navsHandler(r, n)
            n.open = n.selected
          }
          if (n.selected) {
            this._currentNav = n
          }
          navs.push(n)
        }
      })
      return navs
    },
    routePage(nav) {
      // eslint-disable-next-line no-prototype-builtins
      if (nav.hasOwnProperty('open')) {
        nav.open = !nav.open
      }
      if (nav === this._currentNav) return
      // eslint-disable-next-line no-prototype-builtins
      if (!nav.hasOwnProperty('children') && !nav.selected) {
        this._currentNav.selected = false
        this.walkNavsFromBottomToTop(
          this._currentNav,
          (parent) => (parent.selected = this._currentNav.selected)
        )
        nav.selected = true
        this._currentNav = nav
        this.walkNavsFromBottomToTop(
          this._currentNav,
          (parent) => (parent.selected = this._currentNav.selected)
        )
        this.$router.push(nav.path)
        this.triggleNavs()
      }
    },
    walkNavsFromBottomToTop(nav, cb) {
      let parent = nav.parent
      while (parent) {
        if (typeof cb === 'function') {
          cb(parent)
        }
        parent = parent.parent
      }
    },
    triggleNavs() {
      this.isShowNavs = !this.isShowNavs
    },
  },
}
</script>

i
<style lang="scss" scoped>
.home {
  overflow: hidden;
  max-width: $screen_lg;
  margin: 0 auto;
  padding: 8px 0;

  .row {
    min-height: calc(100vh - 16px);
  }

  .left-navs {
    &_items {
      width: $left_navs_width;
      flex-shrink: 0;
      color: $text_dark;
    }

    &_item {
      cursor: pointer;
      transition: color 0.1s;
      user-select: none;

      &_name {
        &:hover {
          color: $orange;
        }
      }

      .active {
        color: $orange;
      }
    }

    &_content {
      flex: 1;
    }
  }

  .bi {
    transition: transform 0.1s ease-in-out;
  }

  .chevron-up {
    transform: rotate(180deg);
  }

  .border-left {
    border-left: 2px solid $orange-300;
  }

  .navs-bar {
    display: none;
  }
}

@media screen and (max-width: $screen_sm) {
  .home {
    padding-top: 0;
    padding-bottom: 0;

    .row {
      min-height: 100vh;
    }

    .left-navs {
      &_items {
        width: 100%;
        position: fixed;
        top: 44px;
        left: 0;
        right: 0;
        box-shadow: 0 0 $default_margin $gray-600;
        &.sm-hide {
          display: none;
        }
      }
      &_content {
        margin-top: 44px;
      }
    }

    .navs-bar {
      display: flex;
      height: 44px;
      line-height: 44px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
