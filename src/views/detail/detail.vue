<template>
  <div class="detail"  >
    <nav-bar class="navBarDetail" >
      <template v-slot:left>
        <nav-bar-back></nav-bar-back>
      </template>
      <template v-slot:center>
        <nav-bar-list :list='navList' ref='navList' @navClick='DetailNavClick'></nav-bar-list>
      </template>
    </nav-bar>
    <my-scroll class="content" ref='MyScroll' 
            @my-scroll-scroll='DetailScroll' 
            :probe-type=3>
    
      <swiper :picListProp='topImg' v-if="topImg" class="detailSwiper" ></swiper>
      <good-info :goodData='good' v-if="good" class="clear"></good-info>
      <shop-info :shopData="theShop" v-if="theShop"></shop-info>
      <detail-info :detailData='theDetail' v-if="theDetail"></detail-info>
      <param-info :paramData='theParam' v-if="theParam" ref="param"></param-info>
      <comment-info :commentData="theComment" v-if="theComment" ref='comment'></comment-info>
      <goods :list='theRecommend' v-if="theRecommend" ref='recommend'></goods>
    </my-scroll>
    <back-top class="backTop" @click="backTopClick" v-show="backTopShow"></back-top>
    <bottom @cartClickEmit='cartAdd'></bottom>
    <toast class="toast" ref='toast'></toast>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/navbar.vue";
import { 
  getDetail , 
  commodity , 
  shop , 
  GoodsParam , 
  CommentData,
  getRecommend,
  RecommendData,
} from "@/network/detail.js";
import swiper from "@/components/content/swiper/swiper.vue";
import navBarBack from '@/components/common/navbar/navBarBack.vue';
import navBarList from "@/components/common/navbar/navBarList";
import myScroll from "@/components/common/myScroll/myScroll";
import GoodInfo from './childComps/goodInfo.vue';
import ShopInfo from './childComps/shopInfo.vue';
import DetailInfo from './childComps/detailInfo.vue';
import ParamInfo from './childComps/paramInfo.vue';
import CommentInfo from './childComps/commentInfo.vue';
import Goods from '../../components/content/goods/goods.vue';
import Bottom from './childComps/bottom.vue';
//import Toast from '@/common/toast/toast.vue'
import {backTopMixin} from '@/common/mixin.js';
import {mapActions} from 'vuex'

  export default {
    name:'detail',
    mixins:[backTopMixin],
    components:{
      navBar,
      swiper,
      navBarBack,
      navBarList,
      myScroll,
      GoodInfo, 
      ShopInfo, 
      DetailInfo, 
      ParamInfo, 
      CommentInfo, 
      Goods, 
      Bottom, 
     // Toast
    },
    data(){
      return{
        id:null,
        navList:['商品',' 参数','评论','推荐'],
        currentIndex:0,
        topImg:null,
        good:null,
        theShop:null,
        theDetail:null,
        theParam:null,
        theComment:null,
        theRecommend:null,

        scrollList:{
          param:0,
          comment:0,
          recommend:0
        },

        toastShow:false,
      }
    },
    created(){
      this.id=this.$route.params.id
      getDetail(this.id).then(res => {
        this.topImg=res.data.result.itemInfo.topImages
        this.good=new commodity(res.data.result)
        this.theShop = new shop(res.data.result.shopInfo)
        this.theDetail = res.data.result.detailInfo
        this.theParam = new GoodsParam(res.data.result.itemParams)
        this.theComment = new CommentData(res.data.result.rate.list[0])
        
      })
      getRecommend().then(res => {
        let item = res.data.data.list
        for(let i in item){
          item[i] = new RecommendData(item[i])
        }
        this.theRecommend = item
        console.log(this.theRecommend);
      })

    },
    methods:{
      DetailScroll(position){
        this.backTopIfShow(position)
        if(position.y>-this.$refs.param.$el.offsetTop){
          this.currentIndex = 0
        }else if(position.y<=-this.$refs.param.$el.offsetTop && position.y>-this.$refs.comment.$el.offsetTop){
          this.currentIndex = 1
        }else if(position.y<=-this.$refs.comment.$el.offsetTop && position.y>-this.$refs.recommend.$el.offsetTop){
          this.currentIndex = 2
        }else if(position.y<=-this.$refs.recommend.$el.offsetTop){
          this.currentIndex = 3
        }
        this.$refs.navList.currentIndex = this.currentIndex
        
      },
      DetailNavClick(index){
        if(index === 0){
          this.$refs.MyScroll.scrollTo(0,0)
        }else if(index === 1){
          this.$refs.MyScroll.scrollTo(0,-this.$refs.param.$el.offsetTop)
        }else if(index === 2){
          this.$refs.MyScroll.scrollTo(0,-this.$refs.comment.$el.offsetTop)
        }else if(index === 3){
          this.$refs.MyScroll.scrollTo(0,-this.$refs.recommend.$el.offsetTop)
          
        }
      },
      ...mapActions({cartAddVuex:'cartAdd'}),
      cartAdd(){
        let tmpTimer = null
        this.cartAddVuex(this.$route.params.id).then(()=>{
          clearTimeout(tmpTimer)
          tmpTimer = setTimeout(()=>{
            this.$refs.toast.animation(6000)
          },3000)
        })
        //console.log(this.$store.state.cart);
      }
    }
  }
</script>

<style scoped>
  .content{
    overflow: hidden;
    height: 100%;
  }
  .detailSwiper{
    height: 40vh;
  }
  .navBarDetail{
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
  }
  .detail{
    padding-top: 44px;
    height: 100vh;
    padding-bottom: 56px;
  }
  .backTop{
    position: fixed;
    right: 0;
    bottom: 55px;
    z-index: 10;
  }
  .toast{
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%,-50%);
  }
</style>