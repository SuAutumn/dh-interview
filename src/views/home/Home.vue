<template>
  <div class="home p-8">
    <div class="left-navs_items fs-5 lh-lg bg-white p-8">
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
          <div
            v-for="child in nav.children"
            :key="child.name"
            class="fs-6 pl-16"
            @click.stop="routePage(child)"
          >
            <span :class="{ active: child.selected }">{{ child.name }}</span>
          </div>
        </collapse>
      </div>
    </div>
    <div class="left-navs_content ph-8 pv-16">
      <navs-path></navs-path>
      <router-view></router-view>
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
  },
  data() {
    this._currentNav = null
    return {
      navs: [],
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
      if (this._currentNav) {
        this.changeParentNavsSelected(this._currentNav)
      }
      return navs
    },
    routePage(nav) {
      debugger
      // eslint-disable-next-line no-prototype-builtins
      if (nav.hasOwnProperty('open')) {
        nav.open = !nav.open
      }
      if (nav === this._currentNav) return
      // eslint-disable-next-line no-prototype-builtins
      if (!nav.hasOwnProperty('children') && !nav.selected) {
        this._currentNav.selected = false
        this.changeParentNavsSelected(this._currentNav)
        nav.selected = true
        this._currentNav = nav
        this.changeParentNavsSelected(this._currentNav)
        console.log(nav.path)
        this.$router.push(nav.path)
      }
    },
    changeParentNavsSelected(nav) {
      let parent = nav.parent
      while (parent) {
        parent.selected = nav.selected
        parent = parent.parent
      }
    },
  },
}
</script>

i
<style lang="scss" scoped>
.home {
  overflow: hidden;
  min-height: 100vh;
  max-width: $screen_md;
  margin: 0 auto;
  display: flex;

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
}
</style>
