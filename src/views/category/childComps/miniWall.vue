<template>
  <div class="miniWall">
    <div v-for="(item) in miniWallData" :key='item' class="miniWallItem">
        <a :href="item.link">
            <img :src="item.img" alt="">
        </a>
        <p>
            <span>{{'收藏：⭐'+item.cfav}}</span>
            <span>{{'价格：￥'+item.price}}</span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
    name:'miniWall',
    props:{
        miniWallData:{
            type:Array,
            default(){return[]}
        }
    }
}
</script>

<style scoped>
.miniWallItem span{
    display: block;
}
.miniWallItem a {
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: antiquewhite;
    position: relative;
}
.miniWallItem img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: auto;
    height: 100px;
}
.miniWallItem{
    display: flex;
    width: 40%;
    flex-wrap: wrap;
    justify-content: center;
}
.miniWall{
    width: 75vw;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 16px;
}
</style>