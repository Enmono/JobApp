<template>
<div class="wrapper">
  <div class="header">
    <div class="icon-w"><i class="iconfont icon-shezhi icon"></i></div>
    <div class="header-left"><img src="../../../static/img/1.jpg" class="avatar"></div>
    <div class="header-mid">
      <p>项倩倩</p>
      <p>应届生</p>
    </div>
    <div class="babel"> ></div>
    <div class="header-right">
      <p>编辑简历</p>
      <p>完善度100%</p>
    </div>
  </div>
  <div class="nav">
    <div class="conmunicate">
      <div class="number">12</div>
      <div class="text">沟通过</div>
    </div>
    <div class="conmunicate">
      <div class="number">22</div>
      <div class="text">已投递</div>
    </div>
    <div class="conmunicate">
      <div class="number">3</div>
      <div class="text">待面试</div>
    </div>
  </div>
  <div class="content">
    <div class="item">
      <i class="iconfont icon-xiaomishu icon1"></i>
      <p class="text">小秘书</p>
    </div>
    <div class="item">
      <i class="iconfont icon-shangchuanjianli icon1"></i>
      <p class="text">上传简历</p>
    </div>
    <div class="item">
      <i class="iconfont icon-guanzhu icon1"></i>
      <p class="text">关注公司</p>
    </div>
    <div class="item">
      <i class="iconfont icon-dengluwangye icon1"></i>
      <p class="text">登录网页版</p>
    </div>
    <div class="item">
      <i class="iconfont icon-liwu-copy icon1"></i>
      <p class="text">我的道具</p>
    </div>
    <div class="item">
      <i class="iconfont icon-daojubao icon1"></i>
      <p class="text">道具商城</p>
    </div>
    <div class="item">
      <i class="iconfont icon-guanzhu1 icon1"></i>
      <p class="text">感兴趣职位</p>
    </div>
    <div class="item">
      <i class="iconfont icon-qianbao icon1"></i>
      <p class="text">钱包</p>
    </div>
  </div>
  <div class="section">
    <div class="list">
      <i class="iconfont icon-tongzhi icon1"></i>
      <span class="sec-text">通知</span>
      <span class="sec-for"> ></span>
    </div>
    <div class="list">
      <i class="iconfont icon-yinsi icon1"></i>
      <span class="sec-text">隐私设置</span>
      <span class="sec-for"> ></span>
    </div>
    <div class="list">
      <i class="iconfont icon-zhuanhuan2 icon1"></i>
      <span class="sec-text">Boss直聘兑换码</span>
      <span class="sec-for"> ></span>
    </div>
  </div>
  <div class="pla1"></div>
  <tab-bar></tab-bar>
</div>
</template>
<script>
  import TabBar from '../tabbar'
  export default {
    components: {
      TabBar
    }
  }
</script>
<style scoped>
.header{
  width:100%;
  height:12rem;
  background: #b2e4ee;
}
  .icon-w{
    float: right;
    margin-right: 1rem;
    margin-top: 1rem;
  }
  .icon{
    display: inline-block;
    font-size: 2rem;
    color:#fff;
  }
 .avatar{
   border-radius: 50%;
   display: inline-block;
   margin-top: 2rem;
   margin-left: 1rem;
 }
  .header-left{
    display: inline-block;
    vertical-align: middle;
  }
  .header-mid{
    display: inline-block;
    font-size: 1.5rem;
    color:#fff;
    margin-left: 1rem;
    vertical-align: middle;
    margin-top: 2.5rem;
  }
  .header-mid p:nth-child(2){
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  .header-right{
    display: inline-block;
    font-size: 1.1rem;
    color:#fff;
    /*vertical-align: middle;*/
    float: right;
    margin-top: 5rem;
    margin-right: .5rem;
  }
  .header-right p:nth-child(2){
    margin-top: .5rem;
    font-size: 1rem;
  }
  .babel{
    display: inline-block;
    color:#fff;
    font-size: 2rem;
    float: right;
    margin-top: 5rem;
    margin-right: -1.5rem;
  }
  .nav{
    width:100%;
    height:6rem;
    display: flex;
    text-align: center;
    line-height:2rem;
    background: #fff;
  }
  .conmunicate{
    flex: 1;
    margin-top: 1rem;
  }
  .number{
    font-weight: bold;
    font-size: 1.6rem;
    color:#000;
  }
  .item{
    display: inline-block;
    width:24%;
    background: #ffffff;
    text-align: center;
    padding-top: 1rem;
    border: 1px solid #eee;
    padding-bottom: 1rem;
  }
  .icon1{
    margin-top: 1rem;
    display: inline-block;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .section{
    margin-top: 2rem;
  }
  .list{
    border-bottom: 1px solid #959595;
    border-top:1px solid #949494;
  }
  .sec-text{
    vertical-align: middle;
    font-size: 1.3rem;
    margin-left: 0.8rem;
  }
  .section .list .icon1{
    margin-left: 2rem;
    vertical-align: middle;
  }
  .sec-for{
    float: right;
    font-size: 2rem;
    margin-top: 1rem;
    margin-right: 1rem;
    color: #8f8f8f;
  }
  .list:nth-child(2){
    border-top:none;
  }
  .list:nth-child(3){
    margin-top: 1rem;
  }
.pla1{
  width:100%;
  height:5rem;
  bottom: 0;
}
</style>
