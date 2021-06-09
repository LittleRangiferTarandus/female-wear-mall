<template>
  <div class="shopItem">
    <div class="O" @click="dotClick"  :class="{active:ifActive}"></div>
    <div class="img"><img :src="shopItemData.img" alt=""></div>
    <div class="info">
      <div class="title">{{shopItemData.title}}</div>
      <div class="number">
        <p>{{'单价:￥'+ shopItemData.price}}</p>
        <p>{{'数量:'+ shopItemData.number}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ShopItem',
  data(){
    return{
    }
  },
  props:{
    shopItemData:{
      type:Object,
      default(){return {}}
    },
    ifActive:{
      type:Boolean,
      default:false
    }
  },
  computed:{
  },
  methods:{
    dotClick(){
      this.$emit('itemDotClick',this.shopItemData.id)
    }
  }
}
</script>

<style scoped>
.active{
    background-color: pink !important;
}
.number{
    font: 3vw sans-serif;
    display: flex;
    width: 40vw;
    justify-content:space-between ;
}
.title{
    font: 3vw sans-serif;
        
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;

}
.info{
    width: 60%;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}
.shopItem{
    display: flex;
    right: 0;
    left: 0;
    margin: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px 5px 5px 5px;
}
.O{
    border-radius: 50%;
    width: 5vw;
    height: 5vw;
    border: solid gray 5px;
    margin-right: 5px;
    margin-top: 12vw;
    transform: translateY(-50%);
}
.img{
    width: 25vw;
    height: 25vw;
    text-align: center;
}
.img>img{
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
}

</style>