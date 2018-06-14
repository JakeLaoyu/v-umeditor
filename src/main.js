import Vue from 'vue'
import App from './App.vue'
import vUeditor from './install'

Vue.use(vUeditor)

/*eslint-disable*/
new Vue({
  el: '#app',
  render: h => h(App)
})
