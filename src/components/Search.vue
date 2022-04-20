<template>
  <div class="hello">
    <Top></Top>
    <p>{{msg}}</p>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
import Top from "@/components/Top";
export default {
  name: 'Search',
  components:{
    Top
  },
  data () {
    return {
      msg: '搜索',
      value: new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
