<template>
<div class="m-home">
  <div class="top">
    <div class="top-left">
      <span>web前端</span>
    </div>
    <div class="top-right">
      <i class="iconfont icon-jia icon"></i>
      <i class="iconfont icon-sousuo icon"></i>
    </div>
  </div>
  <div class="pla"></div>
  <div class="mid">
    <div class="first content" @click="firstShow=!firstShow">推荐<span v-if="isCount">({{number}})</span></div>
    <span>|</span>
    <div class="second content" @click="secondShow=!secondShow">杭州<span v-if="isCount1">({{number1}})</span></div>
    <span>|</span>
    <div class="third content" @click="thirdShow=!thirdShow">公司<span v-if="isCount2">({{number2}})</span></div>
    <span>|</span>
    <div class="forth content" @click="forthShow=!forthShow">要求<span v-if="isCount3">({{number3}})</span></div>
  </div>
  <div class="pla1"></div>
  <div class="shadow">
    <div class="shadow1" v-if="firstShow" @touchmove.prevent>
      <sel-first v-if="firstShow" @countClick="countClick"></sel-first>
    </div>
  </div>
  <div class="shadow">
    <div class="shadow1" v-if="secondShow" @touchmove.prevent>
      <sel-first v-if="secondShow" @countClick="count1Click"></sel-first>
    </div>
  </div>
  <div class="shadow">
    <div class="shadow1" v-if="thirdShow" @touchmove.prevent>
      <three v-if="thirdShow" @countClick="count2Click"></three>
    </div>
  </div>
  <div class="shadow">
    <div class="shadow1" v-if="forthShow" @touchmove.prevent>
      <four v-if="forthShow" @countClick="count3Click"></four>
    </div>
  </div>
  <div class="content1">
    <ul>
      <li v-for="(item, key) in newsListShow" class="list-show">
        <p>{{item.position}}</p>
        <p>{{item.salary}}</p>
        <p>{{item.company}}</p>
        <p>{{item.location}}</p>
        <p>{{item.people}}</p>
        <p>{{item.records}}</p>
        <p>
          <img :src="item.author_img" class="avatar">
          <span class="name">{{item.author_name}}</span>
          <span>|</span>
          <span class="place">{{item.place}}</span>
        </p>
      </li>
    </ul>
  </div>
  <div class="pla2"></div>
  <tab-bar></tab-bar>
</div>
</template>
<script>
  import Four from '../common/home/four'
  import Three from '../common/home/three'
  import TabBar from '../tabbar'
  export default {
    components: {
      Four,
      Three,
      TabBar
    },
    data () {
      return {
        newsListShow: [],
        firstShow: false,
        secondShow: false,
        thirdShow: false,
        forthShow: false,
        number: '',
        number1: '',
        number2: '',
        number3: '',
        isCount: false,
        isCount1: false,
        isCount2: false,
        isCount3: false
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
      countClick (number) {
        this.number = number
        this.firstShow = false
        if (this.number > 0) {
          this.isCount = true
        }
        this.setNewsApi()
      },
      count1Click (number) {
        this.number1 = number
        this.secondShow = false
        if (this.number1 > 0) {
          this.isCount1 = true
        }
        this.setNewsApi()
      },
      count2Click (number) {
        this.number2 = number
        this.thirdShow = false
        if (this.number2 > 0) {
          this.isCount2 = true
        }
        this.setNewsApi()
      },
      count3Click (number) {
        this.number3 = number
        this.forthShow = false
        if (this.number3 > 0) {
          this.isCount3 = true
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
    /*padding:1rem;*/
  }
.top{
  width:100%;
  height:4.5rem;
  background: #b2e4ee;
  line-height: 4.5rem;
  color: #fff;
  position: fixed;
}
  .top-left{
    text-align: center;
    width:30%;
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
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 2rem;
  }
  .mid{
    width: 100%;
    display: flex;
    text-align: center;
    background: #ffffff;
    height:2rem;
    line-height: 2rem;
    font-size: 1.3rem;
    color: #a5a5a5;
    position: fixed;
  }
.pla1{
  width:100%;
  height:2rem;
}
  .content{
    flex: 1;
  }
  ul{
    width:100%;
    margin-top: 1rem;
  }
  .list-show{
    height:11.5rem;
    margin-bottom: 1rem;
    background: #f7f7f7;
    font-size: 1.6rem;
    padding: 1rem;
  }
  p:nth-child(1){
    color: #000000;
    display:inline-block ;
  }
  p:nth-child(2){
  color: #ff4e3f;
  display:inline-block ;
  float: right;
  margin-right: 1.5rem;
}
  p:nth-child(3){
    color: #949494;
    font-size: 1.3rem;
    padding: 1rem 0;
  }
  p:nth-child(4){
    color: #949494;
    font-size: 1.1rem;
    display: inline-block;
  }
  p:nth-child(5){
    color: #949494;
    font-size: 1.1rem;
    display: inline-block;
  }
  p:nth-child(6){
    color: #949494;
    font-size: 1.1rem;
    display: inline-block;
  }
  p:nth-child(7){
    height:5rem;
    line-height: 5rem;
    color: #3ed5ff;
    font-size: 1.3rem;
  }
  .avatar{
    border-radius: 50%;
    vertical-align:middle;
  }
  .name{
    vertical-align:middle;
    margin-left: 1.5rem;
  }
  .place{
    vertical-align:middle;
  }
  .pla2{
    width:100%;
    height:5rem;
    bottom: 0;
  }

</style>
