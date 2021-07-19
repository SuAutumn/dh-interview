// import css
import '@/assets/css/normalize.css'
import '@/assets/css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Amplify from 'aws-amplify'
import amplifyConfig from '@/constant/amplify-config.json'
import toast from '@/components/widgets/toast/toast.js'

Vue.config.productionTip = false

Vue.prototype.toast = toast

Amplify.configure(amplifyConfig)

console.log(process.env)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
