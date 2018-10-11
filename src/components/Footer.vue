<template>
    <footer>
        <div v-for="(info,index) in infos" :key="info" @click="switchIndex(index)" :class="activeIndex===index?'active':''">
            <i :class="['iconfont',activeIndex===index?activeFont[index]:fontClass[index]]"></i>
            <br>
            <span>{{info}}</span>
        </div>
    </footer>
</template>
<script>
export default {
    name:"Footer",
    props:["activeIndex"],
    data:function(){
        return {
            infos:["微信","通讯录","发现","我"],
            fontClass:["icon-weixintubiao-3","icon-weixintubiao-4","icon-weixintubiao-2","icon-weixintubiao-1"],
            activeFont:["icon-weixintubiao-5","icon-tongxunlu","icon-weixintubiao-","icon-geren"]
        }
    },
    methods:{
        switchIndex(index){
            this.$emit("switch",index)
        }
    }
}
</script>
<style lang="scss">
footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: white;
    div{
        font-size: 0.25rem;
        &.active{
            color:rgb(70, 192, 27)
        }
        i{
            display: inline-block;
            height: 0.875rem;
            width: 0.875rem;
            &::before{
                font-size: 0.75rem
            }
        }
        display: inline-block;
        width:25%;
        text-align:center
    }
   
}
</style>
