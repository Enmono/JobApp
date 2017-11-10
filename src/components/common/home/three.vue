<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <span class="title">融资阶段</span>
        <div class="display">
          <mt-button @click.native="click"><span>全部</span></mt-button>
          <mt-button @click.native="handleClick"><span>未融资</span></mt-button>
          <mt-button @click.native="handleClick"><span>天使轮</span></mt-button>
          <mt-button @click.native="handleClick"><span>A轮</span></mt-button>
          <mt-button @click.native="handleClick"><span>B轮</span></mt-button>
          <mt-button @click.native="handleClick"><span>C轮</span></mt-button>
          <mt-button @click.native="handleClick"><span>D轮及以上</span></mt-button>
          <mt-button @click.native="handleClick"><span>已上市</span></mt-button>
          <mt-button @click.native="handleClick"><span>不需要融资</span></mt-button>
        </div>
      </div>
      <div class="content">
        <span class="title">人员规模</span>
        <div class="display">
          <mt-button @click.native="click"><span>全部</span> </mt-button>
          <mt-button @click.native="handleClick"><span>0-20人</span></mt-button>
          <mt-button @click.native="handleClick"><span>20-99人</span></mt-button>
          <mt-button @click.native="handleClick"><span>100-499人</span></mt-button>
          <mt-button @click.native="handleClick"><span>500-999人</span></mt-button>
          <mt-button @click.native="handleClick"><span>1000-9999人</span></mt-button>
          <mt-button @click.native="handleClick"><span>10000以上</span></mt-button>
        </div>
      </div>
      <div class="footer">
        <span class="title">行业</span>
        <div class="display">
          <mt-button @click.native="click"><span>全部</span></mt-button>
          <mt-button @click.native="handleClick"><span>非互联网各行业</span></mt-button>
          <mt-button @click.native="handleClick"><span>健康医疗</span></mt-button>
          <mt-button @click.native="handleClick"><span>生活服务</span></mt-button>
          <mt-button @click.native="handleClick"><span>旅游</span></mt-button>
          <mt-button @click.native="handleClick"><span>金融</span></mt-button>
          <mt-button @click.native="handleClick"><span>信息安全</span></mt-button>
          <mt-button @click.native="handleClick"><span>广告营销</span></mt-button>
          <mt-button @click.native="handleClick"><span>数据服务</span></mt-button>
          <mt-button @click.native="handleClick"><span>智能硬件</span></mt-button>
          <mt-button @click.native="handleClick"><span>文化娱乐</span></mt-button>
          <mt-button @click.native="handleClick"><span>网络招聘</span></mt-button>
          <mt-button @click.native="handleClick"><span>分类信息</span></mt-button>
          <mt-button @click.native="handleClick"><span>电子商务</span></mt-button>
          <mt-button @click.native="handleClick"><span>移动互联网</span></mt-button>
          <mt-button @click.native="handleClick"><span>企业服务</span></mt-button>
          <mt-button @click.native="handleClick"><span>社交网络</span></mt-button>
          <mt-button @click.native="handleClick"><span>教育培训</span></mt-button>
          <mt-button @click.native="handleClick"><span>O2O</span></mt-button>
          <mt-button @click.native="handleClick"><span>游戏</span></mt-button>
          <mt-button @click.native="handleClick"><span>互联网</span></mt-button>
          <mt-button @click.native="handleClick"><span>媒体</span></mt-button>
          <mt-button @click.native="handleClick"><span>IT软件</span></mt-button>
        </div>
      </div>
    </div>
    <div class="button">
      <div class="reset" @click="resetClick">重置</div>
      <div class="confirm" @click="confirmClick">确定<span v-show="isCount">({{number}})</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        number: '',
        isCount: false
      }
    },
    methods: {
      handleClick () {
        this.number++
        this.isCount = true
      },
      resetClick () {
        this.number = ''
        this.isCount = false
      },
      confirmClick () {
        this.$emit('countClick', this.number)
        console.log(this.number)
      },
      click () {
        this.number = 0
        this.isCount = ''
      }
    }
  }
</script>

<style scoped>
  .container{
    height: 30rem;
    width: 100%;
    background: rgb(227, 227, 227);
    border-top: 1px solid rgb(220,220,220);
    overflow-y: scroll;
  }
  .title{
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 1.6rem;
    margin-left: 1rem;
  }
  .display{
    padding: 1rem;
  }
  button{
    height: 2.6rem;
    margin-top: .5rem;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 1px solid #666666;
  }
  button:nth-child(1){
    background: #9ddbff;
  }
  button span{
    padding: 1rem;
  }
  .wrapper{
    height: 30rem;
    width: 100%;
  }
  .button{
    z-index: 999;
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .reset{
    float: left;
    width:15.9rem;
    text-align: center;
    display: inline-block;
    background: #f7f7f7;
    padding: 1rem 0;
    font-size: 1.2rem;
  }
  .confirm{
    float: right;
    width:16rem;
    text-align: center;
    display: inline-block;
    padding: 1rem 0;
    background: #9dd9ff;
    border-left:1px solid #eee;
    font-size: 1.2rem;
  }
  .change {
    background-color: #26a2ff;
    color: #fff;
  }
</style>
