<template>
    <div class="help">
        <header>
            <p>
                <span class="iconfont icon-guanbi" @click="back"></span><span>帮助与反馈</span>
            </p>
            <p>
                <span class="iconfont icon-banshou"></span><span class="iconfont icon-ttpodicon"></span>
            </p>
        </header>
        <p class="hot">热点问题</p>
        <div class="issues">
            <p class="issue">
                <span>微信如何开启或关闭新消息提醒</span>
                <span>></span>
            </p>
            <p class="issue">
                <span>朋友圈发表异常</span>
                <span>></span>
            </p>
            <p class="issue">
                <span>微信通讯录添加朋友问题</span>
                <span>></span>
            </p>
            <p class="issue">
                <span>微信漂流瓶使用问题</span>
                <span>></span>
            </p>
            <p class="issue">
                <span>手机号/QQ号绑定与解绑微信问题</span>
                <span>></span>
            </p>
            <p class="issue">
                <span>附近的人使用问题</span>
                <span>></span>
            </p>
            <p class="issue">
                <span>微信聊天记录保存/迁移问题</span>
                <span>></span>
            </p>
        </div>
        <footer class="bottom">
            <p>
                <span class="iconfont icon-quanbu"></span>
                <span>全部问题</span>
            </p>
            <p>|</p>
            <p>
                <span class="iconfont icon-shu"></span>
                <span>快捷帮助</span>
            </p>
            <p>|</p>
            <p>
                <span class="iconfont icon-yijian"></span>
                <span>意见反馈</span>
            </p>
        </footer>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue"
export default {
    name:"Help",
    components:{
        MailHeader
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss">
    .help{
        height: 100%;
        background: rgb(240, 239, 245);
        padding-top: 1.38rem;
        header{
            background: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: black;
            p:nth-child(1){
                span.iconfont{
                    margin: 0 0.5rem
                }
            }
            p:nth-child(2){
                span{
                    margin: 0 0.5rem;
                    &::before{
                        font-size: 0.625rem
                    }
                }
            }
        }
        p.hot{
            height: 1.2rem;
            box-sizing: border-box;
            padding-top: 0.5rem
        }
        .issues{
            background: white;
            .issue{
                height: 1.4rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                span{
                    margin: 0 0.5rem;
                    font-size: 0.4rem;
                    &:nth-child(2){
                        color: #ccc;
                        font-size: 0.625rem
                    }
                }
            }
        }
        .bottom{
            position: fixed;
            display: flex;
            height: 1.375rem;
            align-items: center;
            justify-content: space-around;
            color: rgb(135, 135, 135)
        }
    }
</style>
