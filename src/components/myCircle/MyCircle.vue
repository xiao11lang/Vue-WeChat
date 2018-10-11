<template>
    <div class="myCircle">
        <MailHeader>
            <span class="iconfont icon-xiangji"></span>
        </MailHeader>
        <div class="bg">
            <div>
                <span>圣枪游侠</span>
                <img src="../../assets/1.jpeg" alt="">
            </div>
        </div>
        <div class="myCircleCon">
            <div class="myCircleItem" v-for="circle in myCircles" :key="circle.content">
                <img src="../../assets/1.jpeg">
                <div>
                    <p>{{circle.name}}</p>
                    <p>
                        {{circle.content}}
                    </p>
                    <p>
                        <span>{{circle.time}}小时前</span><span class="iconfont icon-pinglun"></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
import MailHeader from "../mail/MailHeader"
export default {
    name:"MyCircle",
    components:{
        MailHeader
    },
    computed:{
        ...mapGetters(['myCircles'])
    }
}
</script>
<style lang="scss">
    .myCircle{
        header{
            background: rgba(22, 29, 50,.2)
        }
        .bg{
            background-image: url("../../assets/1.jpeg");
            background-size: cover;
            height: 7.6rem;
            padding-top: 6.43rem;
            box-sizing: border-box;
            margin-bottom: 1.875rem;
            div{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-right: 0.5rem;
                img{
                    width: 2.34rem;
                    height: 2.34rem;
                    margin-left: 0.5rem;
                }
                span{
                    align-self: flex-start;
                    font-size: 0.5rem;
                    color: white;
                    margin-top: 0.375rem
                }
            }
        }
        .myCircleCon{
            .myCircleItem{
                display: flex;
                border-bottom: 1px solid #ccc;
                padding-top: 0.25rem;
                img{
                    width: 1.25rem;
                    height: 1.25rem;
                    margin: 0 0.5rem;
                }
                div{
                    flex-grow: 1;
                    max-width: calc(100% - 2.25rem);
                    p:nth-child(1){
                        color: rgb(106, 124, 161);
                        font-size: 0.5rem;
                        margin-bottom: 0.2rem
                    }
                    p:nth-child(2){
                        max-width: 100%;
                        word-break: break-all;
                        margin-right: 0.5rem;
                        margin-bottom: 0.4rem;
                    }
                    p:nth-child(3){
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        margin-bottom: 0.25rem;
                        span:nth-child(1){
                            color: rgb(133, 133, 133)
                        }
                        span:nth-child(2){
                            color: rgb(133, 147, 176);
                            margin-right: 0.5rem
                        }
                    }
                }
            }
        }
    }
</style>

