<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from "axios"

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


            this.$http.get('public/footer.json').then(res => {
                console.log("json数据为:" + res)//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
            })

        }
    },
    created:function(){


    }
}


@Component({
  components: {
    HelloWorld,
  },

})
export default class Home extends Vue {}
</script>
