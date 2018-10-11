<template>
    <div class="messageContainer">
        <Message v-for="message of userInfo.friends" :key="message.number" :info="message"/>
    </div>
    
</template>
<script>
import Message from "../item/Message"
import {mapState} from "vuex"
function createList(number){
    var list=[];
    for(var i=0;i<number;i++){
        var title=Math.floor(Math.random()*100000)
        var time=new Date().getHours()+":"+new Date().getUTCMinutes()
        var content=Math.floor(Math.random()*10000000000000)
        list.push({title,time,content})
    }
    return list
}
export default {
    name:"WeChat",
    components:{
        Message
    },
    data:function(){
        return {
            messageList:createList(10)
        }
    },
    computed:{
        ...mapState(['userInfo'])
    },
    methods:{
    
    }
}
</script>
