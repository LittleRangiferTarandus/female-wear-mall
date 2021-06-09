<template>
  <div class="shopInfo">
    <div class="logo">
      <img :src="shopData.logo" alt="">
      <p>{{shopData.name}}</p>
    </div>
    <tr class="data">
      <td class="dataLeft">
        <div class="sell">
          <p>{{sells}}</p>
          <p>总销量</p>
        </div>
        <div class="commodity">
          <p>{{goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
      </td>
      <td class='dataRight'>
        <div v-for="(item) in shopData.score" :key="item">
          <span>{{item.name}}</span>
          <span :class="{green:item.isBetter}">{{item.score}}</span>
          <span v-if="item.isBetter" class="greenBack">高</span>
          <span v-if="!item.isBetter" class="redBack">低</span>
        </div>
      </td>
    </tr>
    <div class="enter"><p> 进 店 逛 逛 </p></div>
  </div>
</template>

<script>
export default {
  name:'shopInfo',
  props:{
    shopData:{
      type:Object,
      default(){return {}}
    }
  },
  computed:{
    sells(){
      if(this.shopData.sells>=10000){
        return Math.round(this.shopData.sells/1000)/10 + '万'
      }
      else{ return this.shopData.sells }
    },
    goodsCount(){
      if(this.shopData.goodsCount>=10000){
        return Math.round(this.shopData.goodsCount/1000)/10 + '万'
      }
      else{ return this.shopData.goodsCount }
    }
  }
}
</script>

<style scoped>
.enter>p{
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 5px 13px 5px 13px;
  transform: translate(-50%,-50%);
  background: rgba(128, 128, 128, 0.8);
  color: white;
  border-radius: 50%;
  font-weight: normal;
}
.enter{
  position: relative;
  margin: 10px 0 10px 0px;
  border-bottom: 1px dotted gray;
  height: 50px;
  left: 0;
  right: 0;
  bottom: 0;
}
.green{
  color: green  !important;
}
.greenBack{
  background-color: green  !important;
}
.redBack{
  background-color: red !important;
}
.dataRight>div>span:nth-of-type(2){
  color: red;
}
.dataRight>div>span:first-of-type{
  margin-right: 10px;
}
.dataRight>div>span:last-of-type{
  float: right;
  color: white;
  margin-left: 10px;
}
.dataRight>div{
  margin: 5px;
}
.dataRight{
  display: inline-block;
  font-size: 10px;
}
.dataLeft{
  display: flex;
  border-right:  3px solid;
  border-image: -webkit-linear-gradient(to right, black, white) 30 30;
  border-image: -moz-linear-gradient(to right, black, white) 30 30;
  border-image: linear-gradient(to right, black, white) 30 30;
}
.dataLeft>div{
  margin: 5px;
  text-align: center;
}
.dataLeft>div>p:nth-of-type(2){
  font-size: 10px;
  margin-top: 10px;
  color: rgba(128, 128, 128, 0.8);
}
.dataLeft>div>p:nth-of-type(1){
  width: 70px;
  height: 30px;
  font-size :20px;
}
.data{
  display: flex;
  justify-content: space-between;
  width: 100%;
  right: 0;
  left:0;
}
.logo p{
  font-size: 15px;
  display: inline-block;
  line-height: 50px;
  margin: 0 0 0 10px;
  color: rgba(128, 128, 128, 0.8);
}
.logo img{
  width: 50px;
  height: 50px;
  display: inline-block;
  vertical-align:middle;
}

.shopInfo{
  margin: 5px;
}
</style>