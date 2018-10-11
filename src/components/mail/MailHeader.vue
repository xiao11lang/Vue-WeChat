<template>
    <header class="mailHeader">
        <div class="headerLeft">
            <span class="iconfont icon-fanhui" @click="goBack"></span>
            <span>{{headerTitle}}</span>
        </div>
        <div class="headerRight">
            <slot></slot>
        </div>
        
    </header>
</template>
<script>
export default {
    name:"MailHeader",
    props:["headerTitle"],
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    },
    
}
</script>
<style lang="scss">
</style>
