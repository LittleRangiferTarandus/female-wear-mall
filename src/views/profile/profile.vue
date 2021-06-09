<template>
  <navbar class="profileNav">
    <template v-slot:center>
      我的账号
    </template>
  </navbar>
  <my-scroll class="content" ref="MyScroll" @myScrollScroll='myScrollScrollAnserse'>
    <head-profile class="head"></head-profile>
    <list-profile></list-profile>
  </my-scroll>
</template>

<script>
import MyScroll from '../../components/common/myScroll/myScroll.vue'
import navbar from '../../components/common/navbar/navbar.vue'
import {backTopMixin} from '@/common/mixin.js'
import HeadProfile from './childComps/head.vue'
import ListProfile from './childComps/listProfile.vue'
export default {
  mixins:[backTopMixin],
  components: { navbar, MyScroll, HeadProfile, ListProfile },
  name:'profile',
  methods:{
    myScrollScrollAnserse(position){
      this.backTopIfShow(position)
    }
  }
}
</script>

<style scoped>
.head{
  margin-bottom: 50px;
}
.content{
  background-color: whitesmoke;
  height: 100%;
}
.profileNav{
  color: white;
  background-color: pink;
}
.profile{
  background-color: whitesmoke;
  padding-top: 46px;
  height: 100vh;
  padding-bottom: 52px;
}
</style>
