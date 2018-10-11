<template>
    <div class="bottleContent">
        <MailHeader :headerTitle="'来自'+myBottle.current.location">
            <span class="iconfont icon-ttpodicon"></span>
        </MailHeader>
        <div class="content">
            <span class="iconfont icon-wo"></span>
            <span class="">{{myBottle.current.content}}</span>
        </div>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue"
import {mapState} from "vuex"
export default {
    name:"BottleContent",
    components:{
        MailHeader
    },
    computed:{
        ...mapState(['myBottle'])
    }
}
</script>
<style lang="scss">
    .bottleContent{
        padding-top: 1.38rem;
        height: 100%;
        box-sizing: border-box;
        background: #EBEBEB;
        .content{
            margin-top: 1.375rem;
            display: flex;
            .iconfont{
                color: rgb(201, 201, 201);
                margin: 0 0.5rem;
                &::before{
                    font-size: 1rem
                }
            }
            span:last-child{
                height: 1.125rem;
                background: white;
                padding: 0.375rem;
                box-sizing: border-box;
                border-radius: 0.15rem
            }
        }
    }
</style>

