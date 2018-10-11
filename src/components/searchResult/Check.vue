<template>
    <div class="check">
        <MailHeader headerTitle="验证申请">
            <span class="sendBtn" @click="addFriend">发送</span>
        </MailHeader>
        <div class="itemCon">
            <div class="item">
                <p>你需要发送验证申请，等对方通过</p>
                <input/>
            </div>
        </div>
        <div class="itemCon">
            <div class="item">
                <p>为朋友设置备注</p>
                <input :placeholder="searchResult.userName"/>
            </div>
        </div>
        <div class="itemCon">
            <div class="item">
                <p>设置朋友圈权限</p>
                <div class="withBtn">
                    <span>消息免打扰</span>
                    <span class="btnCon" ref="mes"><span class="btn" :class="{left:atLeftOfMes}" @click="toggleMes($refs.mes)"></span></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader";
import { mapState,mapActions } from "vuex";
export default {
  name: "Check",
  components: {
    MailHeader
  },
  data:function(){
      return {
          atLeftOfMes:false
      }
  },
  computed: {
    ...mapState(["searchResult","userInfo"])
  },
  methods:{
      toggleMes:function(parent){
            this.atLeftOfMes=!this.atLeftOfMes;
            parent.style.backgroundColor=this.atLeftOfMes?"#46c01b":"#888"
        },
      ...mapActions(['add']),
      addFriend(){
        let fd=new FormData()
          fd.append("number",this.userInfo.number)
          fd.append("friend",JSON.stringify(this.searchResult))
          this.add(fd)
          this.$router.push("/home")
      }
  }
};
</script>
<style lang="scss">
.check {
  padding-top: 1.38rem;
  height: 100%;
  background: #ebebeb;
  .itemCon {
    height: 2.5rem;
    background: white;
    .item {
      margin: 0 0.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        color: rgb(153, 153, 153);
        margin-top: 0.25rem;
      }
      input {
        margin-bottom: 0.25rem;
        border: none;
        outline: none;
        border-bottom: 1px solid #ccc;
      }
    }
    &:nth-child(3) {
      margin: 0.5rem 0;
    }
  }
  .withBtn {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
    .btnCon {
      display: flex;
      align-items: center;
      width: 1.25rem;
      height: 0.687rem;
      background: #999;
      border-radius: 0.34rem;
      .btn {
        width: 0.563rem;
        height: 0.563rem;
        margin-left: 2px;
        border-radius: 50%;
        background-color: white;
        &.left {
          transform: translateX(0.6rem);
        }
      }
    }
  }
  .sendBtn {
    font-size: 0.375rem;
    color: rgb(26, 173, 25);
  }
}
</style>

