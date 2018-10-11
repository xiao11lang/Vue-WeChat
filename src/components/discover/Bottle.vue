<template>
    <div class="bottle">
        <MailHeader headerTitle="漂流瓶" v-if="!showDetail">
            <span class="iconfont icon-33"></span>
        </MailHeader>
        <footer v-if="!showDetail">
            <div class="container">
                <div class="item">
                    <span class="iconfont icon-pingzi"></span>
                    <p>扔一个</p>
                </div>
                <div class="item" @click="pickBottle">
                    <span class="iconfont icon-yuwang"></span>
                    <p>捡一个</p>
                </div>
                <div class="item">
                    <span class="iconfont icon-shuitong"></span>
                    <p @click="$router.push('/bottleHistory')">我的瓶子</p>
                </div>
                <div class="left"></div>
                <div class="right"></div>
            </div>
        </footer>
        <Loading v-if="showLoading"></Loading>
        <BottleDetail v-if="showDetail" @back="back" :bottle="currentBottle[0]"></BottleDetail>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue"
import Loading from "../item/Loading.vue"
import BottleDetail from "./BottleDetail"
import {mapActions,mapState,mapMutations} from "vuex"
export default {
    name:"Bottle",
    components:{
        MailHeader,Loading,BottleDetail
    },
    computed:{
        ...mapState(["drifitBottles"])
    },
    data:function(){
        return {
            showLoading:false,
            showDetail:false,
            bottles:[],
            currentBottle:[]
        }
    },
    methods:{
        ...mapActions(['getBottles']),
        ...mapMutations(["setMyBottle"]),
        pickBottle(){
            let vm=this
            this.showLoading=true
            setTimeout(function(){
                vm.showLoading=false
                if(vm.bottles.length===0){
                    vm.showDetail=false
                    return 
                }else{
                    vm.showDetail=true;
                    let bottle=vm.bottles.splice(Math.floor(Math.random()*(vm.bottles.length)),1);
                    vm.currentBottle=bottle;
                    vm.setMyBottle({
                        current:bottle[0],
                        push:true
                    })
                }
            },2000)
        },
        back(){
            this.showDetail=false
        }
    },
    created(){
        this.getBottles().then((res)=>this.bottles=res);
        
    }
}
</script>
<style lang="scss">
    .bottle{
        height: 100%;
        background: linear-gradient(to bottom,rgb(47, 125, 177),rgb(162, 212, 209) 50%,rgb(236, 220, 184));
        header{
            background: transparent;
            color: white
        }
        footer{
            position: fixed;
            display: flex;
            width: 100%;
            justify-content: center;
            background: transparent;
            .container{
                width: 90%;
                position: relative;
                display: flex;
                background: rgb(157, 155, 150);
                height: 1.5rem;
                .item{
                    width: 33.3%;
                    text-align: center;
                    margin-top: -0.5rem;
                    &:nth-child(1){
                        span{
                            color: rgb(175, 199, 182)
                        }
                    }
                    &:nth-child(2){
                        span{
                            color: rgb(242, 218, 87)
                        }
                    }
                    &:nth-child(3){
                        span{
                            color: rgb(189, 190, 187)
                        }
                    }
                    span::before{
                        font-size: 1.25rem
                    }
                    p{
                        color: rgb(189, 189, 189)
                    }
                }
                .left{
                    position: absolute;
                    width: 1rem;
                    height: 1.5rem;
                    transform: skew(-30deg);
                    background: inherit;
                    left: -0.5rem;
                    top: 0
                }
                .right{
                    position: absolute;
                    width: 1rem;
                    height: 1.5rem;
                    transform: skew(30deg);
                    background: inherit;
                    right: -0.5rem;
                    top: 0
                }
            }
        }
    }
</style>
