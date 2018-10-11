<template>
    <div class="watch">
        <MailHeader headerTitle="看一看">
            <span class="iconfont icon-sousuo-copy"></span>
        </MailHeader>
        <h1>没有什么好看的</h1>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue"
export default {
    name:"Watch",
    components:{
        MailHeader
    }
}
</script>
<style lang="scss">
    .watch{
        padding-top: 1.38rem;
        h1{
            text-align: center;
        }
        header{
            background: rgb(242, 242, 242);
            color: black;
        }
    }
</style>
