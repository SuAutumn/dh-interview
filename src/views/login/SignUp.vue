<template>
  <div class="sign-up">
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import api from '@/apis/index.js'
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async signUp() {
      this.username = 'zhangp'
      this.password = '123456'
      try {
        const user = await api.signUp(this.username, this.password)
        console.log(user)
      } catch (e) {
        this.toast.show(e.message)
        console.log(e)
      }
    },
  },
}
</script>
