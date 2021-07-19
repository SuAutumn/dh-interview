<template>
  <div class="sign-up p-16">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <h1 class="pb-16 fw-bold">Register a new account</h1>
      </div>
      <div class="col-md-6 col-xs-12">
        <form v-if="!isShowConfirmUI">
          <div class="mb-3">
            <label for="input-username" class="form-label"
              >Email or phone number</label
            >
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
          <button type="button" class="btn btn-primary col-12" @click="signUp">
            Sign Up
          </button>
        </form>
        <form v-else>
          <div class="mb-3">
            <label for="input-code" class="form-label">Confirm code</label>
            <input
              type="text"
              class="form-control"
              id="input-code"
              v-model="confirmCode"
              aria-describedby="help-confirm"
            />
            <p class="help-block pt-1" id="help-confirm">
              Confirm code will be sended in 10 minutes.
            </p>
          </div>
          <button type="submit" class="btn btn-primary col-12" @click="signIn">
            Submit
          </button>
        </form>
        <divider>or</divider>
        <button
          type="button"
          class="btn btn-outline-primary col-12"
          @click="$router.back()"
        >
          Have a account? Back to sign in
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/apis/index.js'
// import { Auth } from 'aws-amplify'
import Divider from '@/components/widgets/divider/divider'

export default {
  name: 'SignUp',
  components: { Divider },
  data() {
    return {
      username: '',
      password: '',
      // show the confirm UI flag
      isShowConfirmUI: !false,
      confirmCode: '',
    }
  },
  methods: {
    async signUp() {
      this.username = '909153789@qq.com'
      this.password = 'Password01!'
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
    signIn() {
      console.log('sign in')
    },
  },
}
</script>
<style lang="scss" scoped>
.sign-up {
  max-width: $screen-sm;
  margin: 0 auto;
}
</style>
