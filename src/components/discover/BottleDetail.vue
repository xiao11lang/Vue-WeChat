<template>
    <div class="bottleDetail">
        <div class="top">
            <span class="iconfont icon-wo"></span>
            <div>
                <p>来自{{bottle.location}}</p>
                <p>{{bottle.userName}}</p>
            </div>
            <p class="complaint">投诉</p>
        </div>
        <div class="content">{{bottle.content}}</div>
        <footer class="footer">
            <span @click="back">扔回海里</span>
            <span @click="goContent">回应</span>
        </footer>
    </div>
</template>
<script>
export default {
    name:"BottleDetail",
    methods:{
        back(){
            this.$emit("back")
        },
        goContent(){
            this.$router.push("/bottleContent")
            this.$emit("back")
        }
    },
    props:["bottle"]
}
</script>
<style lang="scss">
    .bottleDetail{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
        .top{
            height: 1.875rem;
            display: flex;
            align-items: center;
            margin: 0.5rem;
            span{
                width: 1.875rem;
                height: 1.875rem;
                padding: 0.4rem;
                box-sizing: border-box;
                background: rgb(241, 241, 241);
                color: rgb(201, 201, 201);
                &::before{
                    font-size: 1.075rem;
                }
            }
            div{
                flex-grow: 1;
                margin-left: 0.375rem;
                color: white;
                p:nth-child(1){
                    font-size: 0.45rem;
                    margin-bottom: 0.25rem
                }
                p:nth-child(2){
                    font-size: 0.375rem;
                    color: rgb(99, 103, 106)
                }
            }
            .complaint{
                align-self: flex-end;
                font-size: 0.5rem;
                color: rgb(34, 90, 143)
            }
        }
        .content{
            margin: 0 0.5rem;
            padding: 0.375rem;
            background: white;
            height: 50%;
            border-radius: 0.1rem
        }
        .footer{
            display: flex;
            justify-content: space-around;
            bottom: 0.625rem;
            span{
                width: 4.3rem;
                height: 1rem;
                font-size: 0.45rem;
                font-weight: lighter;
                text-align: center;
                border-radius: 0.15rem;
                color: white;
                line-height: 1rem;
                background: linear-gradient(to bottom,rgb(176, 176, 176) 0,
                rgb(136,136,136) 20%,rgb(86,86,86) 50%,rgb(68,68,68))
            }
        }
    }
</style>
