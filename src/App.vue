<template>
  <div id="app">
    <my-adds></my-adds>
    <p>------------------</p>
    <my-subs></my-subs>
    <router-view/>
<!--    <van-nav-bar-->
<!--    >-->
<!--      <template #title>-->
<!--        <van-image class="logo"-->
<!--                   width="98%"-->
<!--                   height="98%"-->
<!--                   src="../../static/images/logo1.PNG"-->
<!--        />-->
<!--      </template>-->
<!--      <template #right>-->
<!--        <van-button class="login" type="info" size="small">登录</van-button>-->
<!--      </template>-->
<!--    </van-nav-bar>-->


    <van-tabbar route class="bottom">
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/latestnews" icon="star-o">动态</van-tabbar-item>
      <van-tabbar-item replace to="/add">
        <van-icon name="add" size="40" color="green"/>
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
    <el-backtop :bottom="100"><i class="el-icon-top"></i></el-backtop>
  </div>

</template>

<script>
import Adds from './components/Adds.vue';
import Subs from './components/Subs.vue';


export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    'my-adds':Adds,
    'my-subs':Subs
  }

}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
.title {
  color: red;
}

.logo {
  margin-top: 0.5rem;
}

.login {
  border-radius: 8px;
  width: 50px;
  font-size: 16px;
  font-weight: 300;
  margin-right: -10px;
}
.bottom{
  background: 	#DCDCDC;
}

</style>
