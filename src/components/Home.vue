<template>
  <div class="home">
    <Top></Top>




    <van-notice-bar
      left-icon="volume-o"
      text="欢迎您进入该网站，愿您永具菩提心！南无阿弥陀佛！请及时点击【登录】按钮登录or填写表单注册登陆。"
      />

   </div>
</template>

<script>
import Top from "@/components/Top";
export default {
  name: 'Home',
  components:{
    Top
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:  '../../static/images/img_01_index.bg.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  background: url("../../static/images/img_01_index.bg.jpg") no-repeat;
  height:100%;
  position: fixed;

  background-size: 100% 100%;


}

</style>
