<template functional>
  <div class="pr my-4">
    <div class="dropdown-divider"></div>
    <div class="ab gray msg">
      <slot></slot>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'divider',
}
</script>

<style lang="scss" scoped>
.msg {
  top: -0.5rem;
  left: 50%;
  line-height: 1rem;
  height: 1rem;
  background-color: $white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  transform: translateX(-50%);
}
</style>
