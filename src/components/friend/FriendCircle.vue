<template>
    <div class="friendCircle">
        <header>
            <span class="iconfont icon-fanhui" @click="goBack"></span>
            <span>{{isMe?userInfo.userName:currentFriend.userName}}</span>
        </header>
        <div class="bg">
            <div>
                <span>{{isMe?userInfo.userName:currentFriend.userName}}</span>
                <img src="../../assets/1.jpeg" alt="">
            </div>
        </div>
        <div class="circleCon" v-for="i in 4" :key="i" v-if="!isMe">
            <div class="publishTime">
                <span>27</span>
                <span>7月</span>
            </div>
            <img src="../../assets/1.jpeg" alt="">
            <p>122222222222222222</p>
        </div>
        <div class="circleCon" v-for="(circle,index) in userInfo.circles" :key="circle.month+index" v-if="isMe">
            <div class="publishTime">
                <span>{{circle.day}}</span>
                <span>{{circle.month}}月</span>
            </div>
            <img src="../../assets/1.jpeg" alt="">
            <p>{{circle.content}}</p>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default {
    name:"FriendCircle",
    computed:{
        ...mapState(["currentFriend","isMe","userInfo"])
    },
    methods:{
        goBack(){
            this.setMe(false)
            this.$router.go(-1)
        },
        ...mapMutations(["setMe"])
    }
}
</script>
<style lang="scss">
    .friendCircle{
        header{
            position: fixed;
            height: 1.375rem;
            background: rgba(0,0,0,.1);
            & :first-child{
                margin-left: 0.5rem
            }
        }
        .bg{
            background-image: url("../../assets/1.jpeg");
            background-size: cover;
            height: 7.6rem;
            padding-top: 6.43rem;
            box-sizing: border-box;
            margin-bottom: 2.5rem;
            div{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-right: 0.5rem;
                img{
                    width: 2.34rem;
                    height: 2.34rem;
                    margin-left: 0.5rem;
                }
                span{
                    align-self: flex-start;
                    font-size: 0.5rem;
                    color: white;
                    margin-top: 0.375rem
                }
            }
        }
        .circleCon{
            display: flex;
            border-bottom: 1px solid #ccc;
            padding: 0.5rem 0.5rem 0.5rem 0;
            .publishTime{
                span:nth-child(1){
                    font-size: 0.75rem;
                    font-weight: bold;
                    margin-left: 0.5rem;
                }
            }
            img{
                width: 2.3rem;
                height: 2.34rem;
                margin: 0 0.25rem 0 0.5rem;
            }
            p{
                flex-grow: 1
            }
        }
    }
</style>
