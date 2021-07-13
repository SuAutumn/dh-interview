<template>
  <div class="login flex-col flex-h-center">
    <div class="input">
      <input
        type="text"
        v-model="username"
        placeholder="Phone number or email"
        class="username"
      />
      <input
        type="text"
        v-model="password"
        placeholder="Password"
        class="password"
      />
    </div>
    <button @click="login" class="btn-sign-in pr">
      <div>Sign In</div>
    </button>
    <button @click="signUp" class="btn-sign-in pr">
      <div>Sign Up</div>
    </button>
  </div>
</template>
<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
    }
  },
  methods: {
    async login() {
      if (this.isLoading) return
      this.isLoading = true
      this.username = 'zhangp'
      this.password = '123456'
      try {
        const user = await Auth.signIn(this.username, this.password)
        console.log(user)
      } catch (e) {
        this.toast.show(e.message)
        console.log(e)
      }
      this.isLoading = false
    },
    signUp() {
      this.$router.push({ name: 'SignUp' })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/var.scss';
.login {
  font-size: $text_default_size;
  height: 80vh;
  .input {
  }
  .username,
  .password {
    display: block;
    margin: 14px auto;
    padding: $default_padding;
    border: 1px solid $gray;
    border-radius: $default_radius;
    transition: border 0.3s;
    height: 36px;
    line-height: 36px;
    width: 68%;
    max-width: 200px;
    &:focus {
      border-color: $primary;
    }
  }
  .btn-sign-in {
    width: 68%;
    max-width: 200px;
    background-color: $primary;
    color: $text_white;
    border: 1px solid $primary;
    border-radius: $default_radius;
    height: 36px;
    line-height: 36px;
    margin: 20px auto;
  }
}
</style>
