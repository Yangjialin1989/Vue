<template>
  <div class="hello">
    <Top></Top>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import Top from "@/components/Top";
export default {
  name: 'Add',
  components:{
    Top
  },
  data () {
    return {
      msg: '添加'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
