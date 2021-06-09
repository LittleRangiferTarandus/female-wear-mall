<template>
  <div class="detailInfo">
    <div class="desc">{{detailData.desc}}</div>
    <div class="detailImageList">
      <div class="key">{{detailData.detailImage[0].key}}</div>
      <div class="detailImage" v-for="(item) in detailData.detailImage[0].list"
      :key='item'>
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailInfo",
  props:{
    detailData:{
      type: Object,
      default(){ return {} }
    }
  }
}
</script>

<style scoped>
.detailImage>img{
    display: inline-block;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
}
.detailImage{
 width: 100%;
}
.key{
  text-align: right;
  margin: 5px;
}
.desc{
  font-size: 10px;
  color: gray;
  border-bottom: 1px double gray;
}
.detailInfo{
  margin: 5px;
  border-bottom: 1px double gray;
}
</style>