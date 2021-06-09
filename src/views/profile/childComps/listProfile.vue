<template>
  <div class="listProfile">
    <table>
      <tr>
      <img src="@/assets/img/profile/cart.svg" alt="">
      我的订单</tr>
      <tr>
      <img src="@/assets/img/profile/message.svg" alt="">
      我的消息</tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'listProfile',
}
</script>

<style scoped>
img{
  vertical-align: middle;
  width: auto;
  height: 40px;
}
tr{
    display: block;
    background-color: white;
    border-bottom: 2px whitesmoke solid;
    padding: 10px;
}
table{
    border-collapse: collapse;
    width: 100vw;
}
</style>