<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'App'
  ,created(){
//    let instance = axios.create({
//      headers: {'content-type': 'application/x-www-form-urlencoded'},
//      withCredentials: true
//
//    })
//    instance.get('./').then(caolizhuo=>{
//      console.log(caolizhuo);
//    })



//   axios.get("./public").then(caolizhuo=>{
//      console.log(caolizhuo);
//    });
  }
  ,mounted(){
    this.$http.get('static/china.json').then(function(response){
      console.log(response);
    })
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
