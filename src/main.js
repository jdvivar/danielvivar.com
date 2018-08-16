// Vue
import Vue from 'vue'
import App from './App.vue'

// PWA
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
