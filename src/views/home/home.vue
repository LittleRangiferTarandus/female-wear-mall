<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template  v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control :list="tabControlList" class="tabControl2" ref="tabControl2" @tabControlClick='tabControlClick2' v-show="tabControlSticky"></tab-control>
    <my-scroll class="content" ref='MyScroll'  
              @my-scroll-scroll='homeScroll' 
              :probe-type=3
              @my-scroll-pulling-up='homePullingUp'
              :pull-up-load='true' >
      <swiper :picListProp="bannerImage" :linkListProp='bannerLink'  v-if="bannerImage&&bannerLink" class="homeSwiper"></swiper>
      <recommend-view :recommend="recommend" v-if="recommend"></recommend-view>
      <feature class="feature"></feature>
      <tab-control :list="tabControlList" class="tabControl" ref="tabControl1" @tabControlClick='tabControlClick1' ></tab-control>
      <goods :list="good[initialGoodsList].list"  v-if="good.pop.list" ref="homeGoods"></goods>
    </my-scroll>
    <back-top class="backTop" @click="backTopClick" v-show="backTopShow"></back-top>
  </div>
</template>
<script>
  import { getHomeMultidata ,getHomeGoods} from "@/network/home.js";
  import navBar from "@/components/common/navbar/navbar.vue";
  import swiper from "@/components/content/swiper/swiper.vue";
  import recommendView from "./childComps/recommendView.vue";
  import tabControl from "@/components/content/tabControl/tabControl";
  import feature from "./childComps/feature"
  import goods from "@/components/content/goods/goods";
  import myScroll from "@/components/common/myScroll/myScroll";
  import {backTopMixin} from '@/common/mixin.js';
  export default {
    name: "home",
    mixins:[backTopMixin],
    data(){
      return{
        bannerImage:null,
        bannerLink:null,
        recommend: null,
        tabControlList:['流行','新款','精品'],
        good:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        initialGoodsList:'pop',
        scroll:null,
        //sticky
        tabControlSticky:false,

        //上拉
        goodsOffsetTop:0,
        goodsHeight:0
      }
    },
    created(){
      getHomeMultidata().then(res => {
        this.bannerImage=[]
        this.bannerLink=[]
        for (let item of res.data.data.banner.list){
          
          this.bannerImage.push(item.image)
          this.bannerLink.push(item.link)
        }
        this.recommend=res.data.data.recommend
      })
      this.getHomeGoodsLocal('pop')
      this.getHomeGoodsLocal('new')
      this.getHomeGoodsLocal('sell')
    },
    updated(){this.$refs.tabControl1.$el.offsetTop
      this.$refs.MyScroll.refresh()
    },
    mounted(){
      
    },
    components:{
      swiper,
      navBar,
      recommendView,
      feature,
      tabControl,
      goods,
      myScroll,
    },
    methods:{
      getHomeGoodsLocal(type){
        const page=this.good[type].page
        getHomeGoods(type,1).then(res => {
          this.good[type].list.push(...res.data.data.list)
          this.good[type].page++

          this.$refs.MyScroll.finishPullUp()
        })
      },
      tabControlClick1(index){
        this.initialGoodsList=['pop','new','sell'][index]
        this.$refs.tabControl2.$data.currentIndex=index
      },
      tabControlClick2(index){
        this.initialGoodsList=['pop','new','sell'][index]
        this.$refs.tabControl1.$data.currentIndex=index
      },
      homeScroll(position){
        this.backTopIfShow(position)
        if(position.y<-this.$refs.tabControl1.$el.offsetTop){
          this.tabControlSticky=true
        }
        else{
          this.tabControlSticky=false
        }
      },
      homePullingUp(position){
        this.getHomeGoodsLocal(['pop','new','sell'][this.$refs.tabControl1.$data.currentIndex])
        //console.log(this.good);
      }
    },
  }
</script>
<style scoped>
  .home{
    padding-top: 44px;
    height: 100vh;
    padding-bottom: 52px;
  }
  .home-nav{
    background-color: pink;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    color: white;
  }
  .homeSwiper{
    height: 30vh;
  }

  .content{
    height: 100%;
    overflow: hidden;
  }
  .tabControl2{
    position: fixed;
    top:44px;
    z-index: 10;
  }
</style>