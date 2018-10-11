<template>
    <div class="chatSetting">
        <header>
            <span class="iconfont icon-fanhui" @click="goBack"></span>
            <span>聊天信息</span>
            
        </header>
        <p class="divider"></p>
        <section class="avatar">
            <div><img src="../../assets/1.jpeg" alt="" @click="go('/friendDetail')"><span @click="go('/groupChat')">+</span></div>
            <span>{{currentFriend.userName}}</span>
        </section>
        <p class="divider"></p>
        <div>聊天小程序</div>
        <p class="divider"></p>
        <div>查找聊天记录</div>
        <p class="divider"></p>
        <div class="withBtn">
            <span>置顶聊天</span>
            <span class="btnCon" ref="top"><span class="btn" :class="{left:atLeftOfTop}" @click="toggleTop($refs.top)"></span></span>
        </div>
        <div class="withBtn">
            <span>消息免打扰</span>
            <span class="btnCon" ref="mes"><span class="btn" :class="{left:atLeftOfMes}" @click="toggleMes($refs.mes)"></span></span>
        </div>
        <p class="divider"></p>
        <div>设置当前聊天背景</div>
        <p class="divider"></p>
        <div>清空聊天记录</div>
        <p class="divider"></p>
        <div>投诉</div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"ChatSetting",
    data:function(){
        return {
            atLeftOfTop:false,
            atLeftOfMes:false
        }
    },
    computed:{
        ...mapState(['currentFriend'])
    },
    methods:{
        toggleMes:function(parent){
            this.atLeftOfMes=!this.atLeftOfMes;
            parent.style.backgroundColor=this.atLeftOfMes?"#46c01b":"#888"
        },
        toggleTop:function(parent){
            this.atLeftOfTop=!this.atLeftOfTop;
            parent.style.backgroundColor=this.atLeftOfTop?"#46c01b":"#888"
        },//指令处理更佳
        go(path){
            this.$router.push(path)
        },
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss">
    .chatSetting{
        padding-top: 1.38rem;
       header span:nth-child(1){
           margin: 0 0.5rem;
       }
       p.divider{
           height: 0.5rem;
           background: #ebebeb
       }
       div{
           height: 1.375rem;
           padding: 0 0.5rem;
           display: flex;
           align-items: center;
       }
       .avatar{
           height: 3rem;
           overflow: hidden;
           span{
               margin-left: 0.5rem;
               color: #999
           }
           div{
               padding: 0;
               margin-top: 0.625rem;
               margin-bottom: 0.25rem;
               img{
               width: 1.375rem;
               height: 1.375rem;
               margin-right: 0.875rem;
               margin-left: 0.5rem;
                }
           span{
               display: inline-block;
               width: 1.375rem;
               height: 1.375rem;
               margin-left: 0;
               box-sizing: border-box;
               justify-content: center;
               display: flex;
               align-items: center;
               font-size: 1.375rem;
                color: #999;
                border: 1px solid #999
               }
           }
           
       }
       .withBtn{
           justify-content: space-between;
           .btnCon{
               display: flex;
               align-items: center;
               width: 1.25rem;
               height: 0.687rem;
               background: #999;
               border-radius: 0.34rem;
               .btn{
                   width: 0.563rem;
                   height: 0.563rem;
                   margin-left: 2px;
                   border-radius: 50%;
                   background-color: white;
                   &.left{
                       transform: translateX(0.6rem);

                   }
               }
           }
       }
    }
</style>
