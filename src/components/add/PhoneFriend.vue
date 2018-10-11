<template>
    <div class="phoneFriend">
        <MailHeader headerTitle="绑定手机号" a='1'></MailHeader>
        <div class="mbPhone">
            <span class="iconfont icon-duihao"></span>
            <span class="iconfont icon-shouji"></span>
        </div>
        <p>绑定的手机号：15156473200</p>
        <p>已启用手机通讯录匹配。如果你的通讯录中有朋友注册了微信，系统会通知你</p>
        <div class="upload">上传通讯录</div>
        <div class="change">更换手机号</div>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader"
export default {
    name:"PhoneFriend",
    components:{
        MailHeader
    }
}
</script>
<style lang="scss">
    .phoneFriend{
        padding-top: 1.38rem;
        .mbPhone{
            position: relative;
            margin-top: 1.3rem;
            text-align: center;
            span:last-child{
                color: rgb(100, 100, 100);
                &::before{
                    font-size: 3.75rem
                }
            }
            span:first-child{
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 1.75rem;
                height: 1.75rem;
                z-index: 10;
                color: rgb(83, 200, 77);
                background: white;
                border-radius: 50%;
                &::before{
                    font-size: 1.75rem;
                }
            }
        }
        p{
            &:nth-of-type(1){
                margin-top: 1rem;
                font-size: 0.5rem;
                text-align: center;
            }
            &:nth-of-type(2){
                margin-top: 0.875rem;
                font-size: 0.375rem;
                padding: 0 0.5rem;
                color: rgb(154,154,154);
                text-align: center;
            }
        }
        .upload{
            margin: 1rem 0.5rem 0.5rem 0.5rem;
            height: 1.2rem;
            color: white;
            font-size: 0.5rem;
            background: rgb(26, 173, 25);
            border-radius: 0.1rem;
            display: flex;
            align-items: center;
            justify-content: center
        }
        .change{
            margin: 0rem 0.5rem 0.5rem 0.5rem;
            height: 1.2rem;
            font-size: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 0.1rem;
            display: flex;
            align-items: center;
            justify-content: center
        }
    }
</style>
