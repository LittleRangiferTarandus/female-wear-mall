<template>
  <div class="swiper " :style='{}'>
    <ul class="pic " :style='{width:picList.length*winWidth+"px",left:currentPx+"px",transitionDuration:"1s",transitionProperty:transitionUl}'>
      <li class='' v-for='(item,index) in picList' :key="item" :style='{width:winWidth+"px"}'>
        <a :href="linkListProp[index]">
          <img  :src="item" >
        </a>
      </li>
    </ul>
    <ul class="dot" >
      <li v-for='(item,index) in picListProp' :class='{active:index===currentIndex%picListProp.length}' @click="dotClick(index) " :key="item"></li>
    </ul>
    <div class='left' @click="clickLeft">&lt;</div>
    <div class="right" @click="clickRight">></div>
  </div>
</template>
<script>
  export default {
      name:"swiper",
      data(){
        return{
          transitionUl:'all',
          timerTmp:null,
          picSize:0,
          timer:null,
          picList:[],
          moveTotalTime:6000,
          direction:1,
          currentIndex:0,
          currentPx:0,
        }
      },
      props:{
          picListProp:{
            type:Array,
            default(){return []}
          },
          linkListProp:{
            type:Array,
            default(){return []}
          },
      },
      created(){
        for (let i =0; i < this.picListProp.length*2; i++){
          this.picList.push(this.picListProp[i%this.picListProp.length]) 
        }       
        this.movePage()
      },
      computed:{
        winWidth(){
          if (window.innerWidth)
            return window.innerWidth;
          else if ((document.body) && (document.body.clientWidth))
            return document.body.clientWidth;
        }
      },
      methods:{
          movePage(){
            let self=this
            clearInterval(this.timer)
            this.timer=setInterval(() => {
                self.page(self.currentIndex+this.direction)
            }, this.moveTotalTime);
          },
          page(index){
            let tmp=index-this.currentIndex
            this.currentIndex=index

            
            if(this.currentIndex>this.picList.length/2){
                this.transitionUl="none"
              this.currentIndex-=this.picList.length/2
              this.currentPx+=this.picList.length/2*this.winWidth
            }
            if(this.currentIndex<0){
                this.transitionUl="none"
              this.currentIndex+=this.picList.length/2
              this.currentPx-=this.picList.length/2*this.winWidth
            }
            clearInterval(this.timerTmp)
            this.timerTmp=setTimeout(() => {
              this.transitionUl="all"
              this.currentPx-=tmp*this.winWidth
            }, 1);
            
            
          },
          dotClick(index){
            this.movePage()
            this.page(index)
          },
          clickLeft(){
              this.page(this.currentIndex-1)
              this.movePage()
              this.direction=-1;
          },
          clickRight(){
              this.page(this.currentIndex+1)
              this.movePage()
              this.direction=1;
          },
      }
  }
</script>
<style scoped>
  .swiper{
      width:100%;
      position:relative;
      background-color: rgba(240, 255, 255, 0.472);
      
  }
  .swiper>.pic a{
      z-index:0;
      display:inline-block;
      height: 100%;
  }
  .swiper>.pic img{
    display:inline-block;
    width: auto;
    height: 100%;
    max-width: 100%;
      z-index:0;
  }
  .swiper>.pic{
      position:relative;
      display: flex;
      justify-content:space-between;
      height: 100%;
      padding:0px;
  }
  .swiper>.pic>li{
      display: flex;
      justify-content: center;
      top:0;
      left: 0;
      height: 100%;
  }
  .swiper>.dot{
      position:absolute;
      bottom:0px;
      left:50%;
      transform:translate(-50%)
  }
  .swiper>.dot>li{
      background-color:white;
      border-radius:50% 50%;
      width:10px;
      display:inline-block;
      height:10px;
      margin:0 5px 0 5px
  }
  .swiper>.dot>.active{
      background-color:deeppink;
  }
  .swiper>.left,.swiper>.right{
      width:20px;
      height:20px;
      background-color:grey ;
      opacity:0.5;
      top:50%;
      position:absolute;
      transform:translateY(-50%);
      text-align:center
  }
  .swiper>.left{
      left:0;
  }
  .swiper>.right{
      right:0;
  }
</style>