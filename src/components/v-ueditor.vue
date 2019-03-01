<template>
  <div class="ueditor" :class="{
    newstyle: newstyle
    }">
    <script :id="id" name="content" type="text/plain">{{ content }}</script>
  </div>
</template>
<script>
import { version } from '../../package.json'
import $ from '../../static/third-party/jquery.js'
window.$ = window.jQuery = $
window.UMEDITOR_HOME_URL = '//jakelaoyu.github.io/v-umeditor/static/'
require('../../static/umeditor.config.js')
require('../../static/umeditor.js')

export default {
  name: 'vUeditor',
  props: {
    newstyle: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: () => {}
    },
    id: {
      type: String,
      required: true
    },
    useCustomUpload: { // 使用dxy 公共服务
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      instance: null
    }
  },
  watch: {
    content (val) {
      if (this.instance) {
        try {
          this.instance.setContent(val)
        } catch (e) {

        }
      }
    }
  },
  methods: {
    setContent () {
      this.instance.setContent(this.content)
    },
    init () {
      this.instance = UM.getEditor(this.id, {
        initialFrameWidth: '100%',
        useCustomUpload: this.useCustomUpload,
        editorVersion: version,
        ...this.config
      })
      this.instance.ready(() => {
        this.$emit('ready', this.instance)
      })
      this.instance.addListener('contentChange', () => {
        this.$emit('change', this.instance)
      })
      this.instance.addListener('selectionchange', (editor) => {
        this.instance.fireEvent('contentChange')
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
