import ueditor from './components/ueditor.vue'

ueditor.install = function (Vue) {
  Vue.component(ueditor.name, ueditor)
}

// if Vue is the window object, auto install it
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ueditor)
}

export default ueditor
