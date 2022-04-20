<template>
  <div class="latestnews">
    <Top></Top>
    <h1>动态</h1>

  </div>
</template>

<script>
import Top from "@/components/Top";
export default {
  name: 'LatestNews',
  components:{
    Top
  },
  data () {
    return {
      msg: '动态'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.latestnews{
  height:2000px;
}
</style>
