import { createApp, h } from 'vue'

import(/* @vite-ignore */ __MAIN__)
  .then((module) => module.default)
  .catch((e) => {
    console.error(e)
    return {
      render() {
        return h('pre', [h('code', e.message)])
      },
    }
  })
  .then((App) => {
    createApp({
      render() {
        return h(App)
      },
    }).mount('#root')
  })
