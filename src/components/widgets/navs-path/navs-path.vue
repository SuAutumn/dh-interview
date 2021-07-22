<template>
  <div class="flex font-size-12">
    <div v-for="(p, i) in paths" :key="i" class="path">
      {{ p }}
      <i class="bi-chevron-right mh-4"></i>
    </div>
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

<style lang="scss" scoped>
.path {
  &:last-child {
    .bi-chevron-right {
      display: none;
    }
  }
}
</style>
