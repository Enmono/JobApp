<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <span class="title">学历</span>
        <div class="display">
          <mt-button @click.native="click"><span>全部</span></mt-button>
          <mt-button @click.native="handleClick"><span>中专及以下</span></mt-button>
          <mt-button @click.native="handleClick"><span>高中</span></mt-button>
          <mt-button @click.native="handleClick"><span>大专</span></mt-button>
          <mt-button @click.native="handleClick"><span>本科</span></mt-button>
          <mt-button @click.native="handleClick"><span>硕士</span></mt-button>
          <mt-button @click.native="handleClick"><span>博士</span></mt-button>
        </div>
      </div>
      <div class="content">
        <span class="title">经验</span>
        <div class="display">
          <mt-button @click.native="click"><span>全部</span></mt-button>
          <mt-button @click.native="handleClick"><span>应届生</span></mt-button>
          <mt-button @click.native="handleClick"><span>1年以内</span></mt-button>
          <mt-button @click.native="handleClick"><span>1-3年</span></mt-button>
          <mt-button @click.native="handleClick"><span>3-5年</span></mt-button>
          <mt-button @click.native="handleClick"><span>5-10年</span></mt-button>
          <mt-button @click.native="handleClick"><span>10年以上</span></mt-button>
        </div>
      </div>
      <div class="footer">
        <span class="title">薪水(单选)</span>
        <div class="display">
          <mt-button @click.native="click"><span>全部</span></mt-button>
          <mt-button @click.native="handleClick"><span>3k以下</span></mt-button>
          <mt-button @click.native="handleClick"><span>3k-5k</span></mt-button>
          <mt-button @click.native="handleClick"><span>5k-10k</span></mt-button>
          <mt-button @click.native="handleClick"><span>10k-20k</span></mt-button>
          <mt-button @click.native="handleClick"><span>20k-50k</span></mt-button>
          <mt-button @click.native="handleClick"><span>50k以上</span></mt-button>
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
      }
    }
  }
</script>

<style scoped>
  span.title{
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 1.6rem;
    margin-left: 1rem;
  }

  .display{
    padding: 1rem;
    /*text-align: center;*/
  }
  button:nth-child(1){
    background: #9ddbff;
  }
  button{
    height: 2.6rem;
    margin-top: .5rem;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 1px solid #666666;
  }
  button span{
    padding: 1rem;
  }
  .button{
    text-align:center ;
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
</style>

