<template>
    <div class="register">
       <div class="top">
            <span class="iconfont icon-guanbi" @click="back"></span>
        </div>
        <p class="loginType">微信号/QQ/邮箱登录</p>
        <div class="userCon">
            <div class="username" :class="{focus:userFocus,error:userError}">
                <label for="">昵称</label>
                <input type="text" placeholder="例如：陈晨" @focus="focus('userFocus')" @blur="blur('userFocus')" ref="user" @input="input" @keyup="userKeyup($event)" name="username">
            </div>
            <div class="avatarUp">
                <span class="iconfont icon-xiangji"></span>
                <input type="file" ref="upload" @change="change">
            </div>
            
        </div>
        <div class="location">
            <label for="">国家/地区</label>
            <span>中国（+86）</span>
        </div>
        <div class="number" :class="{focus:noFocus,error:noError}">
            <label for="">手机号</label>
            <input type="text" placeholder="请填写手机号" @focus="focus('noFocus')" @blur="blur('noFocus')" ref="no" @input="input" @keyup="noKeyup($event)" name="number">
        </div>
        <div class="password" :class="{focus:passFocus,error:passError}">
            <label for="">密码</label>
            <input type="password" placeholder="填写密码" @focus="focus('passFocus')" @blur="blur('passFocus')" ref="pass" @input="input" @keyup="passKeyup($event)" name="password">
        </div>
        <div class="registerBtn" :class="{btnActive:btnActive}" @click="upload">注册</div>
        <p class="extra">点击上面的"注册"按钮,即表示你同意<span>《腾讯微信软件许可及服务协议》</span>和<span>《微信隐私保护指引》</span></p>
    </div>
    
</template>
<script>
import axios from "axios"
import {mapActions} from "vuex"
export default {
  name: "Register",
  data: function() {
    return {
      userFocus: false,
      noFocus: false,
      passFocus: false,
      userError: false,
      noError: false,
      passError: false,
      btnActive: false
    };
  },
  methods: {
    ...mapActions(['register']),
    focus: function(which) {
      this[which] = true;
    },
    blur: function(which) {
      this[which] = false;
    },
    ckeck(which) {
      this[which] = true;
    },
    userKeyup(e) {
      let reg = /^([\u4E00-\u9FA5]|[a-zA-Z0-9_]){1,10}$/;
      if (e.target.value.length > 10) {
        alert("用户名最大位数为10位");
        e.target.value = e.target.value.slice(0, 10);
      }
      else if (!e.target.value.match(reg)) {
        this.userError = true;
      } else {
        this.userError = false;
      }
    },
    noKeyup(e) {
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (e.target.value.length > 11) {
        alert("手机位数最大为11位");
        e.target.value = e.target.value.slice(0, 11);
      }
      else if (!e.target.value.match(reg)) {
        this.noError = true;
      } else {
        this.noError = false;
      }
    },
    passKeyup(e) {
      let reg = /^([a-zA-Z0-9]){6,16}$/;
      if (e.target.value.length > 16) {
        alert("密码最大位数为16位");
        e.target.value = e.target.value.slice(0, 16);
      }
      else if (!e.target.value.match(reg)) {
        this.passError = true;
      } else {
        this.passError = false;
      }
    },
    input: function() {
      if (
        this.$refs.user.value !== "" &&
        this.$refs.pass.value !== "" &&
        this.$refs.no.value !== ""
      ) {
        this.btnActive = true;
      } else {
        this.btnActive = false;
      }
    },
    change() {
      let name = this.$refs.upload.files[0].name;
      let extName = name.split(".");
      if (
        extName[extName.length - 1] !== "png" &&
        extName[extName.length - 1] !== "jpg" &&
        extName[extName.length - 1] !== "jpeg"
      ) {
        alert("文件格式错误，仅接受图片文件");
        return;
      }
    },
    upload(){
        let notEmpty=this.$refs.user.value!==""&&this.$refs.no.value!==""&&this.$refs.pass.value!==""
        if(!this.userError&&!this.noError&&!this.passError&&notEmpty){
            let fd=new FormData();
                fd.append("username",this.$refs.user.value)
                fd.append("number",this.$refs.no.value)
                fd.append("password",this.$refs.pass.value)
                //fd.append("avatar",this.$refs.upload.files[0])
                /* axios.post("http://localhost:3000/post",fd).then((res)=>{
                  if(res.data==="exist"){
                    alert("此号码已经注册")
                  }else{
                    this.$router.push("/home")
                  }
                }) */
                this.register(fd)
        }else{
            alert("输入信息有误，请核对")
            return 
        }
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
.register {
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
    margin-bottom: 1rem;
  }
  .userCon {
    display: flex;
    height: 2rem;
    align-items: flex-end;
    .avatarUp {
      position: relative;
      width: 1.875rem;
      height: 1.875rem;
      background-color: rgb(221, 221, 221);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        display: inline-block;
        opacity: 0;
      }
    }
  }
  .username,
  .number,
  .password,
  .location {
    display: flex;
    height: 1.375rem;
    margin: 0 0.375rem;
    border-bottom: 1px solid #ccc;
    align-items: center;
    label {
      margin-right: 1.25rem;
    }
    input {
      border: none;
      outline: none;
      flex-grow: 1;
    }
    &.focus {
      border-bottom-color: rgb(69, 192, 26);
    }
    &.error {
      border-color: red;
    }
  }
  .location {
    span {
      color: rgb(69, 192, 26);
    }
  }
  .registerBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.75rem 0.375rem 0.375rem;
    height: 1.375rem;
    font-size: 0.5rem;
    color: rgb(185, 226, 185);
    background: rgb(156, 214, 155);
    border-radius: 2px;
    &.btnActive {
      background-color: #46c01b;
    }
  }
  p.extra {
    font-size: 0.375rem;
    margin: 0 0.375rem;
    color: rgb(211, 211, 211);
    span {
      color: rgb(122, 138, 170);
      text-decoration: underline;
    }
  }
}
</style>
