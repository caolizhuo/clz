<template>
  <div id="app">
     <footer class="footer">
    </footer>
    <router-view/>
  </div>
</template>

<script>
//  import axios from "axios"
import VueResource from 'vue-resource'
export default {
  name: 'App',
  data () {
    return{}
  },
  mounted() {
    this.getData();
  },
  methods:{

    getData() {


      this.$http.get('./static/footer/footer.json').then(res => {
        console.log("json数据为:" + res)//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
      })

    }
    },
    created:function(){


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
