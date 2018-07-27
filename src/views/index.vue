<template>
  <div id="app">
    <a href="javascript:void(0)" @click="getContent">获取内容</a>
    <v-ueditor
      id="ueditor"
      :config="config"
      content="初始化内容"
      @ready="ueditorReady"
      @change="ueditorChange"
    ></v-ueditor>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      ue: '',
      config: {

      }
    }
  },
  methods: {
    ueditorReady (ue) {
      console.log('Ready')
      this.ue = ue
      // this.ue.setContent('v-ueditor')
    },
    ueditorChange (ue) {
      console.log(ue.getContent())
    },
    getContent () {
      console.log(this.ue.getContent())
      console.log(window.UM.getEditor('ueditor').getContent())
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
