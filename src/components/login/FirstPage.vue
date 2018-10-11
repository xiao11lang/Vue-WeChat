<template>
    <div class="firstPage">
        <div class="top">语言</div>
        <footer>
            <div @click="go('/login')">登陆</div>
            <div @click="go('/register')">注册</div>
        </footer>
    </div>
</template>
<script>
export default {
    name:"FirstPage",
    methods:{
        go(path){
            this.$router.push(path)
        }
    }
}
</script>
<style lang="scss">
    .firstPage{
        background-image: url("../../assets/earth.png");
        background-size: cover;
        height: 100%;
        .top{
            color: white;
            padding-right: 0.375rem;
            padding-top: 0.375rem;
            text-align: right
        }
        footer{
            position: fixed;
            bottom: 0.5rem;
            display: flex;
            width: 100%;
            height: 1.375rem;
            justify-content: space-between;
            div{
                display: flex;
                height: 100%;
                width: 3.5rem;
                align-items: center;
                justify-content: center;
                font-size: 0.5rem;
                border-radius: 2px;
                &:first-child{
                    margin-left: 0.5rem;
                    background: rgb(26, 173, 25);
                    color: white
                }
                &:last-child{
                    margin-right: 0.5rem;
                    background: rgb(248, 248, 248);
                    color: black

                }
            }
        }
    }
</style>
