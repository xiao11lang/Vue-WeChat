<template>
    <div class="login">
        <div class="top">
            <span class="iconfont icon-guanbi" @click="back"></span>
        </div>
        <p class="loginType">微信号/QQ/邮箱登录</p>
        <div class="username" :class="{focus:userFocus}">
            <label for="">账号</label>
            <input type="text" placeholder="请填写微信号/QQ号/邮箱" @focus="focus('userFocus')" @blur="blur('userFocus')" ref="user" @input="input" v-model="number">
        </div>
        <div class="password" :class="{focus:passFocus}">
            <label for="">密码</label>
            <input type="password" placeholder="请填写密码" @focus="focus('passFocus')" @blur="blur('passFocus')" ref="pass" @input="input" v-model="password">
        </div>
        <p class="usePhone">用手机号登陆</p>
        <div class="loginBtn" :class="{btnActive:btnActive}" @click="loginCheck">登陆</div>
        <footer class="footer">
            <span>找回密码</span>
            <span>紧急冻结</span>
            <span>微信安全中心</span>
        </footer>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  name: "Login",
  data:function(){
      return {
          userFocus:false,
          passFocus:false,
          btnActive:false,
          number:"",
          password:""
      }
  },
  methods:{
      ...mapActions(['login']),
      focus:function(which){
          this[which]=true
      },
      blur:function(which){
          this[which]=false
      },
      input:function(){
          if(this.$refs.user.value!==""&&this.$refs.pass.value!==""){
              this.btnActive=true
          }else{
              this.btnActive=false
          }
      },
      loginCheck(){
          let fd=new FormData();
            fd.append("number",this.$refs.user.value)
            fd.append("password",this.$refs.pass.value)
            this.login(fd)
      },
      back(){
          this.$router.go(-1)
      }
  },
  beforeMount(){
      if(window.localStorage.number){
          this.number=window.localStorage.number;
          this.password=window.localStorage.password;
          this.btnActive=true
      }
  }
};
</script>
<style lang="scss">
.login {
  color: balck;
  .top {
    padding: 0.375rem 0 0 0.375rem;
    span::before {
      font-size: 0.4rem;
    }
  }
  p.loginType {
    font-size: 0.625rem;
    padding-left: 0.375rem;
    margin-top: 1.38rem;
    margin-bottom: 1rem
  }
  .username,.password{
      display: flex;
      height: 1.375rem;
      margin: 0 0.375rem;
      border-bottom: 1px solid #ccc;
      align-items: center;
      label{
          margin-right: 1.7rem
      }
      input{
          border: none;
          outline: none;
          flex-grow: 1;
      }
      &.focus{
          border-bottom-color: rgb(69, 192, 26)
      }
  }
  p.usePhone{
      color: rgb(87, 107, 149);
      font-size: 0.375rem;
      margin: 0.75rem 0 1.5rem 0;
      padding-left: 0.375rem
  }
  .loginBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.375rem;
      height: 1.375rem;
      font-size: 0.5rem;
      color: rgb(185, 226, 185);
      background: rgb(156, 214, 155);
      border-radius: 2px;
      &.btnActive{
          background-color: #46c01b
      }
  }
  footer{
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 1.375rem;
      align-items: center;
      justify-content: space-between;
      span{
          color: rgb(87, 107, 149);
          padding: 0 0.375rem;
          &:first-child{
              margin-left: 1rem
          }
          &:last-child{
              margin-right: 1rem
          }
      }
  }
}
</style>
