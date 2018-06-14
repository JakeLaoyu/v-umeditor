import vUeditor from './components/v-ueditor.vue'

vUeditor.install = function (Vue) {
  Vue.component(vUeditor.name, vUeditor)
}

// if Vue is the window object, auto install it
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vUeditor)
}

export default vUeditor
