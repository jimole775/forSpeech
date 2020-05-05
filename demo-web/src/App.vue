<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="_img in imgs" :key="_img">
      <img :src="_img"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import imgs from './imgs'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => {
    console.log(imgs)
    return {
      imgs
    }
  },
  created() {
    axios.get('/test', (res) => {
      console.log('test:', res)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
