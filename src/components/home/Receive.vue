<template>
    <div class="receive">
        <MailHeader headerTitle="收付款"></MailHeader>
        <div class="qrCode">
            <div class="qrTop">
                <span class="iconfont icon-shoufukuan"></span>
                <span>向商家付款</span>
            </div>
            <div class="qrMain">
                <p>点击可查看付款码数字</p>
                <p>
                    <span class="iconfont icon-tiaoxingma1"></span>
                    <span class="iconfont icon-tiaoxingma1"></span>
                    <span class="iconfont icon-tiaoxingma1"></span>
                </p>
                <p class="iconfont icon-erweima1"></p>
            </div>
            <div class="qrBottom">
                <span class="iconfont icon-lingqian"></span>
                <span>零钱</span>
                <p>优先使用此支付方式付款</p>
            </div>
        </div>
        <div class="receiveBottom">
            <p><span class="iconfont icon-shoukuan"></span><span>二维码收款</span></p>
            <p><span class="iconfont icon-zanshangguanli"></span><span>赞赏码</span></p>
            <p><span class="iconfont icon-haibao"></span><span>群收款</span></p>
            <p><span class="iconfont icon-hongbao"></span><span>面对面红包</span></p>
            <p><span class="iconfont icon-zhuanzhang"></span><span>转账到银行卡</span></p>
        </div>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue"
export default {
    name:"Receive",
    components:{
        MailHeader
    }
}
</script>
<style lang="scss">
    .receive{
        padding-top: 1.4rem;
        background: rgb(67, 144, 87);
        header{
            background: transparent;
            color: white;
        }
        .qrCode{
            margin: 0 0.5rem;
            height: 11.5rem;
            background: white;
            border-radius: 4px;
            .qrTop{
                color: rgb(67, 144, 87);
                height: 1rem;
                display: flex;
                align-items: center;
                span:nth-child(1){
                    margin-left: 0.5rem;
                    &::before{
                        font-size: 0.625rem
                    }
                }
                span:nth-child(2){
                    font-size: 0.4rem;
                    margin-left: 0.375rem
                }
            }
            .qrMain{
                margin-top: 0.875rem;
                p{
                    text-align: center;
                    &:nth-child(1){
                        color: rgb(153, 153, 153)
                    }
                    &:nth-child(2){
                        margin: 0 0.625rem;
                        & span::before{
                            font-size: 2.2rem
                        }
                    }
                    &:nth-child(3)::before{
                            font-size: 3.4rem
                    }
                }
            }
            .qrBottom{
                margin-top: 1.5rem;
                .iconfont{
                    color: rgb(251, 223, 102);
                    margin: 0 0.375rem 0 0.5rem
                }
                p{
                    margin-left: 1.375rem;
                    font-size: 0.375rem;
                    color: rgb(163, 163, 163)
                }
            }
        }
        .receiveBottom{
            margin: 0.5rem;
            margin-bottom: 0;
            border-radius: 4px;
            background: rgb(91, 154, 106);
            p{
                height: 1.56rem;
                display: flex;
                align-items: center;
                font-size: 0.5rem;
                color: white;
                border-bottom: 1px solid rgb(106, 163, 119);
                span:nth-child(1){
                    margin: 0 0.375rem 0 0.625rem;
                    &::before{
                        font-size: 0.625rem
                    }
                    
                }
            }
        }
    }
</style>
