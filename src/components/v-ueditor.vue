<template>
  <div class="ueditor" :class="{
    newstyle: newstyle
    }">
    <script :id="id" name="content" type="text/plain"></script>
  </div>
</template>
<script>
import $ from '../../static/third-party/jquery.js'
window.$ = window.jQuery = $
window.UMEDITOR_HOME_URL = '//assets.dxycdn.com/gitrepo/dxy-vue-ueditor/static/'
require('../../static/umeditor.config.js')
require('../../static/umeditor.js')

export default {
  name: 'vUeditor',
  props: {
    newstyle: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object,
      default: () => {}
    },
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      instance: null
    }
  },
  methods: {
    init () {
      this.instance = UM.getEditor(this.id, {
        initialFrameWidth: '100%',
        ...this.config
      })
      this.instance.addListener('ready', () => {
        this.$emit('ready', this.instance)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  beforeDestroy () {
    // 组件销毁的时候，要销毁 UEditor 实例
    if (this.instance !== null && this.instance.destroy) {
      this.instance.destroy()
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../static/themes/default/css/umeditor.css');
@import url('../../static/themes/dxy/ueditor.css');
</style>
