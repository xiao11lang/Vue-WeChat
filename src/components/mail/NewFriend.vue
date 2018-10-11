<template>
 <div class="newFriend">
     <MailHeader headerTitle="新的朋友">
        <span class="add" @click="goAdd">添加朋友</span>
    </MailHeader>
    <p class="topDivider"></p>
    <div class="search" @click="goSearchItem">
        <span class="iconfont icon-sousuo-copy"></span>
        <input type="text" placeholder="微信号/QQ号/手机号">
    </div>
    <p class="bottomDivider">新的朋友</p>
    <div class="friendItem" v-for="friend in userInfo.friends" :key="friend.number">
        <img src="../../assets/1.jpeg" alt="">
        <div><p>{{friend.number}}</p><span>你好我是{{friend.userName}}</span></div>
        <span>已添加</span>
    </div>
 </div>
    
</template>
<script>
import MailHeader from "./MailHeader"
import {mapState} from "vuex"
export default {
    name:"NewFriend",
    components:{
        MailHeader
    },
    computed:{
        ...mapState(['userInfo'])
    },
    methods:{
        goSearchItem(){
            this.$router.push("/searchItem")
            this.$router.searchChoice=1
        },
        goAdd(){
            this.$router.push("/addIndex")
        }
    }
}
</script>
<style lang="scss">
    .newFriend{
        padding-top: 1.38rem;
        .add{
            font-size: 0.375rem
        }
        .topDivider{
            height: 0.5rem;
            background-color: rgb(235,235,235)
        }
        .search{
            height: 1.375rem;
            display: flex;
            align-items: center;
            span{
                margin: 0 0.5rem;

            }
            input{
                border: none;
                outline: none;
                flex-grow: 1
            }
        }
        .bottomDivider{
            
            background-color: rgb(235,235,235);
            font-size: 0.375rem;
            padding-left: 0.5rem;
            padding-top: 0.6rem;
            color: rgb(154, 154, 154);
        }
        .friendItem{
            display: flex;
            align-items: center;
            height: 1.875rem;
            border-bottom: 1px solid rgb(235,235,235);
            img{
                width: 1.5rem;
                height: 1.5rem;
                margin: 0 0.5rem

            }
            div{
                flex-grow: 1;
                p{
                    font-size: 0.5rem;
                    color: black
                }
                span{
                    color: rgb(154, 154, 154);
                    font-size: 0.375rem
                }
            }
            & :last-child{
                font-size: 0.375rem;
                margin-right: 0.5rem;
                color: rgb(154, 154, 154)
            }
        }
    }
</style>
