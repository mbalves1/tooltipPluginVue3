import { createApp } from 'vue'
import App from './App.vue'
import { toolTipPlugin } from './toolTipPlugin'

createApp(App)
  .use(toolTipPlugin, {
    placement: 'right',
    trigger: "click",
    hideOnClick: false
  })
  .mount('#app')