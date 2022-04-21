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
        <van-button  @click="dialog" class="login" type="info" size="small">登录</van-button>
      </template>
    </van-nav-bar>

    <van-dialog class="dialog"  v-model="$store.state.TopDialogFlag"  closeOnClickOverlay>
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

    }
  },
  methods:{
    dialog:function(){
      this.$store.commit('topDialogTigger')
    }
  },
  mounted() {
    this.dialog.alert({
      showConfirmButton : false,
    })
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
    height:5rem;

  }
</style>
