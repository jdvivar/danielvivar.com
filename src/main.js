// Vue
import Vue from 'vue'
import App from './App.vue'

// PWA
import './registerServiceWorker'

// Vuex store
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
