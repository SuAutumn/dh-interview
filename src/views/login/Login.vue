<template>
  <div class="login">
    <button @click="login">Sign In</button>
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
    }
  },
  methods: {
    async login() {
      this.username = 'zhangp'
      this.password = '123456'
      try {
        const user = await Auth.signIn(this.username, this.password)
        console.log(user)
      } catch (e) {
        this.toast.show(e.message)
        console.log(e)
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
