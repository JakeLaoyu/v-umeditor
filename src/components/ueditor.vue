<template>
    <script id="container" name="content" type="text/plain"></script>
</template>
<script>
require('../../static/ueditor.config.js')
require('../../static/ueditor.all.js')

export default {
  name: 'vUEditor',
  props: ['config'],
  data () {
    return {
      instance: null
    }
  },
  methods: {
    init () {
      this.$nextTick(() => {
        this.instance = UE.getEditor('container', this.config)
        this.instance.addListener('ready', () => {
          this.$emit('ready', this.instance)
        })
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
</style>
