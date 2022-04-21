<template>
<div>
  <Top></Top>
  <div  class='register-bg'>
    <div class='register'>

    </div>
  </div>
</div>
</template>

<script>
import Top from "@/components/Top";
export default {
  name: 'Regist',
  data(){
    return {

    }
  },
  components:{
    Top
  }
}
</script>

<style scoped>
  .register-gb{
    display: block;
    width: 10rem;
    height:1000px;


    background: url("../../static/images/RegisterBg1.png") no-repeat ;
    background-size:cover;
  }
</style>
