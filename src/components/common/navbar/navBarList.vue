<template>
  <ul class="navBarList">
    <li v-for="(item,index) in list" :key="item"  :class="{active:index == currentIndex}" @click="navItemClick(index)">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name:'navBarList',
  data(){
    return{
      currentIndex:0,
    }
  },
  props:{
    list:{
      type:Array,
      default(){return []}
    }
  },
  methods:{
    navItemClick(index){
      this.currentIndex=index
      this.$emit('navClick',index)
    }
  }
}
</script>

<style scoped>
  .navBarList {
    font-weight:normal;
    color: pink;
    display: flex;
    justify-content: space-around;
  }
  .active{
    color: rgb(164, 194, 206) ;
  }
</style>