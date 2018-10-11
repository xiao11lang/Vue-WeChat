<template>
    <div class="scan">
        <MailHeader headerTitle="二维码/条码">
            <span class="iconfont icon-ttpodicon"></span>
        </MailHeader>
        <div class="camera">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p class="scanStrip"></p>
        </div>
        <footer>
            <div><span class="iconfont icon-saoma"></span><br><p>扫码</p></div>
            <div><span class="iconfont icon-fengmian"></span><p>封面</p></div>
            <div><span class="iconfont icon-loupan"></span><p>街景</p></div>
            <div><span class="iconfont icon-fanyi-full"></span><p>翻译</p></div>
        </footer>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader"
export default {
    name:"Scan",
    components:{
        MailHeader
    }
}
</script>
<style lang="scss">
    @keyframes scan {
        from{
            transform: translateY(0rem)
        }
        to{
            transform: translateY(6.8rem)
        }
    }
    .scan{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 4.8rem;
        background: rgb(75, 77, 74);
        header{
            background: transparent
        }
        .camera{
            position: relative;
            height: 7rem;
            width: 7rem;
            margin: 0 auto;
            background: #8C9189;
            span{
                position: absolute;
                width: 0.375rem;
                height: 0.37rem;
                &:nth-child(1){
                    border-top: 2px solid rgb(101, 225, 2);
                    border-left: 2px solid rgb(101, 225, 2)
                }
                &:nth-child(2){
                    top: 0;
                    right: 0;
                    border-top: 2px solid rgb(101, 225, 2);
                    border-right: 2px solid rgb(101, 225, 2)
                }
                &:nth-child(3){
                    left: 0;
                    bottom: 0;
                    border-bottom: 2px solid rgb(101, 225, 2);
                    border-left: 2px solid rgb(101, 225, 2)
                }
                &:nth-child(4){
                    right: 0;
                    bottom: 0;
                    border-right: 2px solid rgb(101, 225, 2);
                    border-bottom: 2px solid rgb(101, 225, 2)
                }
            }
            .scanStrip{
                //position: absolute;
                width: 90%;
                height: 0;
                margin: 0 auto;
                box-shadow: 0 2px 2px 2px rgb(101, 225, 2);
                animation-name: scan;
                animation-duration: 3s;
                animation-iteration-count: infinite
            }
        }
        footer{
            background: rgb(36, 37, 35);
            position: fixed;
            bottom: 0;
            height: 2.5rem;
            display: flex;
            align-items: center;
            div{
                width: 25%;
                text-align: center;
                color: white;
                &:nth-child(1){
                    span{
                        color: rgb(101, 225, 2)
                    }
                }
                span.iconfont{
                    &::before{
                        font-size: 0.875rem
                    }
                }
                p{
                    margin-top: 0.25rem
                }
            }
        }
    }
</style>
