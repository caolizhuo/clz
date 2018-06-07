<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  /* eslint-disable */
  import HelloWorld from './components/HelloWorld.vue'
  import axios from 'axios'
export default {
  name: 'app',
  components: {
    HelloWorld
  },created(){
    let instance = axios.create({
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      withCredentials: true

    })
 instance.get('./footer.json').then(caolizhuo=>{
     console.log(caolizhuo.data);
})



   axios.get("./footer.json").then(caolizhuo=>{
      console.log(caolizhuo);
    });
  }
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
