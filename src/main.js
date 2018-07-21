import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vUeditor from './install'
// import vUeditor from '../lib/vUeditor.min'

Vue.use(vUeditor)

/*eslint-disable*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
