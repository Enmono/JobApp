<template>
  <div>
    <div class="top">
      <span @click="goToChat"> < BACK </span>
      <span @click="del_click">清空</span>
    </div>
    <div class="pla"></div>
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}" class="contents" @click="toggleFinish(item)">
        <img src="../../../../static/img/1.jpg" class="avatar">
        <span class="communicate">{{item.label}}</span>
      </li>
    </ul>
    <div class="pla2"></div>
    <div class="input_bg">
      <input class="input_content" type="text" v-model="newItem" @keyup.enter="addNew" />
      <i class="iconfont icon-fasongzhuanhuan icon" @click="addNew"></i>
    </div>
  </div>
</template>
<script>
  import Store from '../../../store/store'
  export default {
    data () {
      return {
        items: Store.fetch(),
        newItem: ''
      }
    },
    watch: {
      items: {
        handler (items) {
          Store.save(items)
        },
        deep: true // 对象内部的属性监听
      }
    },
    methods: {
      toggleFinish (item) {
        item.isFinished = !item.isFinished
      },
      addNew () {
        this.items.push({
          label: this.newItem,
          'isFinished': false
        })
        this.newItem = ''
      },
      del_click () {
        localStorage.clear()
      },
      goToChat () {
        this.$router.push({path: '/message/chat'})
      }
    }
  }
</script>
<style scoped>
  .pla{
    width:100%;
    height:4.5rem;
  }
  .top{
    width:100%;
    height:4.5rem;
    background: #b2e4ee;
    line-height: 4.5rem;
    color: #fff;
    position: fixed;
  }
  .top span{
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  .top span:nth-child(2){
    float: right;
    margin-right: 2rem;
  }
  .input_bg{
    width:100%;
    height:5rem;
    line-height: 5rem;
    background: #eee;
    position: fixed;
    bottom:0;
  }
  .input_content{
    width:80%;
    height:3rem;
    border: 2px solid #000;
    font-size: 1.5rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
    outline: none;
    padding: 0 0.2rem;
    color:#000;
  }
  .icon{
    font-size: 2.5rem;
    margin-left: 1rem;
    display: inline-block;
    vertical-align: middle;
  }
  .pla2{
    width:100%;
    height:5rem;
  }
  .avatar{
    border-radius: 50%;
    border: 0.1rem solid #eee;
    margin-left:1rem;
    margin-top: 1rem;
  }
  .communicate{
    display:inline-block;
    font-size: 1.5rem;
    overflow: hidden;
    word-wrap: break-word;
    border:0.1rem solid #eee;
    width:60%;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
</style>

