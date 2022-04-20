<template>
  <div id="app">
    <van-nav-bar class="top"
    >
      <template #title>
        <van-image  class="logo"
                   width="100%"
                   height="98%"
                   src="../../static/images/logo1.PNG"
        />
      </template>
      <template #right>
        <van-button  v-on:click="dialog" class="login" type="info" size="small">登录</van-button>
      </template>
    </van-nav-bar>

    <van-dialog class="dialog"  v-model="show" show-cancel-button>
      <Login></Login>
    </van-dialog>

  </div>
</template>

<script>
import Login from "@/components/Login";
export default {
  name: "Top",
  components:{
    Login
  },
  data(){
    return {
      show:false
    }
  },
  methods:{
    dialog:function(){
      this.show = true;
    }
  }

}
</script>

<style scoped>
  .top{
    background: #DCDCDC;
  }
  .logo{

  }
  .dialog{
    width: 10rem;
    height:6rem;

  }
</style>
