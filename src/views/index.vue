<template>
  <div id="app">
    <a href="javascript:void(0)" @click="getContent">获取内容</a>
    <v-ueditor
      id="ueditor"
      :config="config"
      :content="content"
      :useCustomUpload="true"
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
      content: '',
      config: {
        imageUrl: '//localhost:3000/server-test/upload', // 图片上传提交地址
        imagePath: '', //
        imageFieldName: 'file'
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
  },
  mounted () {
    setTimeout(() => {
      this.content = '初始化内容'
    }, 0)
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
