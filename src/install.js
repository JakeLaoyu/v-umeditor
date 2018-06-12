import vueUEditor from './components/v-ueditor.vue'

vueUEditor.install = function (Vue) {
  Vue.component(vueUEditor.name, vueUEditor)
}

// if Vue is the window object, auto install it
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueUEditor)
}

export default vueUEditor
