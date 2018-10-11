<template>
    <div class="public">
        <MailHeader headerTitle="公众号">
            <span class="iconfont icon-sousuo-copy"></span>
            <span class="iconfont icon-jia1"></span>
        </MailHeader>
        <Friend :belong="friendInfo.belong" :number="friendInfo.number" v-for="friendInfo of friendInfos" :key="friendInfo.belong"/>
    </div>
</template>
<script>
import MailHeader from "./MailHeader.vue"
import {mapState} from "vuex"
import Friend from "../item/Friend"
export default {
    name:"Public",
    components:{
        MailHeader,Friend
    },
    data:function(){
        return {
            
        }
    },
    computed:{
        ...mapState({
            friendInfos:"mailInfo"
        })
    }
}
</script>
<style lang="scss">
    .public{
        padding-top: 1.38rem
    }
</style>
