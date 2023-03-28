import { createApp } from 'vue'
import App from './App.vue'
import { myFirstPlugin } from './toolTipPlugin'

createApp(App)
  .use(myFirstPlugin, {options: true})
  .mount('#app')