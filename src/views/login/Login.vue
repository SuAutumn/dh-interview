<template>
  <div class="login">
    <div class="container bg-white">
      <div class="row">
        <div class="col-md-6">
          <h1 class="pb-16 fw-bold">Welcome to the Interview</h1>
        </div>
        <div class="col-md-6">
          <form>
            <div class="mb-3">
              <label for="input-username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="input-username"
                v-model="username"
              />
            </div>
            <div class="mb-3">
              <label for="input-password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="input-password"
                v-model="password"
              />
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault"
                >Remember me</label
              >
            </div>
            <button type="button" class="btn btn-primary col-12" @click="login">
              Sign In
            </button>
            <divider>or</divider>
            <button
              type="button"
              class="btn btn-outline-primary col-12"
              @click="signUp"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Auth } from 'aws-amplify'
import Divider from '@/components/widgets/divider/divider'

export default {
  name: 'Login',
  components: { Divider },
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
      this.username = '909153789@qq.com'
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
.login {
  max-width: $screen_sm;
  margin: 0 auto;
  padding: 5rem 0;
  min-height: 100vh;
  background-color: $default_bg;

  .container {
    border-radius: $default_margin;
    box-shadow: 0 0 $default_margin $gray-400;
    padding: $default_padding * 3;
  }
}
@media screen and (max-width: $screen_sm) {
  .login {
    margin: 0;
    padding: 0;
    background-color: $white;
    .container {
      box-shadow: none;
    }
  }
}
</style>
