<template>
  <div class="login p-16">
    <h1 class="mb-30">Welcome to Interview</h1>
    <form>
      <div class="mb-3">
        <label for="input-username" class="form-label">Username</label>
        <input type="text" class="form-control" id="input-username">
      </div>
      <div class="mb-3">
        <label for="input-password" class="form-label">Password</label>
        <input type="password" class="form-control" id="input-password">
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</template>
<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      isLoading: false,
    }
  },
  methods: {
    async login () {
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
    signUp () {
      this.$router.push({ name: 'SignUp' })
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  max-width: $screen-sm;
  margin: 0 auto;
}
</style>
