<template>
<div>
  <h3>当前最新的count值为：{{$store.state.count}}</h3>
  <button @click='addHandle'>+1</button>
  <button @click='addHandleAsync'>+ async</button>
</div>
</template>

<script>
export default {
  name: "Adds",
  data(){
    return {

    }
  },
  methods:{
    addHandle(){
      //commit专门触发mutations
      this.$store.commit('add',2)
    },
    addHandleAsync(){
      //dispatch专门触发actions
      this.$store.dispatch('addAsync')
    }
  }
}
</script>

<style scoped>

</style>
