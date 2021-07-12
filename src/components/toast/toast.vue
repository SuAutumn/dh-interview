<template>
  <div v-show="isShow" class="toast flex flex-h-center p-16">
    <div class="msg">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      msg: '',
      isShow: false,
    }
  },
  methods: {
    show(msg) {
      this.isShow = true
      this.msg = msg
    },
    hide() {
      this.isShow = false
      this.msg = ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/var.scss';
.toast {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  .msg {
    padding: $default_padding;
    background-color: rgba($color: #000000, $alpha: 0.6);
    border-radius: $default_radius;
    color: $text_white;
  }
}
</style>
