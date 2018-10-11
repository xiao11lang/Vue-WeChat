<template>
    <div class="groupChat">
        <MailHeader headerTitle="发起群聊">
            <span class="check" :class="{active:friendsCheck.length!==0}">确定{{friendsCheck.length===0?'':`(${friendsCheck.length})`}}</span>
        </MailHeader>
        <div class="search">
            <span class="iconfont icon-sousuo-copy"></span>
            <input type="text" placeholder="搜索">
        </div>
        <div class="link" @click="go('/group')">选择一个群</div>
        <div class="link" @click="go('/faceToFace')">面对面建群</div>
        <Friend v-for="friend in friends" :key="friend[0]" :belong="friend[0]" :lists="friend[1]" :showCheck="true"></Friend>
        <NavTool></NavTool>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue"
import NavTool from "../item/NavTool.vue"
import Friend from "../item/Friend.vue"
import {mapGetters,mapState} from "vuex"
export default {
    name:"GroupChat",
    components:{
        MailHeader,NavTool,Friend
    },
    methods:{
        go(path){
            this.$router.push(path)
        }
    },
    computed:{
        ...mapGetters(['friends']),
        ...mapState(["friendsCheck"])
    }
}
</script>
<style lang="scss">
    .groupChat{
        padding-top: 2.85rem;
        background: rgb(235, 235, 235);
        .search{
            position: fixed;
            width: 100%;
            top: 1.6rem;
            height: 1.25rem;
            display: flex;
            align-items: center;
            background: white;
            color: #ccc;
            .iconfont{
                margin: 0 0.25rem 0 0.5rem;
                &::before{
                    font-size: 0.875rem
                }
            }
            input{
                border: none;
                outline: none;
                flex-grow: 1
            }
        }
        .link{
            height: 1.8rem;
            display: flex;
            align-items: center;
            font-size: 0.4rem;
            padding-left: 0.5rem;
            background: white;
            border-bottom: 1px solid rgb(235, 235, 235);
            border-top: 1px solid rgb(235, 235, 235);
        }
        .friendMain{
            background: white
        }
        .check{
            font-size: 0.375rem;
            color: rgb(40, 91, 40);
            &.active{
                color: #46c01b
            }
        }
    }
</style>
