<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { defaultFontSize, screenSm } from '@/assets/css/var.scss'
export default {
  created() {
    this.setRem()
    window.addEventListener('resize', this.setRem)
  },
  methods: {
    setRem() {
      const w = document.documentElement.clientWidth
      const size =
        w <= parseInt(screenSm) ? (defaultFontSize / 375) * w : defaultFontSize
      document.documentElement.style.fontSize = size + 'px'
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: $default_bg;

  a {
    text-decoration: none;
    color: unset;
  }
}
</style>
