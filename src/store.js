import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    style: 'default',
    scrollSpyOffset: 280
  },
  mutations: {
    changeTo (state, { key, newValue }) {
      state[key] = newValue
    }
  },
  actions: {

  }
})
