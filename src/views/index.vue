<template>
  <div id="app">
    <a href="javascript:void(0)" @click="getContent">获取内容</a>
    <v-ueditor
      id="ueditor"
      :config="config"
      @ready="ueditorReady"
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
      this.ue.setContent('v-ueditor')
      this.ue.addListener('contentChange', () => {
        console.log('change')
        this.getContent()
      })
    },
    getContent () {
      console.log(this.ue.getContent())
      console.log(window.UE.getEditor('ueditor').getContent())
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
