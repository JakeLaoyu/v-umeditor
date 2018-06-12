import Vue from 'vue'
import App from './App.vue'
import vUEditor from '../lib/vUEditor.min.js'

Vue.use(vUEditor)

/*eslint-disable*/
new Vue({
  el: '#app',
  render: h => h(App)
})
