<template>
  <div class="bottom">
    <div class="left">
      <div>
        <div class="cs"></div>
        <p>客服</p>
      </div>
      <div>
        <div class="shop"></div>
        <p>店铺</p>
      </div>
      <div>
        <div class="fa"></div>
        <p>收藏</p>
      </div>
    </div>
    <div class="cart" @click="cartClick">加入购物车</div>
    <div class="buy">立即购买</div>
  </div>
</template>

<script>
export default {
  name:'Bottom',
  methods:{
    cartClick(){
      this.$emit('cartClickEmit')
    }
  }
}
</script>

<style scoped>
.cs{
  background: no-repeat url('../../../assets/img/detail/detail_bottom.png')  0px -70px;
}
.shop{
  background: no-repeat url('../../../assets/img/detail/detail_bottom.png')  0px -133px;
}
.fa{
  background: no-repeat url('../../../assets/img/detail/detail_bottom.png')  0px 2.5px;
}
.left>div>div{
  display: inline-block;
  height:30px;
  width: 30px;
  background-size:30px;
  
}
.left>div{
  position: relative;
  text-align: center;
  top: 50%;
  transform: translate(0,-50%);
  
}
.left{
  height: 100%;
  width: 55%;
  display: flex;
  justify-content: space-around;
}
.buy{
  background-color: pink;
  text-align: center;
  padding-top: 18px;
  font-size: 15px;
  color: white;
  height: 100%;
  width: 20%;
  
}
.cart{
  background-color: yellowgreen;
  text-align: center;
  padding-top: 18px;
  font-size: 15px;
  color: white;
  height: 100%;
  width: 25%;

}
.bottom{
  background-color: aliceblue;
display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 56px;
}
</style>