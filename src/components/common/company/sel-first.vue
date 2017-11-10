<template>
<div class="wrapper">
  <div class="display">
    <mt-button v-for="(item, index) in myList" @click.native="handleClick(index)" :class="{select:item.selected}" :key="index"><span>{{item.name}}</span></mt-button>
  </div>
  <div class="button">
    <div class="reset" @click="resetClick">重置</div>
    <div class="confirm" @click="confirmClick">确定<span v-show="isCount">({{number}})</span></div>
  </div>
</div>
</template>
<script>
//  import Store from '../../../store/store'
  export default {
    props: ['myList'],
    data () {
      return {
        number: '',
        isCount: false
//        myHistory: Store.fetch()
      }
    },
    methods: {
      handleClick (index) {
        if (index === 0) {
          for (let i = 0; i < this.myList.length; i++) {
            this.myList[i].selected = false
          }
          this.number = ''
          this.isCount = false
          this.myList[0].selected = true
        } else {
          if (this.myList[index].selected) {
            this.number--
            this.isCount = true
            this.myList[index].selected = false
          } else {
            this.number++
            this.isCount = true
            this.myList[index].selected = true
          }
        }
        if (this.number === '') {
          this.number = ''
          this.isCount = false
          this.myList[0].selected = true
        } else {
          this.myList[0].selected = false
        }
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
  .display{
    padding: 1rem;
  }
button{
  height: 2.6rem;
  margin-top: .5rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #666666;
  margin-right: 0.5rem;
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
  .select{
    background: #91d1ee;
    color:#fff;
  }
</style>
