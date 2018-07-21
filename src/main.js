// Vue
import Vue from "vue";
import App from "./App.vue";

// PWA
import "./registerServiceWorker";

// Scrollspy
import Scrollspy, { Easing } from "vue2-scrollspy";

// Initialise scrollspy
Vue.use(Scrollspy, { easing: Easing.Cubic.InOut });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
