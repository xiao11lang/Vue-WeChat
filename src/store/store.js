import Vuex from "vuex"
import Vue from "vue"
import {
  mailInfo
} from "../mailInfo"
import axios from "axios"
import router from "../router/index"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    mailInfo,
    number: 3,
    userInfo: {
      userName: '',
      number: "",
      friends: [],
      circles:[]
    },
    currentFriend: "",
    searchResult: "",
    friendsCheck:[],
    isMe:false,
    nearby:{
      persons:[],
      get:false
    },
    drifitBottles:{
      bottles:[],
      get:false
    },
    myBottle:{
      current:{},
      history:[]
    }
  },
  getters:{
    friends(state){
      let friends=state.userInfo.friends;
        let a={};
        for(let i=0;i<friends.length;i++){
            if(a[friends[i].firstLetter]){
               a[friends[i].firstLetter].push(friends[i])
            }else{
                a[friends[i].firstLetter]=[friends[i]]
            }
        }
        return Object.entries(a).sort(function(a,b){
          if(a[0]<b[0]){
              return -1
          }else{
              return 1
          }
      })
    },
    circles(state){
      return state.userInfo.circles.sort((a,b)=>{
        return b.day-a.day
      })
    },
    myCircles(state){
      let circles=[];
      state.userInfo.friends.forEach((friend,index)=>{
        if(friend.circles){
          friend.circles.forEach((circle)=>{
            circles.push({
              name:friend.userName,
              ...circle
            })
          })
        }
      })
      return circles.sort(function(a,b){
        return a.time-b.time
      })
    }
  },
  mutations: {
    setUserInfo(state, fd) {
      state.userInfo.userName = fd.get("username");
      state.userInfo.number = fd.get("number")
      state.userInfo.friends=[]
    },
    getLoginInfo(state, data) {
      state.userInfo.userName = data.userName;
      state.userInfo.number = data.number;
      state.userInfo.friends = data.friends||[],
      state.userInfo.circles=data.circles||[]
    },
    setSearch(state, result) {
      state.searchResult = result
    },
    setFriend(state,friend){
      state.currentFriend=friend
    },
    addFriend(state,fd){
      state.userInfo.friends.push(JSON.parse(fd.get("friend")))
    },
    addCheckedFriend(state,friend){
      let index=state.friendsCheck.indexOf(friend);
      if(index!==-1){
        state.friendsCheck.splice(index,1)
      }else{
        state.friendsCheck.push(friend)
      }
      
    },
    setMe(state,isMe){
      state.isMe=isMe
    },
    getNearbyPersons(state,res){
      state.nearby={
        get:true,
        persons:res
      }
    },
    getBottles(state,res){
      state.drifitBottles={
        get:true,
        bottles:res
      }
    },
    setMyBottle(state,bottle){
      state.myBottle.current=bottle.current;
      if(bottle.push){
        state.myBottle.history.push(bottle.current)
      }
      
    }


  },
  actions: {
    login(context, fd) {
      axios.post("http://localhost:3000/login", fd).then((res) => {
        if (res.data === "not_exist") {
          alert("账号不存在")
        } else if (res.data === "pass_error") {
          alert("密码错误")
        } else {
          context.commit("getLoginInfo", res.data)
          window.localStorage.number=fd.get("number");
          window.localStorage.password=fd.get("password")
          router.push("/home")
        }
      })
    },
    register(context, fd) {
      axios.post("http://localhost:3000/register", fd).then((res) => {
        if (res.data === "exist") {
          alert("此号码已经注册")
        } else {
          context.commit("setUserInfo", fd)
          router.push("/home")
        }
      })
    },
    add(context,fd){
      axios.post("http://localhost:3000/add", fd).then(() => {
        context.commit("addFriend",fd)
      })
    },
    getNearbyPersons(context){
      if(context.state.nearby.get){
        return 
      }else{
        axios.get("http://localhost:3000/nearbyPersons").then((res)=>{
          context.commit("getNearbyPersons",res.data)
        })
      }
    },
    getBottles(context){
      if(context.state.drifitBottles.get){
        return 
      }else{
        return new Promise(function(resolve,rej){
          axios.get("http://localhost:3000/bottles").then((res)=>{
          context.commit("getBottles",res.data);
          resolve([...res.data])
        })
        })
        
      }
    }

  }
})
export default store