<template>
    <div class="mailList">
        <div class="mailTop" @click="go('/newFriend',1)"><span class="iconfont icon-xindepengyou2"></span><span>新的朋友</span></div>
        <div class="mailTop" @click="go('/group',1)"><span class="iconfont icon-qunliaotubiao"></span><span>群聊</span></div>
        <div class="mailTop" @click="go('/mark',1)"><span class="iconfont icon-weixinbiaoqian"></span><span>标签</span></div>
        <div class="mailTop" @click="go('/public',1)"><span class="iconfont icon-gongzhonghaotubiao"></span><span>公众号</span></div>
        <Friend :belong="friendInfo[0]" :lists="friendInfo[1]" v-for="friendInfo of friends" :key="friendInfo.belong"/>
        <NavTool/>
    </div>
</template>
<script>
import Friend from "../item/Friend"
import NavTool from "../item/NavTool"
import {mapState,mapGetters} from "vuex"
export default {
    name:"MailList",
    methods:{
        go(apath,index){
            this.$router.push(apath);
            this.$router.currentIndex=index
        },
        
    },
    data:function(){
        return {
            //friendInfos:mailInfo
            
        }
    },
    computed:{
        ...mapState({
                friendInfos:"mailInfo",
                userInfo:"userInfo"
            }),
        ...mapGetters(["friends"])
    },
    mounted(){
        document.body.onscroll=function(){
            sessionStorage.top=document.documentElement.scrollTop;
        }
        document.documentElement.scrollTop=sessionStorage.top
    },
    beforeDestroy(){
        document.body.onscroll=null
    },
    components:{
        Friend,NavTool
    },
   
}
</script>
<style lang="scss">
$colors: rgb(250, 157, 59) rgb(69, 192, 26) rgb(39, 130, 215) rgb(39, 130, 215);
.mailList{
    .mailTop{
        height: 1.5rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        @for $i from 1 through 4{
            &:nth-child(#{$i}){
                span{
                    color: nth($colors,$i)
                }
            }
        }
        span{
            &:nth-child(1){
                margin: 0 0.5rem;
                &::before{
                    font-size: 1rem
                }
                
            }
            &:nth-child(2){
                font-size: 0.437rem;
                color: black;

            }
        }
    }
}
</style>
