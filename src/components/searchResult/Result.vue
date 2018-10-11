<template>
    <div class="result">
        <MailHeader headerTitle="详细资料">
            <span class="iconfont icon-ttpodicon"></span>
        </MailHeader>
        <div class="avatar">
            <img src="../../assets/1.jpeg" alt="">
            <span>{{searchResult.userName}}</span>
        </div>
        <div class="item">
            设置备注和标签
        </div>
        <div class="item">
            个性签名
        </div>
        <div class="addBtn" @click="goCheck">添加到通讯录</div>
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader.vue";
import {mapState} from "vuex"
export default {
  name: "Result",
  components: {
    MailHeader
  },
  methods:{
      goCheck(){
          this.$router.push("/check")
      }
  },
  computed:{
      ...mapState(["searchResult"])
  }
};
</script>
<style lang="scss">
.result {
  padding-top: 1.38rem;
  height: 100%;
  background: #ebebeb;
  .avatar{
      display: flex;
      align-items: center;
      height: 2.5rem;
      margin-top: 0.5rem;
      background: white;
      img{
          width: 1.875rem;
          height: 1.875rem;
          margin: 0 0.5rem
      }
      span{
          align-self: flex-start;
          margin-top: 0.625rem;
          font-size: 0.5rem
      }
  }
  .item,.addBtn{
      height: 1.375rem;
      background: white;
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      font-size: 0.5rem;
      padding-left: 0.5rem;
  }
  .addBtn{
      margin: 0.5rem;
      background: rgb(26, 173, 25);
      color: white;
      justify-content: center;
      border-radius: 2px
  }
}
</style>
