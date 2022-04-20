<template>
  <div class="mine">
    <Top></Top>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">最新消息</el-menu-item>
      <el-menu-item index="2">个人信息</el-menu-item>
      <el-menu-item index="3">代办事物</el-menu-item>
      <el-menu-item index="4">帮助中心</el-menu-item>
    </el-menu>
  </div>


</template>

<script>
import Top from "@/components/Top";
export default {
  name: "mine",
  components:{
    Top
  },
  data(){
    return {
      activeIndex:'1'
    }

  },
  methods:{
    handleSelect(key,keyPath){
      console.log(key,keyPath)
    }
  }

}
</script>

<style scoped>
  /*.mine{*/
  /*  height:2000px;*/
  /*}*/
</style>
