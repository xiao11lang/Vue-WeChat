<template>
    <div class="mark">
        <MailHeader headerTitle="所有标签">
            <span class="addMark">新建</span>
        </MailHeader>
        <p>暂无标签</p>
        <p>你可以通过给朋友添加标签来进行分类</p>
        <div class="newMark">新建标签</div>
    </div>
</template>
<script>
import MailHeader from "./MailHeader.vue"
export default {
    name:"Mark",
    components:{
        MailHeader
    }
}
</script>
<style lang="scss">
    .mark{
        padding-top: 1.38rem;
        .addMark{
            font-size: 0.375rem
        }
        p{
            color: rgb(154,154,154);
            &:nth-of-type(1){
                font-size: 0.5rem;
                margin-top: 3.75rem;
                text-align: center;
            }
            &:nth-of-type(2){
                font-size: 0.375rem;
                text-align: center;
                margin-top: 1rem;
            }
        }
        .newMark{
            margin: 5rem 0.375rem;
            height: 1.2rem;
           color: white;
           font-size: 0.5rem;
           background: #46c01b;
           border-radius: 0.1rem;
           display: flex;
           align-items: center;
           justify-content: center
        }
    }
</style>
