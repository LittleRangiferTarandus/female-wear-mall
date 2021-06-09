<template>
    <div @click="itemClick" class="nav-item">
        <img v-if="!isActive" :src="require('@/assets/img'+linkImg)"/>
        <img v-else :src="require('@/assets/img'+linkImg2)"/>
        <p :style="{color:activeColorItem,}">{{text}}</p>
    </div>
</template>
<script>
    export default {
        name:"tabbar-item",
        methods:{
            itemClick(){
                this.$router.replace(this.path)
            }
        },
        computed:{
            isActive(){
                return !(this.$route.path.indexOf(this.path)===-1)
            },
            activeColorItem(){
                return this.isActive? this.activeColor:'black'
            },
        },
        data(){
            return {
               // isActive:false
                }
        },
        props:{
            text:{
                type:String
            },
            linkImg:{
                type:String
            },
            linkImg2:{
                type:String
            },
            path:{
                type:String
            },
            activeColor:{
                type:String,
                default:'red'
            }
        },

    }
</script>
<style>
  .nav-item>p{
    font-size:10px
  }
  .nav-item>img{
    height:30px;
    width:30px;
    display:inline-block;
  }
  .nav-item{
    flex:1;
    text-align:center;
    height:49px;
    display:inline-block;
    
  }
</style>