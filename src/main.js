import Vue from "vue"
import "./flexible"
import Home from "./components/Home.vue"
import router from "./router/index"
import store from "./store/store"
let vm=new Vue({
    store,
    router,
    el:"#app",
    components:{
    },
    
    template:"<keep-alive><router-view></router-view></keep-alive>"
})