<template>
    <div class="shake">
        <MailHeader headerTitle="摇一摇">
            <span class="iconfont icon-33"></span>
        </MailHeader>
        <div class="bg iconfont icon-weixinyaoyiyaoicon"></div>
        <footer>
            <div @click="activeIndex=0" :class="{active:activeIndex===0}">
                <p class="iconfont icon-wo"></p>
                <span>人</span>
            </div>
            <div @click="activeIndex=1" :class="{active:activeIndex===1}">
                <p class="iconfont icon-gequ"></p>
                <span>歌曲</span>
            </div>
            <div @click="activeIndex=2" :class="{active:activeIndex===2}">
                <p class="iconfont icon-TV"></p>
                <span>电视</span>
            </div>
            
        </footer>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue"
export default {
    name:"Shake",
    components:{
        MailHeader
    },
    data:function(){
        return {
            activeIndex:0
        }
    }

}
</script>
<style lang="scss">
    .shake{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(48, 48, 48);
        header{
            background: transparent
        }
        .bg{
            color: white;
            &::before{
                font-size: 4rem
            }
        }
        footer{
            position: fixed;
            display: flex;
            bottom: 0;
            width: 100%;
            color: white;
            background: transparent;
            padding-bottom: 0.5rem;
            
            div{
                width: 33.3%;
                text-align: center;
                &.active{
                    color: rgb(69, 192, 26)
                    }
                p{
                    margin-bottom: 0.375rem;
                    &::before{
                        font-size: 1rem
                    }
                }
                
                span{
                    font-size: 0.375rem;
                }
            }
        }
    }
</style>
