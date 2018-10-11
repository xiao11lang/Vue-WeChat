<template>
    <div class="chatWindow">
        <header>
            <div class="headerLeft">
                <span class="iconfont icon-fanhui" @click="goBack"></span>
                <span>{{currentFriend.userName}}</span>
            </div>
            
            <span class="iconfont icon-ttpodicon more" @click="goChatSetting"></span>
        </header>
        <div class="main"></div>
        <footer>
            <span class="iconfont icon-yuyin" @click="switchShow"></span>
            <span v-if="!showInput" class="input"><input type="text" v-model="title"></span>
            <span v-if="showInput" class="voice">按住说话</span>
            <span class="iconfont icon-biaoqing1"></span>
            <span class="iconfont icon-icon02"></span>
        </footer>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"ChatWindow",
    props:["title"],
    data:function(){
        return {
            showInput:false
        }
    },
    computed:{
        ...mapState(['currentFriend'])
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        switchShow(){
            this.showInput=!this.showInput
        },
        goChatSetting(){
            this.$router.push("/chatSetting")
        }
    },
    created(){
    }

}
</script>
<style lang="scss">
    .chatWindow{
        header{
            position: fixed;
            display: flex;
            justify-content: space-between;
            height: 1.375rem;
            width: 100%;
            align-items: center;
            font-size: 0.5rem;
            color: white;
            background: rgb(48, 48, 48);
            .headerLeft{
                flex-grow: 1;
                padding: 0;
                span{
                &:nth-child(1){
                    margin: 0 0.375rem;
                    &::before{
                        font-size: 0.625rem
                    }
                }
            }
            }
            .more{
                margin-right: 0.5rem;
                &::before{
                    font-size: 0.625rem
                }
            }
            
        }
        footer{
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-between;
            bottom: 0;
            width: 100%;
            height: 1.375rem;
            color: rgb(111, 115, 120);
            span{
                margin: 0 0.375rem;
                &::before{
                    font-size: 0.9rem
                }
            }
            .input{
                flex-grow: 1;
                border: 1px solid transparent;
                height: 1rem;
                margin: 0;
                border-bottom: 1px solid  #46c01b;
                input{
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    outline: none;
                    border: none;
                }
            }
            
            .voice{
                flex-grow: 1;
                border: 1px solid rgb(111, 115, 120);
                height: 1rem;
                text-align: center;
                font-size: 0.5rem;
                line-height: 1rem;
                margin: 0
            }
            
        }
    }
</style>
