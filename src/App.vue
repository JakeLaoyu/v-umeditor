<template>
  <div id="app">
    <a href="javascript:void(0)" @click="getContent">获取内容</a>
    <vUEditor
      :config="config"
      @ready="ueditorReady"
    ></vUEditor>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      ue: '',
      config: {
        autoHeight: false
      }
    }
  },
  methods: {
    whenChange (item) {
      console.log(item)
    },
    ueditorReady (ue) {
      this.ue = ue
    },
    getContent () {
      console.log(this.ue.getContent())
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}

a {
  color: #42b983;
}
</style>
