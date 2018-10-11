<template>
    <div class="loading">
        <span class="iconfont icon-jiazai"></span>
    </div>
</template>
<script>
export default {
    name:"Loading"
}
</script>
<style lang="scss">
    @keyframes loading {
        from{
            transform: rotate(0)
        }
        to{
            transform: rotate(360deg)
        }
    }
    .loading{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 10;
        span{
            color: #ccc;
            &::before{
                font-size: 2rem;
            }
            animation-name: loading;
            animation-duration: 1s;
            animation-iteration-count: infinite
        }
    }
</style>
