import Vue from 'vue'

import page from './toast.vue'

const ExtendVue = Vue.extend(page)

const toast = new ExtendVue({
  el: document.createElement('div'),
})

document.body.appendChild(toast.$el)

let timer = 0

export default {
  show(msg, time = 1500) {
    if (timer) clearTimeout(timer)
    toast.show(msg)
    timer = setTimeout(() => {
      timer = 0
      toast.hide()
    }, time)
  },
}
