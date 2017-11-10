<template>
<div class="wrapper">
  <div class="top">
    <div class="top-left" @click="goToChat">
      <span>聊天</span>
    </div>
    <div class="top-right" @click="goToInteract">
      <span>互动</span>
    </div>
  </div>
  <div class="pla"></div>
  <router-view></router-view>
  <div class="pla1"></div>
  <tab-bar></tab-bar>
</div>
</template>
<script>
  import TabBar from '../tabbar'
  export default {
    components: {
      TabBar
    },
    data () {
      return {
      }
    },
    methods: {
      goToChat () {
        this.$router.push({path: '/message/chat'})
      },
      goToInteract () {
        this.$router.push({path: '/message/interact'})
      }
    }
  }
</script>
<style scoped>
  .top{
    width:100%;
    height:4.5rem;
    background: #b2e4ee;
    line-height: 4.5rem;
    color: #fff;
    position: fixed;
    text-align: center;
  }
  .top-left, .top-right{
    text-align: center;
    display: inline-block;
    font-size: 1.3rem;
  }
  .top-right span, .top-left span{
    border: 3px solid #fff;
    border-radius: 5px;
    padding: 0.5rem 2rem;
  }
  .pla{
    width:100%;
    height:4.5rem;
  }
  .pla1{
    width:100%;
    height:5rem;
    bottom: 0;
  }
</style>
