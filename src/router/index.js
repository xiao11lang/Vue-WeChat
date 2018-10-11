import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/login/Login.vue"
import Register from "../components/login/Register.vue"
import FirstPage from "../components/login/FirstPage.vue"
import Home from "../components/Home.vue"
import Search from "../components/main/Search.vue"
import ChatWindow from "../components/main/ChatWindow"
import ChatSetting from "../components/friend/ChatSetting"
import FriendDetail from "../components/friend/FriendDetail"
import FriendCircle from "../components/friend/FriendCircle"
import {mailRoute} from "../components/mail/mailRoute"
import {addRoute} from "../components/add/addRoute"
import SearchItem from "../components/item/SearchItem"
import {searchRoute} from "../components/searchResult/searchRoute"
import {homeRoute} from "../components/home/homeRoute"
import {discoverRoute} from "../components/discover/discoverRoute"
import {myCircle} from "../components/myCircle/myCircle"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/first",
      component:FirstPage
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/register",
      component:Register
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/search",
      component:Search
    },
    {
      path:"/chatWindow",
      component:ChatWindow,
    },
    {
      path:"/chatSetting",
      component:ChatSetting
    },
    {
      path:"/friendDetail",
      component:FriendDetail
    },
    {
      path:"/friendCircle",
      component:FriendCircle
    },
    ...mailRoute,
    ...addRoute,
    ...searchRoute,
    ...homeRoute,
    ...discoverRoute,
    ...myCircle,
    {
      path:"/searchItem",
      component:SearchItem
    },
    {
      path: '/',
      redirect:"/first"
    }
  ]
})
