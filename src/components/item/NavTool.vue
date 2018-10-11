<template>
    <div class="navTool">
        <span v-for="belong of belongs" :key="belong">{{belong}}</span>
    </div>
</template>
<script>
export default {
    name:"NavTool",
    data:function(){
        return {
            belongs:["A","B","C","D","E","F",
            "G","H","I","J","K","L","M","N",
            "O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        }
    }
}
</script>
<style lang="scss">
    .navTool{
        position: fixed;
        display: flex;
        flex-wrap: wrap;
        width: 0.5rem;
        height: calc(100% - 2.76rem);
        align-items: center;
        top: 0;
        right: 0;
        padding: 1.38rem 0;
        span{
            width: 100%;
            font-size: 0.375rem;
            text-align: center;
        }
        z-index: 10;
    }
</style>
