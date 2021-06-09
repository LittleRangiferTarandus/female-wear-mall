<template>
    <div class='recommend'>
        <div class="item" v-for='item in recommend.list' :key="item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name:"recommendView",
        props:{
            recommend:{
                type:Array
            }
        }
    }
</script>
<style scoped>
    .recommend{
        display:flex;
        flex-direction: row;
        width:100%;
        margin-top:15px;
        justify-content:space-around;
        border-bottom:10px wheat solid;
    }
    .recommend img{
        width:65px;
        height:65px;
        margin-bottom:10px;
        
    }
    .recommend a{
        color: black;
        text-decoration:none
    }
</style>