<template>
  <div class="wrap" ref="myScrollWrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {createBScroll} from 'better-scroll'
export default {
  name:'myScroll',
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll = new createBScroll(this.$refs.myScrollWrap,{
      observeDOM:true,
      observeImage:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    this.scroll.on('scroll',position=>{
      this.$emit('myScrollScroll',position)
    })
    this.scroll.on('pullingUp',position=>{
      this.$emit('myScrollPullingUp',position)
    })
  },
  props:{
    probeType:{
      type:Number,
      default:1,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>
<style scoped>
  .wrap{
    width: 100%;
    overflow: hidden;
  }
  .content{
    padding-bottom: 100px;
  }
</style>