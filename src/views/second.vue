<template>
  <vUeditor
    id="body-ueditor"
    :content="content"
    @ready="(ue)=>{this.bodyUeditor = ue}"
  ></vUeditor>
</template>
<script>
export default {
  data () {
    return {
      bodyUeditor: null,
      content: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.content = '初始化'
    }, 0)
  }
}
</script>
<style>
</style>
