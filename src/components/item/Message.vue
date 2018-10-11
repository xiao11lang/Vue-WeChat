<template>
    <div class="message" @click="goChatWin(info.userName)">
        <img :src="src" alt="">
        <div class="messageRight">
            <div>
                <span class="title">{{info.userName}}</span>
                <span class="time">昨天</span>
            </div>
            <span class="content">{{Math.random()}}</span>
        </div>
    </div>
</template>
<script>
import {path} from "../../photoPath.js"
import {mapMutations} from "vuex"
export default {
    name:"Message",
    props:["info"],
    data:function(){
        return {
            src:path[Math.floor(Math.random()*10)]
        }
    },
    methods:{
        goChatWin(title){
            this.$router.push("/chatWindow")
            this.setFriend(this.info)
        },
        ...mapMutations(['setFriend'])
    }
}
</script>
<style lang="scss">
    .message{
        display:flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        padding: 0.15rem 0;
        img{
            margin: 0 0.5rem;
            flex-grow: 0;
            width:1rem;
            height:1rem
        }
        .messageRight{
            flex-grow: 1;
            div{
                display: flex;
                justify-content: space-between;
                span{
                    &:nth-child(1){
                        font-size: 0.5rem;
                    }
                    &:nth-child(2){
                        font-size: 0.375rem;
                        color: #ccc;
                        margin-right: 0.5rem
                    }
                }
            }
            .content{
                color: #ccc;
                font-size: 0.375rem;
            }
        }
    }
</style>
