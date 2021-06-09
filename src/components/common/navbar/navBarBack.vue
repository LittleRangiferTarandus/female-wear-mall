<template>
  <div class="navBarBack" @click="leftClick">
    <span>&lt;</span>
  </div>
</template>

<script>
export default {
  name:'navBarBack',
  methods:{
    leftClick(){
      this.$router.back()
    },
  }
}
</script>

<style scoped>
  .navBarBack{
    font-size: 20px;
    color: gray;
  }
</style>