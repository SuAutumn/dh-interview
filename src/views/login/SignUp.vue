<template>
  <div class="sign-up">
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import api from '@/apis/index.js'
// import { Auth } from 'aws-amplify'
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
      this.username = '909153789@qq.com'
      this.password = '123456zp'
      try {
        // const hash = 'vw+5MePc3ibKJHr+eG3oIgvg2Hg3CmUUiKBIDLQmLtw='
        // Auth.federatedSignIn()
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
