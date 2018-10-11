<template>
    <header>
        <div>微信</div>
        <div>
            <span :class="['iconfont','icon-sousuo-copy']" @click="goSearch"></span>
            <span :class="['iconfont','icon-jia1']" @click="switchPop"></span>
        </div>
    </header>
</template>
<script>
export default {
    name:"Header",
    methods:{
        goSearch(){
            this.$router.push("/search")
        },
        switchPop(){
            this.$emit("switchPop")
        }
    }
}
</script>
<style lang="scss">
    header{
        position: fixed;
        display: flex;
        align-items: center;
        background-color: #303030;
        left: 0;
        top: 0;
        color: white;
        font-size: 0.5rem;
        width: 100%;
        height: 1.375rem;
        div{
            width:50%;
            &:nth-child(1){
                padding-left: 0.5rem
            }
            &:nth-child(2){
                display: flex;
                justify-content: flex-end;
                span{
                    margin: 0 0.625rem;
                    &::before{
                        font-size: 0.625rem
                    }
                }
            }
        }
    }
</style>
