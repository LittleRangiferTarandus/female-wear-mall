<template>
  <div class="shopBottom">
    <div class="select">
      <div class="all">
        <div class="dot" :class="{active:ifAll}" @click="dotClick"></div>
        <div class="text">{{text}}</div>
      </div>
      <div class="anti" @click="antiClick">反选</div>
    </div>
    <div class="sum">合计：￥ {{sumPrice}}</div>
    <div class="BUY">
      立即结算
    </div>
  </div>
</template>

<script>
export default {
  name:'shopBottom',
  data(){
    return{
      ifAll:false
    }
  },
  props:{
    sumPrice:{
      type:Number,
      default: 0,
    }
  },
  computed:{
    text(){
      return this.ifAll?'全不选':'全选'
    }
  },
  methods:{
    dotClick(){
      this.ifAll = !this.ifAll
      this.$emit('selectAllClick',this.ifAll)
    },
    antiClick(){
      this.$emit('selectAntiClick')
    }
  }
}
</script>

<style scoped>
.all{
  display: flex;
  align-items: center;
}
.active{
  background-color: rgb(255, 192, 226);
}
.select{
    display: flex;
    font-size: 4vw;
    width: 120px;
    align-items: center;
    justify-content:space-between;
}
.dot{
    width: 3vw;
    height: 3vw;
    margin-right: 5px ;
    margin-left: 10px;
    border-radius: 50%;
    border:  1px black solid;
}
.BUY{
    display: table-cell;
    width: 100px;
    height: 50px;
    background-color: rgba(247, 0, 255, 0.863);
    text-align: center;
    font-weight:bold;
    line-height: 50px;
    color: white;
    font-size: 20px;
}
.sum{
  font-size: 15px;
}
.shopBottom{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0;
    right: 0;
    z-index: 10;
    position: fixed;
    background-color: whitesmoke;
    bottom: 49px;
}
</style>