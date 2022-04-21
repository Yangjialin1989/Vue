<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click='subs'>-1</button>
  </div>
</template>

<script>
//使用mapState函数，调用全局state变量,
//mapMutations 按需导入store中的函数，映射到模块指定的函数
import {mapState,mapMutations} from 'vuex'
export default {
  name: "Subs",
  data(){
    return {

    }
  },
  methods:{
    ...mapMutations(['sub']),
    subs(){
      this.sub()
    }
  },
  computed:{
    //需要映射的全局数据，。。。为展开运算符，当前count就是计算数学
    ...mapState(['count'])
  }
}
</script>

<style scoped>

</style>
