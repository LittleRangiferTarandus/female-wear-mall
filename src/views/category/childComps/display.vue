<template>
  <div class="display">
    <div class="displayItem" v-for="(item) in displayData" :key="item">
        <a :href="item.link"><img :src="item.image" alt=""></a>
        <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'display',
    props:{
        displayData:{
            type:Array,
            default(){return []}
        }
    }
}
</script>

<style scoped>
img{
  width: 100px;
  height: auto;
}
.displayItem{
  display: flex;
  width: 40%;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid gray;
}
.display{
  vertical-align:top;
  display: inline-flex;
  width: 75vw;
  flex-wrap:wrap;
  justify-content:space-around;
}
</style>