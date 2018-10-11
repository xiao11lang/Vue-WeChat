<template>
    <div class="group">
        <MailHeader headerTitle="群聊">
            <span class="iconfont icon-sousuo-copy"></span>
            <span class="iconfont icon-jia1"></span>
        </MailHeader>
        <p class="topDivider">群聊</p>
        <div class="groupItem" v-for="i in number" :key="i">
            <img src="../../assets/1.jpeg" alt="">
            <p>群{{i}}</p>
        </div>
        <p class="groupNumber">{{number}}个群聊</p>
    </div>
</template>
<script>
import MailHeader from "./MailHeader.vue"
export default {
    name:"Group",
    data:function(){
        return {
            number:5
        }
    },
    components:{
        MailHeader
    }
}
</script>
<style lang="scss">
    .group{
        padding-top: 1.38rem;
        .topDivider{
            height: 0.5rem;
            padding-left: 0.5rem;
            background-color: rgb(235,235,235);
            color: rgb(154,154,154)
        }
        .groupItem{
            display: flex;
            align-items: center;
            height: 1.375rem;
            border-bottom: 1px solid rgb(235,235,235);
            img{
                width: 1rem;
                height: 1rem;
                margin: 0 0.5rem
            }
            p{
                font-size: 0.5rem;
                color: black;
                flex-grow: 1
            }
        }
        .groupNumber{
            font-size: 0.5rem;
            color: rgb(154,154,154);
            padding-top: 0.625rem;
            text-align: center
        }

    }
</style>
