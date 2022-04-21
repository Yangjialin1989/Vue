import Vue from 'vue'
import Vuex from 'vuex'

// 创建一个新的 store 实例
Vue.use(Vuex)

export default new Vuex.Store({
  //定义全局共享数据 this.$store.state
  state:{
    count: 0,
    TopDialogFlag:false
  },
  //用于变更store中的数据,只能处理同步数据，只有他有权利修改state中的数据
  mutations:{
    add(state,step){
      state.count += step
    },
    sub(state){
      state.count--
    },
    topDialogTigger(state){
      state.TopDialogFlag=true
    },
    topDialogClose(state){
      state.TopDialogFlag=false
    }
  },
  //数据异步操作，模块中$store.dispatch();
  actions:{
    //context 相当于实例对象,在actions不能直接修改state中的数据，间接触发。
    addAsync(context){
      setTimeout(()=>{
        context.commit('add')
      },1000)
    }
  }
})
