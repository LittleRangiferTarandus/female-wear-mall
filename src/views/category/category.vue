<template>
  <div class="category">
    <navbar class='categoryNav'>
      <template v-slot:center>
        分类
      </template>
    </navbar>
    <my-scroll class="content clear" ref="MyScroll" @myScrollScroll='myScrollScrollAnserse' :probe-type=3 >
      <div class="left">
        <left  v-if="leftList" :leftData='leftList' @left-item-click-emit='leftItemClickEmitAnserse'></left>
      </div>
      <div class='right'>
        <display class="display" :displayData='displayList[currentMaitKey]'></display>
      <tab-control :list='["推荐"]' ref="tc" class="tc"></tab-control>
      <mini-wall :miniWallData="miniWallList[currentminiWallkey]" class="mw"></mini-wall>
      </div>
    </my-scroll>
    <tab-control :list='["推荐"]' v-show="isShow" class="tc2"  ref="tc2"></tab-control>
    <back-top class="backTop" @click="backTopClick" v-show="backTopShow"></back-top>
  </div>
</template>
<script>
import {getLeft, getRight,getDown} from '@/network/category.js'
import navbar from '../../components/common/navbar/navbar.vue'
import MyScroll from '../../components/common/myScroll/myScroll.vue'
import Left from './childComps/left.vue'
import Display from './childComps/display.vue'
import TabControl from '@/components/content/tabControl/tabControl.vue'
import MiniWall from './childComps/miniWall.vue'
import {backTopMixin} from '@/common/mixin.js'
export default {
  mixins:[backTopMixin],
  data(){
    return{
      leftList : null,
      displayList:{},
      currentMaitKey:'',
      currentminiWallkey:'',
      miniWallList :{},
      isShow:false,
    }
  },
  components: { 
    navbar,
    MyScroll,
    Left,
    Display,
    TabControl,
    MiniWall,
  },
  name:'category',
  created(){
    getLeft().then(res => {
      let List = []
      let data = res.data.data.category.list
      for(let i of data){
        List.push({
          title:i.title,
          maitKey :i.maitKey,
          miniWallkey:i. miniWallkey
        })
      }
      this.leftList = List
      return Promise.resolve(this.leftList[0])
    }).then(res=>{
      this.currentMaitKey = res.maitKey
      this.currentminiWallkey = res.miniWallkey
      this.getRightData(res.maitKey)
      this.getDownData(res.miniWallkey)
    })
  },
  methods:{
    getRightData(maitKey){
      if(this.displayList[maitKey]){
        return
      }
      getRight(maitKey).then(res=>{
        this.displayList[maitKey]= res.data.data.list
      })
    },
    getDownData(miniWallkey){
      if(this.displayList[miniWallkey]){
        return
      }
      getDown(miniWallkey).then(res=>{
        this.miniWallList[miniWallkey] = res.data
      })
    },
    leftItemClickEmitAnserse(maitKey,miniWallkey){
      this.getRightData(maitKey)
      this.getDownData(miniWallkey)
      this.currentMaitKey = maitKey
      this.currentminiWallkey = miniWallkey
    },
    myScrollScrollAnserse(position){
      this.backTopIfShow(position)
      if(this.$refs.tc2.$el.style.left ===''){
        this.$refs.tc2.$el.style.left = this.$refs.tc.$el.offsetLeft + 'px'
      }
      if(position.y<=-this.$refs.tc.$el.offsetTop){
        this.isShow = true
      }else{
        this.isShow = false
      }
    }
  }
}
</script>
<style scoped>
.tc{
  width: 75vw;
}
.left{
  display: inline-block;
}
.right{
  display: inline-block;
  width: 75vw;
  vertical-align: top;
}
.tc2{
  position: fixed;
  top: 46px ;
  width: 75vw;
}

.categoryNav{
  left: 0;
  top: 0;
  right: 0;
  position: fixed;
  background-color: pink;
  color: white;
}
.category{
  z-index: 10;
  padding-top: 46px;
  height: 100vh;
  padding-bottom: 52px;
  background-repeat: no-repeat;
  background-image: linear-gradient(to top,rgb(231, 230, 230),rgb(231, 230, 230) );
  background-size: 20vw 100%  ;
}

.content{
  height: 100%;
  overflow: hidden;
}
</style>