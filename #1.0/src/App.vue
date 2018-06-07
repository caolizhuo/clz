<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'App',
  mounted() {
    this.getData();
  },
  methods:{

    getData() {


      axios.get('./static').then(res => {
        console.log("json数据为:" + res)//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
      })

    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
