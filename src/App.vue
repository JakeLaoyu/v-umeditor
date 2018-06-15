<template>
  <div id="app">
    <a href="javascript:void(0)" @click="$router.push('/')">首页</a>
    <a href="javascript:void(0)" @click="$router.push('/second')">第二页</a>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
