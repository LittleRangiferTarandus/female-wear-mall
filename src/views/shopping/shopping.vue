<template>
  <div class="shopping">
    <navbar class="navbar">
      <template v-slot:center>
        <div>购物篮({{Object.keys($store.state.cart).length}})</div>
      </template>
    </navbar>
    <my-scroll class="content">
      <div class="items" v-if="cartList">
        <shop-item v-for="(item,index) in cartList" :key="item" :shopItemData='cartList[index] '
        :ifActive="selectAll[item.id]" @itemDotClick='shopDotClick'></shop-item>
      </div>
    </my-scroll>
    <shop-bottom ref="shopBottom" @selectAllClick='detailSelectAllClick' @selectAntiClick='detailSelectAntiClick' :sumPrice="shopSumPrice"
    v-if="cartList"></shop-bottom>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar.vue'
import {getCartList} from '@/network/cart.js'
import MyScroll from '../../components/common/myScroll/myScroll.vue'
import ShopItem from './childComps/shopItem.vue'
import ShopBottom from './childComps/shopBottom.vue'
export default {
  components: { navbar, MyScroll, ShopItem, ShopBottom },
  name:'Shopping',
  data(){
    return{
      cartList:null,
      selectAll:null
    }
  },
  created(){
    let ActiveList = {}
    for (let i of Object.keys(this.$store.state.cart)){
      ActiveList[i] = false
    }
    this.selectAll = ActiveList
    getCartList(this.$store.state.cart).then( res => {
      this.cartList = res
    })
  },
  watch:{
    $route(a,b){
      if(this.$route.path.indexOf('/shopping') === -1) {return}
      getCartList(this.$store.state.cart).then( res => {
        this.cartList = res
      })
      for (let i of Object.keys(this.$store.state.cart)){
        if(this.selectAll[i] === undefined){
          this.selectAll[i] = false
        }
      }
    }
  },
  updated(){
    
  },
  methods:{
    shopDotClick(id){
      this.selectAll[id] = !this.selectAll[id]
      this.ifAllSelect()
    },
    ifAllSelect(){
      if(Object.keys(this.$store.state.cart).length === 0) {
        this.$refs.shopBottom.ifAll = false
        return
      }
      for(let i of Object.keys(this.$store.state.cart)){
        if(this.selectAll[i] === false){
          this.$refs.shopBottom.ifAll = false
          return
        }
      }
      this.$refs.shopBottom.ifAll = true
    },
    detailSelectAllClick(ifAll){
      for(let i of Object.keys(this.$store.state.cart)){
        this.selectAll[i] = ifAll
      }
    },
    detailSelectAntiClick(){
      for(let i of Object.keys(this.$store.state.cart)){
        this.selectAll[i] = !this.selectAll[i]
      }
      this.ifAllSelect()
    }
  },
  computed:{
    shopSumPrice(){
      let ans = 0
      Object.keys(this.$store.state.cart).sort().forEach((value,index) => {
        ans += parseFloat( this.cartList[index].price )* this.selectAll[value]*parseFloat( this.cartList[index].number )
      })
      return ans.toFixed(2)
    }
  }
}
</script>

<style scoped>
  .navbar{
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    background-color: pink;
  }
  .shopping{
    z-index: 10;
    background-color: white;
    padding-top: 44px;
    height: 100vh;
    padding-bottom: 106px;
  }
  .content{
    height: 100%;
  }
</style>