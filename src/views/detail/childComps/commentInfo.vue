<template>
  <div class="commentInfo">
    <div class="top">
      <div>用户评论</div>
      <a href="">>>更多</a>
    </div>
    <div class="shade"></div>
    <div class="user">
      <img class='icon' :src="commentData.avatar" alt="">
      <span>{{commentData.name}}</span>
    </div>
    <div class="comment">{{commentData.comment}}</div>
    <div class="extra">{{commentDate+' '+commentData.style}}</div>
  </div>
</template>

<script>
import { formatDate } from "@/common/timeToDate.js";
export default {
  name:'commentInfo',
  props:{
    commentData:{
      type: Object,
      default(){ return {} }
    }
  },
  computed:{
    commentDate(){
      const date = new Date(1000*this.commentData.date)
      return formatDate(date , 'yyyy-MM-dd hh:mm:SS')
    }
  }
}
</script>

<style scoped>
.extra{
  color: gray;
  font-size: 12px;
  margin: 5px 0 5px;
}
.comment{
  color: gray;
  font-size: 15px;
  margin: 5px 0 5px;
}
.user{
  display: flex;
  align-items: center;
  font-size: 13px;
}
.icon{
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-right: 10px;
}
.shade{
  width: 100%;
  height: 10px;
  background-image: linear-gradient(to bottom, white ,rgb(204, 204, 204) 40%, white 60%);
  margin: 5px 0 5px;
}
.top>div{
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
}
.top>a{
  color:  black;
  text-decoration: none;
  font-size: 10px;
  line-height: 20px;
}
.top{
  display: flex;
  justify-content: space-between;
}
.commentInfo{
  margin: 5px;
  border-bottom: 1px gray dotted  ;
}
</style>