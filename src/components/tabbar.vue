<template>
<div class="m-footer">

  <router-link to="/home" class="nav-link">
    <div class="nav-btn">
      <span class="iconfont icon-wodexingqiuweixuanzhong icon"></span>
      职位
    </div>
  </router-link>
  <router-link to="/company" class="nav-link">
    <div class="nav-btn">
      <span class="iconfont icon-gongsi icon"></span>
      公司
    </div>
  </router-link>
  <router-link to="/message" class="nav-link">
    <div class="nav-btn">
      <span class="iconfont icon-xiaoxi icon"></span>
      消息
    </div>
  </router-link>
  <router-link to="/my" class="nav-link">
    <div class="nav-btn">
      <span class="iconfont icon-mine icon"></span>
      我的
    </div>
  </router-link>
</div>
</template>
<script>
  export default {
  }
</script>
<style scoped>

  .m-footer{
    width:100%;
    display: flex;
    position: fixed;
    bottom: 0;
    text-align: center;
    background: #b2e4ee;
    height:5rem;
    line-height: 1rem;
    font-size: 1.3rem;
  }
  .nav-link{
    color: #919191;
    flex: 1;
    display: inline-block;
    text-decoration: none;
  }
  .nav-btn span{
    display: block;
    padding: 1rem;
    font-size:2.3rem;
  }

  .router-link-active .nav-btn{
    color: #ff86a5;
  }
</style>
