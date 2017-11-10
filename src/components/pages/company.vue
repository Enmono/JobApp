<template>
<div class="wrapper">
  <div class="top">
    <div class="top-mid">
      <span>公司</span>
    </div>
    <div class="top-right">
      <i class="iconfont icon-sousuo icon"></i>
    </div>
  </div>
  <div class="pla"></div>
  <div>
    <ul class="mid">
      <li v-for="(item,index) in list" class="content" @click="showList(index)">
        {{item.name}}
        <span v-show="isCount">({{item.number}})</span>
        <i class="iconfont icon-down-trangle icon"></i>
      </li>
    </ul>
  </div>
  <div class="pla1"></div>
  <div class="shadow">
    <div class="shadow1" v-if="forShow" @touchmove.prevent>
      <sel-first v-show="forShow" @countClick="countClick" :myList="showSelect" :myIndex="isIndex"></sel-first>
    </div>
  </div>
  <div>
    <ul class="hehe">
      <li v-for="(item, key) in newsListShow" class="list-show">
        <div class="content-left">
          <img :src="item.author_img1" class="pic">
        </div>
        <div class="content-right">
          <p>{{item.company}}</p>
          <p>{{item.location}}</p>
          <p>{{item.industry}}</p>
          <p>{{item.level}}</p>
          <p>{{item.count}}</p>
          <p></p>
          <p>{{item.hotter}}</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="pla2"></div>
  <tab-bar></tab-bar>
  </div>
</template>
<script>
  import SelFirst from '../common/company/sel-first'
  import TabBar from '../tabbar'
  export default {
    components: {
      SelFirst,
      TabBar
    },
    data () {
      return {
        newsListShow: [],
        showSelect: [],
        forShow: false,
        isCount: false,
        isIndex: '',
        list: [
          {name: '融资', number: '0'},
          {name: '规模', number: '0'},
          {name: '行业', number: '0'}
        ],
        mySelect: [
          [
            {name: '全部', selected: true},
            {name: '未融资', selected: false},
            {name: '天使轮', selected: false},
            {name: 'A轮', selected: false},
            {name: 'B轮', selected: false},
            {name: 'C轮', selected: false},
            {name: 'D轮及以上', selected: false},
            {name: '已上市', selected: false},
            {name: '不需要融资', selected: false}
          ],
          [
            {name: '全部', selected: true},
            {name: '0-20人', selected: false},
            {name: '20-99人', selected: false},
            {name: '100-499人', selected: false},
            {name: '500-999人', selected: false},
            {name: '1000-9999人', selected: false},
            {name: '10000人以上', selected: false}
          ],
          [
            {name: '全部', selected: true},
            {name: '非互联网行业', selected: false},
            {name: '健康医疗', selected: false},
            {name: '生活服务', selected: false},
            {name: '旅游', selected: false},
            {name: '金融', selected: false},
            {name: '信息安全', selected: false},
            {name: '广告营销', selected: false},
            {name: '数据服务', selected: false},
            {name: '智能硬件', selected: false},
            {name: '文化娱乐', selected: false},
            {name: '网络招聘', selected: false},
            {name: '分类信息', selected: false},
            {name: '电子商务', selected: false},
            {name: '移动互联网', selected: false},
            {name: '企业服务', selected: false},
            {name: '社交网络', selected: false},
            {name: '教育培训', selected: false},
            {name: 'O2O', selected: false},
            {name: '游戏', selected: false},
            {name: '互联网', selected: false},
            {name: '媒体', selected: false},
            {name: 'IT软件', selected: false}
          ]
        ]
      }
    },
    methods: {
      setNewsApi: function () {
        this.$http.post(/\.json/, 'type=top&key=123456')
          .then(res => {
            console.log(res.data)
            this.newsListShow = res.data.data
          })
      },
      showList (index) {
        if (!this.forShow) {
          this.showSelect = this.mySelect[index]
          this.forShow = true
          this.isIndex = index
        } else {
          this.forShow = false
        }
      },
      countClick (number) {
        this.list[this.isIndex].number = number
        this.forShow = false
        if (number > 0) {
          this.isCount = true
        } else {
          this.isCount = false
        }
        this.setNewsApi()
      }
    },
    created () {
      this.setNewsApi()
    }
  }
</script>
<style scoped>
  .shadow{
    width: 100%;
    background: #e3e3e3;
    position: fixed;
  }
  .top{
    width:100%;
    height:4.5rem;
    background: #b2e4ee;
    line-height: 4.5rem;
    color: #fff;
    position: fixed;
  }
  .top-mid{
    text-align: center;
    margin-left:3rem;
    width:80%;
    display: inline-block;
    font-size: 1.6rem;
  }
  .top-right{
    display: inline-block;
    float: right;
  }
  .pla{
    width:100%;
    height:4.5rem;
  }
  .icon{
    display: inline-block;
    margin-right: 1rem;
    font-size: 2rem;
  }
  .mid{
    width: 100%;
    display: flex;
    text-align: center;
    background: #ffffff;
    height:4rem;
    line-height: 4rem;
    font-size: 1.3rem;
    color: #a5a5a5;
    position: fixed;
  }
  .icon{
    font-size: 1.3rem;
  }
  .pla1{
    width:100%;
    height:4rem;
  }
  .content{
    display: inline-block;
    flex: 1;
    text-align: center;
  }
  .list-show{
    height:11.5rem;
    margin-bottom: 1rem;
    background: #f7f7f7;
    font-size: 1.6rem;
    padding: 1rem;
    display: flex;
  }
  .pic{
    border-radius: 0.5rem;
  }
  .content-left{
    justify-content: flex-start;
  }
  .content-right{
    margin-left: 2rem;
  }
  p:nth-child(1) {
    color: #000000;
    margin-bottom: 1.7rem;
  }
  p:nth-child(2){
    font-size: 1.2rem;
    color: #666666;
    margin-bottom: 1.3rem;
  }
  p:nth-child(3){
    font-size: 1.2rem;
    color: #666666;
    display: inline-block;
  }
  p:nth-child(4){
    font-size: 1.2rem;
    color: #666666;
    display: inline-block;
  }
  p:nth-child(5){
    font-size: 1.2rem;
    color: #666666;
    display: inline-block;
  }
  p:nth-child(6){
    border-bottom: 0.1rem solid #666666;
    margin-top: 1rem;
  }
  p:nth-child(7){
    font-size: 1.1rem;
    color: #fb9bb7;
    display: inline-block;
    margin-top: 1rem;
  }
  .pla2{
    width:100%;
    height:5rem;
    bottom: 0;
  }
</style>
