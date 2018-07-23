import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  data: {
    bitstampKey: 'de504dc5763aeef9ff52'
  },
  store,
  created() {
    this.$store.dispatch('startPusher', this.bitstampKey)
  },
  render: h => h(App)
}).$mount('#app')
