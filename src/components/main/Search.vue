<template>
<div class="searchContainer">
    <div class="search">
        <span class="iconfont icon-fanhui" @click="goBack"></span>
        <div>
            <input type="text" placeholder="搜索">
            <span class="iconfont icon-huatong"></span>
        </div>
    </div>
    <p>搜索指定内容</p>
    <p>
        <span>朋友圈</span>
        <span>文章</span>
        <span>公众号</span>
    </p>
    <p>
        <span>小说</span>
        <span>音乐</span>
        <span>表情</span>
    </p>
</div>
    
</template>
<script>
export default {
    name:"Search",
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss">
    .searchContainer{
        .search{
        display: flex;
        margin: 0.375rem 0;
        .icon-fanhui{
            margin: 0 0.375rem;
            color: rgb(133, 133, 133);
            font-weight: bold
        }
        div{
            flex-grow: 1;
            display: flex;
            margin-right: 0.5rem;
            border-bottom: 1px solid rgb(51, 181, 50);
            input{
                flex-grow: 1;
                border: none;
                outline: aqua;
            }
            span{
                color: #AAA
            }
        }
    } 
    p{
        text-align: center;
        &:nth-of-type(1){
            margin: 1.875rem 0 1rem 0;
            color: #AAA
        }
        &:nth-of-type(2){
            display: flex;
            justify-content: space-around;
            margin-bottom: 1rem;
            span{
                color: rgb(51, 181, 50)
            }
        }
        &:nth-of-type(3){
            display: flex;
            justify-content: space-around;
            span{
                color: rgb(51, 181, 50)
            }
        }
    }
    }
   
</style>
