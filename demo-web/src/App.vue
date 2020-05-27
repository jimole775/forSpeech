<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" style="width: 20%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590575817726&di=0d83b8ec17524fcafa905778c2a5a3a6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F13%2F20180113202024_hWBfV.jpeg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div> {{ texts.join(',') }} </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
// import $Promise from './promise'
// import BunchThread from './bunch-thread'
import Http from './http'
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
    // const bunch = new BunchThread(4)
    // const http = new Http()
    // this.$nextTick(() => {
    //   Array.from(Array(100)).forEach((i, $i) => {
    //     bunch.taskCalling(() => {
    //       return new $Promise((resolve, reject) => {
    //         http.get('/test/' + $i).then((res) => {
    //           if (res.status === 200) {
    //             this.texts.push(res.data)
    //           }
    //           resolve()
    //         }).catch(() => {
    //           reject()
    //         })
    //       })
    //     })
    //   })
    // })
    const http = new Http()
    
    this.$nextTick(() => {
      for (let index = 0; index < 100; index++) {
        http.get('/test/' + index).then((res) => {
          console.log(res.data)
          this.texts.push(res.data)
        })
      }
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
