<template>
    <div class="friend" >
        <div class="strip">{{belong}}</div>
        <div v-for="list in lists" :key="list.number" class="friendMain" @click="goDetail(list)">
            <div class="left">
                <img :src="path[Math.floor(Math.random()*10)]" alt="">
                <span>{{list.userName}}</span>
            </div>
            <div class="right iconfont icon-xuanzhong" v-if="showCheck" @click.stop="addCheckedFriend(list)" :class="{checked:friendsCheck.indexOf(list)!==-1}"></div>
        </div>
    </div>
</template>
<script>
import {path} from "../../photoPath.js"
import {mapMutations,mapState} from "vuex"
export default {
    name:"Friend",
    props:["belong","lists","showCheck"],
    
    methods:{
        ...mapMutations(["setFriend","addCheckedFriend"]),
        goDetail(friend){
            this.setFriend(friend)
            this.$router.push("/friendDetail")
        }
    },
    data:function(){
        return {
            path:path
        }
    },
    computed:{
        ...mapState(["friendsCheck"])
    }

}
</script>
<style lang="scss">
    .friend{
        div.strip{
            color: #888;
            background: rgb(235, 235, 235);
            height: 0.5rem;
            padding-left: 0.5rem
        }
        
        .friendMain{
            display: flex;
            align-items: center;
            padding: 0.2rem 0;
            border-bottom: 1px solid #ccc;
            justify-content: space-between;
            .left{
                height: 100%;
                display: flex;
                align-items: center;
                img{
                width: 1rem;
                height: 1rem;
                margin: 0 0.5rem
            }
            }
            .right{
            width: 0.5rem;
            height: 0.5rem;
            margin-right: 1.1rem;
            border: 1px solid #ccc;
            border-radius: 1px;
            color: transparent;
            &.checked{
                color: white;
                background: #46c01b
            }
            &::before{
                font-size: 0.375rem
            }
            }
        }
        
    }
</style>
