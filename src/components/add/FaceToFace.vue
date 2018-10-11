<template>
    <div class="faceToFace">
        <MailHeader headerTitle="面对面建群"></MailHeader>
        <p class="info">和身边的朋友输入同样的四个数字，</p>
        <p class="info">进入同一个群聊</p>
        <div class="number">
            <p v-for="(no,index) in numbers" :key="index">{{no!==""?no:''}}<span v-if="no===''"></span></p>
            
           
        </div>
        <footer class="keyboard">
            <div class="row" @click="addNo($event)">
                <span class="column" >1</span>
                <span class="column">2</span>
                <span class="column">3</span>            
            </div>
            <div class="row" @click="addNo($event)">
                <span class="column">4</span>
                <span class="column">5</span>
                <span class="column">6</span>            
            </div>
            <div class="row" @click="addNo($event)">
                <span class="column">7</span>
                <span class="column">8</span>
                <span class="column">9</span>            
            </div>
            <div class="row">
                <span class="column" @click="addNo($event)"> </span>
                <span class="column" @click="addNo($event)">0</span>
                <span class="column" @click="deleteNo"><span class="iconfont icon-tuige"></span></span>            
            </div>
        </footer>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader"
export default {
    name:"FaceToFace",
    data:function(){
        return {
            numbers:["","","",""]
        }
    },
    components:{
        MailHeader
    },
    methods:{
        addNo(e){
            for(let i=0;i<this.numbers.length;i++){
                if(this.numbers[i]===""){
                    //this.numbers[i]=e.target.innerHTML;
                    this.$set(this.numbers,i,e.target.innerHTML)
                    break;
                }
            }
        },
        deleteNo(){
            for(let i=this.numbers.length-1;i>=0;i--){
                if(this.numbers[i]!==""){
                    this.$set(this.numbers,i,"");
                    break
                }
            }
        }
    }
}
</script>
<style lang="scss">
    .faceToFace{
        width: 100%;
        height: 100%;
        padding-top: 2.5rem;
        box-sizing: border-box;
        background: #181E1F;
        overflow: hidden;
        header{
            background: transparent
        }
        .info{
            display: flex;
            justify-content: center;
            color: rgb(112, 116, 117);
            font-size: 0.375rem;
            &:nth-of-type(1){
                margin-bottom: 0.15rem
            }
        }
        .number{
            padding: 0 3rem;
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
            p{
                width: 1rem;
                height: 1rem;
                font-size: 0.875rem;
                color: rgb(69, 192, 26);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            span{
                width: 0.375rem;
                height: 0.375rem;
                background: rgb(12, 15, 15);
                border-radius: 50%;
                box-shadow: 0 1px 1px 1px rgb(69, 192, 26)
            }
        }
        .keyboard{
            position: fixed;
            bottom: 0;
            .row{
                display: flex;
                width: 100%;
                .column{
                    width: 33.3%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 1.75rem;
                    border-top: 1px solid rgb(107, 111, 112);
                    border-right: 1px solid rgb(107, 111, 112);
                    color: rgb(107, 111, 112);
                    font-size: 0.5rem;
                    background: #181E1F;
                    &:last-child{
                        span::before{
                            font-size: 0.625rem
                        }
                    }
                }
            }
        }
    }
</style>
