<template>
  <div class="head">
    <div class="up">
      <div class="left">
        <img class='headImg' src="@/assets/img/profile/avatar.svg" alt="">
        <p class="name">
          <span class="login">登录/注册</span><br>
          <img class='phoneImg' src="@/assets/img/profile/phone.svg" alt="">
          <span class="phone">手机号码登录</span>
        </p>
      </div>
      <p class="rightIcon">></p>
    </div>
    <div class="down">
      <tr>
        <td>
          <p>0.00</p>
          <p>我的余额</p>
        </td>
        <td>
          <p>0</p>
          <p>我的收藏</p>
        </td>
        <td>
          <p>0.00</p>
          <p>我的积分</p>
        </td>
      </tr>
    </div>
  </div>
</template>

<script>
export default {
  name:'headProfile',
}
</script>

<style scoped>
.down td>p:last-of-type{
    font-size: 15px
}
.down td>p:first-of-type{
    margin-bottom: 3px;
    font-size: 30px;
    color: orange;
}
.down td:first-of-type{
    border-right: 1px gray solid;
}
.down td:last-of-type{
    border-left: 1px gray solid;
}
.down td{
    padding: 5px;
    text-align: center;
    width:200px;
}
.down tr{
    width: 100%;
    border-collapse: collapse;
    display: block;
}
.down{
    left: 0;
    right: 0;
    width: 100vw;
    background-color: white;
}
.phoneImg{
    height: 18px;
    vertical-align: middle;
    width: auto;
}
.phone{
    color: white;
    vertical-align: middle;
    font-size: 15px;
}
.login{
    color: white;
    font-size: 30px;
    font-weight: bolder;
}
.left{
    display: flex;
    align-items: center;
}
.name{
    display: inline-block;
}
.headImg{
    height: 100px;
    width: 100px;
    display: inline-block;
}
.up{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.head{
  background-color: pink;
  left: 0;
  right: 0;
}
</style>