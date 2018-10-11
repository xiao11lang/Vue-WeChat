<template>
    <div class="home">
        <Header @switchPop="switchPop"/>
        <WeChat v-if="currentIndex===0"></WeChat>
        <MailList v-if="currentIndex===1"></MailList>
        <Discover v-if="currentIndex===2"></Discover>
        <Me v-if="currentIndex===3"></Me>
        <Footer @switch="switchIndex($event)" :activeIndex="currentIndex"/>
        <div class="popContainer" v-if="showPop" @click="closePop">
            <div class="popover" >
                <div @click.stop="go('/groupChat')"><span class="iconfont icon-weixintubiao-5" ></span><span>发起群聊</span></div>
                <div @click.stop="go('/addIndex')"><span class="iconfont icon-tianjiapengyou"></span><span>添加朋友</span></div>
                <div @click.stop="go('/scan')"><span class="iconfont icon-saoyisao"></span><span>扫一扫</span></div>
                <div @click.stop="go('/receive')"><span class="iconfont icon-shoufukuan"></span><span>收付款</span></div>
                <div @click.stop="go('/help')"><span class="iconfont icon-xin"></span><span>帮助与反馈</span></div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
import Me from "./main/Me.vue"
import Discover from "./main/Discover.vue"
import WeChat from "./main/WeChat.vue"
import MailList from "./main/MailList.vue"
export default {
    name:"Home",
    data:function(){
        return {
            currentIndex:0,
            showPop:false
        }
    },
    methods:{
        switchIndex(index){
            this.currentIndex=index
        },
        switchPop(){
            this.showPop=!this.showPop
        },
        closePop(){
            this.showPop=false
        },
        go(path){
            this.closePop()
            this.$router.push(path);
        }
    },
    beforeMount(){
        if(this.$router.currentIndex){
            this.currentIndex=this.$router.currentIndex
        }
    },
    components:{
        Header,Footer,WeChat,Discover,MailList,Me
    }
}
</script>
<style lang="scss">
    .home{
        padding: 1.38rem 0;
        .popContainer{
            position: fixed;
            top: 1.38rem;
            left: 0;
            width: 100%;
            background: transparent;
            height: calc(100% - 1.38rem)
        }
        .popover{
            position: absolute;
            width: 5.75rem;
            background: rgb(57, 58, 63);
            top: 0;
            right: 0.5rem;
            div{
                display: flex;
                width: 100%;
                height: 1.375rem;
                color: white;
                border-bottom: 1px solid rgb(31, 32, 34);
                font-size: 0.5rem;
                align-items: center;
                span{
                    &:nth-child(1){
                        margin: 0 0.5rem;
                        &::before{
                            font-size: 0.625rem
                        }
                    }
                }
            }
        }
    }
</style>
