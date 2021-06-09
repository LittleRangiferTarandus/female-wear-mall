<template>
  <div class="tabControl">
    <div class="item" v-for="(item,index) in list" :key="item" :class="{active:currentIndex===index}" @click="tabControlClick(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  name:'tabControl',
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
      list:{
          type:Array,
          default(){
            return []
          }
      },
  },
  methods:{
      tabControlClick(index){
        this.currentIndex=index
        this.$emit('tabControlClick',index)
      }
  },
  created(){
  }
}
</script>

<style scoped>
  .tabControl{
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: whitesmoke;
    padding-top: 5px;
    margin-bottom: 2px;
  }
  .item{
      display: inline-block;
  }
  .active{
      
      border-bottom: 5px solid pink;
  }
</style>
  