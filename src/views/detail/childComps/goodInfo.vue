<template>
  <div class="goodInfo">
    <div class="content">
      <p class="title">{{goodData.title}}</p>
        <div class="price">
            <span>{{goodData.newPrice}}</span>
            <span>{{goodData.oldPrice}}</span>
            <span>{{goodData.discount}}</span>
        </div>
        <div class="column">
            <span>{{goodData.columns[0]}}</span>
            <span>{{goodData.columns[1]}}</span>
            <span>{{goodData.services[0].name}}</span>
        </div>
        <div class="other">
            <div v-for="index in goodData.services.length-1" :key="index">
                <img :src="goodData.services[index].icon" alt="">
                <span>{{goodData.services[index].name}}</span>
            </div>
        </div>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  name:'goodInfo',
  props:{
    goodData:{
      type:Object,
      default(){return null}
    }
  }
}
</script>

<style scoped>
.title{
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 15px;
}
.price>span:first-of-type{
  color: deeppink;
  font-size: 22px;
  font-weight: bold;
}
.price>span:nth-of-type(2){
  text-decoration:line-through;
  color: grey;
  font-size: 10px;
}
.price>span:nth-of-type(3){
  border-radius: 0.5em 0.5em 0.5em 0.5em ;
  display: inline-block;
  font-size: 15px;
  text-align: center;
  color: white;
  width: 80px;
  background-color: rebeccapurple;
}
.price{
  margin-bottom: 10px;
}
.column{
  display: flex;
  justify-content: space-between;
  
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 1px gray dotted  ;
  margin-bottom: 10px;
}
.column>span{
  color: rgb(93, 93, 93);
  font-size: 10px;
}
.other{
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  color: rgba(167, 167, 167);
}
.other div{
  display: inline-block;
}
.other img{
  width: 10px;
  height: 10px;
}
.content{
  margin:5px 5px 25px 5px;
}
.shadow{
  right: 0;
  left: 0;
  background-color: rgba(128, 128, 128, 0.281);
  height: 10px;
}
</style>