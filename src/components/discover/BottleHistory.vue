<template>
    <div class="bottleHistory">
        <MailHeader headerTitle="我的瓶子"></MailHeader>
        <div class="item" v-for="bottle in myBottle.history" :key="bottle.number" @click="goContent(bottle)">
            <span class="iconfont icon-wo"></span>
            <div>
                <p>{{bottle.location}}</p>
                <p>{{bottle.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue" 
import {mapState,mapMutations} from "vuex"
export default {
    name:"BottleHistory",
    components:{
        MailHeader
    },
    computed:{
        ...mapState(["myBottle"])
    },
    methods:{
        ...mapMutations(['setMyBottle']),
        goContent(current){
            this.setMyBottle({
                current:current,
                push:false
            })
            this.$router.push("/bottleContent")
        }
    }
}
</script>
<style lang="scss">
    .bottleHistory{
        padding-top: 1.38rem;
        .item{
            height: 1.375rem;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
            .iconfont{
                color: rgb(201, 201, 201);
                margin: 0 0.5rem;
                &::before{
                    font-size: 0.875rem;
                }
            }
            div{
                p:nth-child(1){
                    font-size: 0.5rem;
                }
                p:nth-child(2){
                    font-size: 0.375rem;
                    color: #ccc
                }
            }
        }
    }
</style>
