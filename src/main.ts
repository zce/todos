import Vue from 'vue'
import Storage from './plugins/storage'
import App from './App.vue'

import 'todomvc-app-css/index.css'

Vue.config.productionTip = false

Vue.use(Storage)

new Vue({
  render: h => h(App)
}).$mount('#app')
