<template>
    <ul class="left">
        <li class="leftItem" v-for="(item,index) in leftData" :key='item' @click='leftItemClick(item.maitKey,item.miniWallkey,index)' :class="{active:currentIndex === index}">
            {{item.title}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'left',
    data(){
        return{
            currentIndex : 0,
        }
    },
    props:{
        leftData:{
            type:Array,
            default:null
        }
    },
    methods:{
        leftItemClick(maitKey,miniWallkey,index){
            this.currentIndex = index
            this.$emit('leftItemClickEmit',maitKey,miniWallkey)
        },
    }
}
</script>

<style scoped>
.active{
  background-color: whitesmoke  !important;
}
.left{
  display: inline-block;
  width: 20vw;
  font-size: 16px;
  vertical-align:top;
}
.leftItem{
  height: 40px;
  line-height: 40px;
  background-color: rgb(231, 230, 230);
  text-align: center;
}
</style>