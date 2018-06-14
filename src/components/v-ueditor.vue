<template>
  <div class="ueditor">
    <script :id="id" name="content" type="text/plain"></script>
  </div>
</template>
<script>
require('../../static/ueditor.config.js')
require('../../static/ueditor.all.js')

export default {
  name: 'vUeditor',
  props: {
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
      this.$nextTick(() => {
        this.instance = UE.getEditor(this.id, {
          initialFrameWidth: '100%',
          ...this.config
        })
        this.instance.addListener('ready', () => {
          this.$emit('ready', this.instance)
        })
      })
    }
  },
  mounted () {
    this.init()
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
</style>
