<template>
    <div class="radar">
        <div class="round1">
        </div>
        <div class="round2"></div>
        <div class="round3"></div>
        <div class="round4"></div>
        <div class="round5"></div>
        <span class="back" @click="goBack">返回</span>
    </div>
</template>
<script>
export default {
    name:"Radar",
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss">
    .radar{
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background-image: url("../../assets/star.jpeg");
        background-size: cover;
        .round1{
           position: absolute;
           width: 15rem;
           height: 15rem;
           border: 2px solid white;
           border-radius: 50%;
           left: calc(50% - 7.5rem)
        }
        .round2{
            position: absolute;
            width: 12rem;
            height: 12rem;
            border: 2px solid white;
            border-radius: 50%;
            left: calc(50% - 6rem)
        }
        .round3{
            position: absolute;
            width: 9rem;
            height: 9rem;
            border: 2px solid white;
            border-radius: 50%;
            left: calc(50% - 4.5rem)
        }
        .round4{
            position: absolute;
            width: 6rem;
            height: 6rem;
            border: 2px solid white;
            border-radius: 50%;
            left: calc(50% - 3rem)
        }
        .round5{
            position: absolute;
            width: 3rem;
            height: 3rem;
            border: 2px solid white;
            border-radius: 50%;
            left: calc(50% - 1.5rem);
            background-image: url("../../assets/1.jpeg");
            background-size: cover
        }
        .back{
            display: flex;
            position: absolute;
            left: 0.5rem;
            top: 0.5rem;
            width: 1.875rem;
            height: 1rem;
            align-items: center;
            justify-content: center;
            font-size: 0.5rem;
            color: white;
            border: 1px solid white
            
        }
    }
</style>
