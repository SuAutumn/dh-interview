<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.setRem()
  },
  methods: {
    setRem() {
      document.documentElement.style.fontSize = '14px'
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
