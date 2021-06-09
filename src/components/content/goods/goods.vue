<template>
  <div class="goods">
    <goods-item v-for="item in list" :key='item' :goodsItem='item' :path="'/detail/'"></goods-item>
  </div>
</template>

<script>
import goodsItem from "./goodsItem";
export default {
  name:'goods',
  components:{goodsItem},
  props:{
    list:{
      type:Array,
      default(){return []}
    },
    
  },

}
</script>

<style scoped>
  .goods{
    display: flex;
    width: 100%;
    display: -webkit-flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }

</style>
