import Vue from 'vue'
import Vuex from 'vuex'
import Pusher from 'pusher-js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pusher: null
  },
  mutations: {
    updatePusher(state, p) {
      this.state.pusher = p;
    }
  },
  actions: {
    startPusher({commit}, key) {
      commit('updatePusher', new Pusher(key));
    }
  }
})
