<template>
  <div
    class="collapse"
    :class="{ show: show}"
    :style="{ height: height + 'px' }"
  >
    <div class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Collapse',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.openHandler()
  },
  data() {
    return {
      height: 0,
      show: this.open
    }
  },
  watch: {
    open() {
      this.openHandler()
    },
  },
  methods: {
    openHandler() {
      if (this.open) {
        this.show = true
        this.$nextTick(() => {
          const { height } = this.$el.firstElementChild.getBoundingClientRect()
          this.height = height
        })
      } else {
        this.height = 0
        setTimeout(() => {
          this.show = false
        }, 100)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.collapse {
  transition: height 0.1s ease-in-out;
  overflow: hidden;

  &:not(.show) {
    display: none;
  }
}
</style>
