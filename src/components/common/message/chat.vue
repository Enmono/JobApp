<template>
  <div class="wrapper">
    <div class="top">
      <span>联系人</span>
      <span>查看新开聊</span>
    </div>
    <ul class="contact">
      <li class="item" @click="goToChatDetail">
        <div class="item-left">
          <img src="../../../../static/img/2.jpg" class="avatar">
        </div>
        <div class="item-right">
          <p>晴天</p>
          <p>新浪</p>
          <span>|</span>
          <p>人事</p>
          <p>了解自己</p>
          <p>11月2日</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      goToChatDetail () {
        this.$router.push({path: '/chatDetail'})
      }
    }
  }
</script>
<style scoped>
  .top{
    margin-top: 0.5rem;
    width:100%;
    height:3rem;
    background: #eee;
    font-size: 1.1rem;
    line-height: 3rem;
    /*border-left:0.3rem solid #9dd9ff;*/
    border-bottom: 1px solid #666666;
  }
  .top span:nth-child(1){
    margin-left: 1.5rem;
  }
  .top span:nth-child(2){
    float: right;
    margin-right: 1.5rem;
    font-size: 1rem;
    background: #cbcbcb;
    color:#fff;
    height:2rem;
    text-align: center;
    width:6rem;
    line-height: 2rem;
    margin-top: 0.5rem;
  }
  .item{
    width:100%;
    height:7rem;
    background: #eee;
    /*display: table-cell;*/
    /*vertical-align: middle;*/
  }
  .avatar{
    width:4rem;
    height:4rem;
    border-radius: 50%;
    /*vertical-align: middle;*/

  }
  .item-left{
    display: inline-block;
    margin-left: 1rem;
  }

  .item-right{
    display: inline-block;
    margin-left: 1rem;
    width:80%;
    margin-top: 1rem;
  }

  .item-right p:nth-child(1){
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .item-right p:nth-child(2){
    font-size: 1.2rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  }
  .item-right p:nth-child(4){
    font-size: 1.2rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
  }
  .item-right p:nth-child(5){
    font-size: 0.98rem;
    color: #afafaf;
  }
  .item-right p:nth-child(6){
    float: right;
    font-size: 0.98rem;
    color: #afafaf;
    margin-top: -5rem;
    margin-right: 2rem;
  }

</style>
