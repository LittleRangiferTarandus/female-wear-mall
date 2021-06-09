<template>
  <div class="toast" :style="{opacity:isDisplay}">
    加入购物车 成功
  </div>
</template>

<script>
export default {
    data(){
        return{
            isDisplay:0,
        }
    },
    name:'Toast',
    methods:{
        animation(duration = 6000){
            this.isDisplay = .8
            let self = this
            setTimeout(function(){
                self.isDisplay=0
            },duration)
        }
    }
}
</script>

<style scoped>
.toast{
    background-color: rgba(128, 128, 128);
    color: whitesmoke;
    transition: 1s;
    padding: 5px;
    border-radius: 5px;
}
</style>