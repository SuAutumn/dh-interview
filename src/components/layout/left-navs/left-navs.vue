<template>
  <div class="left-navs">
    <div class="left-navs_items">
      <slot name="items"></slot>
    </div>
    <div class="left-navs_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-navs',
}
</script>

<style lang="scss" scoped>
.left-navs {
  overflow: hidden;
  height: 100vh;

  &_items {
    float: left;
    width: $left-navs-width;
  }

  &_content {
    margin-left: $left-navs-width;
  }
}
</style>
