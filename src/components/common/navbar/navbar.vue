<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
  export default {
      name:"navBar",
  }
</script>
<style scoped>
  .navbar {
    display:flex;
    line-height:44px;
    box-shadow:0 1px 1px grey;
    text-align:center;
    font-weight: bold;
  }
  .left,.right{
    width:60px;
  }
  .center{
    flex:1;
  }
</style>