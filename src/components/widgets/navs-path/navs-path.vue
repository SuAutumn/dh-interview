<template>
  <div class="flex">
    <div v-for="(p, i) in paths" :key="i">{{ p }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'navs-path',
  created() {
    this.getPaths()
  },
  data() {
    return {
      paths: [],
    }
  },
  watch: {
    $route() {
      this.getPaths()
    },
  },
  methods: {
    getPaths() {
      this.paths = []
      this.$route.matched.forEach(r => {
        if (r.name !== 'Home') {
          this.paths.push(r.meta.name)
        }
      })
    },
  },
}
</script>
