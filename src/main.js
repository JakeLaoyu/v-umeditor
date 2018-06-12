import Vue from 'vue'
import App from './App.vue'
import vUEditor from './install'

Vue.use(vUEditor)

/*eslint-disable*/
new Vue({
  el: '#app',
  render: h => h(App)
})
