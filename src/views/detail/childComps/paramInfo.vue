<template>
  <div class="param">
    <table class="size">
      <tr  v-for="(item,index) in paramData.sizes" :key='item'>
        <td v-for="(item2) in paramData.sizes[index]" :key="item2">{{item2}}</td>
      </tr>
    </table>

    <table class="info">
      <tr v-for="item in paramData.infos" :key='item'>
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>

    <div class="img" v-if="paramData.img">
      <img :src="paramData.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'paramInfo',
  props:{
    paramData:{
      type:Object,
      default(){ return {} }
    }
  }
}
</script>

<style scoped>
.size{
  width: 100%;
  margin-bottom: 5px;
}

table{
  border-collapse:collapse
}
td{
  font-size: 13px;
  border-bottom: 1px solid rgb(58, 58, 58);
  border-top: 1px solid rgb(58, 58, 58);
  margin: 0;
  padding: 10px 0 10px 10px;
}
.key{
  width: 20%;
}
.value{
  color: palevioletred;
  padding-left: 30px;
}
.info{
  color: gray;
  width: 100%;
}
.param{
  margin: 5px;
}
.img>img{
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
}
.img{
 width: 100%;
}
</style>