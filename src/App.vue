<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude='detail'>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    
    <tabbar class="tabbar" v-show="tabbarShow">
        <tabbarItem activeColor="green" path="/home" text="首页" linkImg="/tabbar/Home.png" linkImg2="/tabbar/Home2.png"/>
        <tabbarItem activeColor="blue" path="/category" text="分类" linkImg="/tabbar/Category.png" linkImg2="/tabbar/Category2.png"/>
        <tabbarItem activeColor="pink" path="/shopping" text="购物篮" linkImg="/tabbar/Folder.png" linkImg2="/tabbar/Folder2.png"/>
        <tabbarItem path="/profile" text="用户" linkImg="/tabbar/Wallet.png" linkImg2="/tabbar/Wallet2.png"/>
    </tabbar>
  </div>
</template>
<script>
  import tabbar from "./components/common/tabbar/tabbar.vue";
  import tabbarItem from "./components/content/tabbar/tabbar-item.vue";
  export default {
    name:'app',
    components:{tabbar,tabbarItem},
    data(){
      return{
        tabbarShow : false
      }
    },
    watch:{
      $route(a,b){
        this.tabbarShow = (this.$route.path.indexOf('/detail') === -1)
      }
    }
  }
</script>
<style scoped>
  @import "./assets/css/base.css";
  .tabbar{
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .app{
    overflow: hidden;
  }
</style>
