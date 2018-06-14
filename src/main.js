import Vue from 'vue'
import App from './App.vue'
import vUeditor from '../lib/vUeditor.min.js'

Vue.use(vUeditor)

/*eslint-disable*/
new Vue({
  el: '#app',
  render: h => h(App)
})
