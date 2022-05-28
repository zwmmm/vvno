import { createApp, h } from 'vue'

const ErrorApp = {
  default: {
    template: '<div>未找到入口文件，请检查文件是否存在，且是 default 导出</div>',
  }
}

import(/* @vite-ignore */ __MAIN__).catch(() => ErrorApp).then(App => {
  createApp({
    render() {
      return h(App.default)
    }
  }).mount('#root')
})
