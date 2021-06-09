<template>
    <div class="nav">
        <slot></slot>
    </div>
</template>
<script>
  export default {
      name:'tabbar',
  }
</script>
<style>
  
  .nav{
    display:flex;
    background-color:white;
    bottom:0;
    left:0;
    right:0;
    position:absolute;
    box-shadow:0 -3px 2px white;
  }
</style>