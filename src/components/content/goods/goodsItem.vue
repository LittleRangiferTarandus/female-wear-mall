<template>
  <div class="goodsItem"  @click="goodsItemClick">
    <img :src="goodsItem.show.img">
    <p>{{goodsItem.title}}</p>
    <div class="bottom clear">
      
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav">⭐{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'goodsItem',
  props:{
    goodsItem:{
      type:Object,
      default(){return {}}
    },
    path:{
      type:String,
      default(){return ''}
    },
  },
  methods:{
    goodsItemClick(){
      if (this.goodsItem.url){
        window.location.href=this.goodsItem.url
      }
      if(this.goodsItem.iid){
        this.$router.push(this.path +   this.goodsItem.iid)
      }
    }
  },

}
</script>

<style scoped>
  .goodsItem{
    width: 45%;
  }
  p{
    color: gray;
    font-size: 20px;
  }
  .goodsItem>img{
    width: 100%;
  }
  .cfav{
      font-size: 15px;
  }
  .price{
     font-size: 15px;
  }
  .bottom{
      display: flex;
      justify-content: space-between;
      
  }
</style>