<template>
  <div class="backTop">
    <img src="@/assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name:'backTop'
}
</script>

<style scoped>
  img{
    width: 40px;
  }
  
  .backTop{
    position: fixed;
    right: 0;
    bottom: 55px;
    z-index: 10;
  }
</style>