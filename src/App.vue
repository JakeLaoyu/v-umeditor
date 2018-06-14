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
        autoHeight: false
      }
    }
  },
  methods: {
    ueditorReady (ue) {
      this.ue = ue
      this.ue.setContent('v-ueditor')
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
