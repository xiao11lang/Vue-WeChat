<template>
    <div class="nearby">
        <MailHeader headerTitle="附近的人">
            <span class="iconfont icon-ttpodicon"></span>
        </MailHeader>
        <div class="nearbyPerson" v-for="person in nearby.persons" :key="person.number">
            <img :src="path[Math.floor(Math.random()*10)]" alt="">
            <div class="info" >
                <p>{{person.userName}}</p>
                <p>{{person.distance}}米以内</p>
            </div>
        </div>
        <Loading v-if="!nearby.get"></Loading>
    </div>
</template>
<script>
import {path} from "../../photoPath.js"
import MailHeader from "../mail/MailHeader.vue"
import Loading from "../item/Loading.vue"
import axios from "axios"
import {mapActions,mapState} from "vuex"
export default {
    name:"Nearby",
    components:{
        MailHeader,Loading
    },
    data:function(){
        return {
            path:path,
        }
    },
    computed:{
        ...mapState(['nearby'])
    },
    methods:{
        ...mapActions(['getNearbyPersons'])
    },
    created(){
       this.getNearbyPersons()
        
   }
}
</script>
<style lang="scss">
    .nearby{
        padding-top: 1.38rem;
        .nearbyPerson{
            height: 1.875rem;
            display: flex;
            border-bottom: 1px solid #ccc;
            img{
                width: 1.56rem;
                height: 1.56rem;
                margin: 0 0.25rem 0 0.5rem;
                align-self: center
            }
            .info{
                p:nth-child(1){
                    font-size: 0.4rem;
                    color: rgb(7, 43, 91);
                    margin: 0.375rem 0
                }
                p:nth-child(2){
                    font-size: 0.375rem;
                    color: rgb(130, 130, 130)
                }
            }
        }
    }
</style>
