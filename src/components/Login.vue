<template>
  <div id="login">
    <div class="left">

      <van-image class="logo"
        width="60%"
        height="60%"
        fit="contain"
        src="../../static/images/logo1.PNG"
      />
      <van-image class="logo2"
                 width="10%"
                 height="10%"
                 fit="contain"
                 src="../../static/images/QQ.png"
      />
      <van-image class="logo3"
                 width="10%"
                 height="10%"
                 fit="contain"
                 src="../../static/images/weibo.png"
      />
      <van-image class="logo4"
                 width="10%"
                 height="10%"
                 fit="contain"
                 src="../../static/images/weixin.png"
      />
      <div class="line1"></div>
      <div class="text2"><span>第三方登录</span></div>


    </div>
    <div class="right">
      <div class="text3">
        <span>账号登录</span>
        <van-icon v-on:click="close1" style="float:right;margin-right: 0.15rem;margin-top: -0.15rem;" name="cross" color="	#C0C0C0" />
      </div>
      <van-form validate-trigger="onSubmit" @submit="onSubmit" style="margin-left: 0.1rem;">
        <van-field style="font-size: 0.2rem;height:35px;"
          v-model="username"
          name="用户名"


          placeholder='请填写用户名'
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field style="font-size: 0.2rem;height:35px;"
          v-model="password"
          type="password"
          name="密码"

          placeholder='请输入密码'
          :rules="[{ required: true,message :'请输入密码' }]"
        />
        <div style="float: right;font-size:0.2rem;">
          <span><a href="">忘记密码？</a></span>
        </div>
        <div style="margin-left: 0.35rem;margin-top:0.6rem;width: 4.3rem;height:0.6rem;">
          <van-button  size="mini"  block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
    <div class="bottom">
      <div @click='pushRegester' class="text">立即注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      username:'',
      password:'',


    }
  },
  methods:{
    close1(){
      this.$store.commit('topDialogClose')
    },
    pushRegester(){
      this.$router.push({name:'register',params:{id:'1'}})
      this.$store.state.TopDialogFlag = false;
    }
  }
}
</script>

<style scoped>
  #login{
    width:10rem;
    height:5rem;
    border-radius: 20px;

  }
  #login .left{
    width:5rem;
    height:4.3rem;

    float: left;
    position:absolute;

  }
  #login .left .logo{
    margin-top:-0.5rem;
    float:left;

  }
  #login .left .logo2{
    position: fixed;
    top:2rem;left: 1rem;
  }
  #login .left .logo3{
    position: fixed;
    top:2rem;left: 2rem;

  }
  #login .left .logo4{
    position: fixed;
    top:2rem;left: 3rem;

  }
  #login .left .line1{
    height:4rem;
    width: 1px;
    background: gainsboro;
    position: fixed;
    left: 5rem;
    top:0.3rem;
  }
  #login .left .text2{
    position: fixed;
    left: 1.7rem;
    top:3.6rem;
  }
  #login .right{
    width:5rem;
    height:4.3rem;
    float: right;


  }
  #login .right .text3{
    margin-top:0.3rem;
    margin-left: 0.5rem;
  }
  #login .right .username{
    width:3rem;
    margin-left:0.4rem;
    border: 1px solid red;
  }
  #login .right .password{
    width:3rem;
    margin-left:0.4rem;
    border: 1px solid red;
  }
  #login .bottom{
    width:10rem;
    height:0.67rem;
    background: #FFF;
    float: left;
    border-top:1px solid gainsboro;
  }
  #login .bottom .text{
    color:	#4169E1;

    margin-right: 0.1rem;
    float:right;
  }


</style>
