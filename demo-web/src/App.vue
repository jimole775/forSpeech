<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div> {{ texts.join(',') }} </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import BunchThread from './bunch-thread'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      texts: []
    }
  },
  created() {
    const bunch = new BunchThread(5)
    for (let index = 0; index < 100; index++) {
      bunch.taskCalling(() => {
        return new Promise((s, j) => {
          axios.get('/test/' + index)
          .then((res) => {
            this.texts.push(res.data)
            s()
          })
          .catch(function (error) {
            j()
            console.log(error)
          })
        })
      })
    }
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
