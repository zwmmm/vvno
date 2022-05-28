import { createApp } from 'vue'

const ErrorApp = {
  template: '<div>未找到入口文件，请检查文件是否存在，且是 default 导出</div>',
}

const App = () =>
  import(/* @vite-ignore */ __MAIN__).catch(() => ({
    default: ErrorApp,
  }))

createApp(App).mount('#app')
