<template>
    <div class="addIndex">
        <MailHeader headerTitle="添加朋友"></MailHeader>
        <p class="divider"></p>
        <p class="addSearch">
            <span class="iconfont icon-fanhui"></span>
            <input type="text" placeholder="微信号/QQ号/手机号" @focus="goPublic(1)">
        </p>
        <p class="myNo">
            我的微信号：1234
            <span class="iconfont icon-erweima"></span>
        </p>
        <div class="itemContainer">
            <div class="addItem" @click="go('/radar')">
            <span class="iconfont icon-leida"></span>
            <div class="itemCon">
                <p>雷达加朋友</p>
                <p>添加身边的朋友</p>
            </div>
        </div>
        
        <div class="addItem" @click="go('/faceToFace')">
            <span class="iconfont icon-qunliaotubiao"></span>
            <div class="itemCon">
                <p>面对面建群</p>
                <p>与身边的朋友进入同一个群聊</p>
            </div>
        </div>
        <div class="addItem" @click="go('/scan')">
            <span class="iconfont icon-saoyisao"></span>
            <div class="itemCon">
                <p>扫一扫</p>
                <p>扫描二维码名片</p>
            </div>
        </div>
        <div class="addItem" @click="go('/phoneFriend')">
            <span class="iconfont icon-xindepengyou2"></span>
            <div class="itemCon">
                <p>手机联系人</p>
                <p>添加或邀请通讯录中的朋友</p>
            </div>
        </div>
        <div class="addItem" @click="goPublic(2)">
            <span class="iconfont icon-gongzhonghaotubiao"></span>
            <div class="itemCon">
                <p>公众号</p>
                <p>获取更多资讯或服务</p>
            </div>
        </div>
        </div>
        
    </div>
</template>
<script>
import MailHeader from "../mail/MailHeader";
export default {
  name: "AddIndex",
  components: { MailHeader },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    goPublic(choice){
        this.$router.push("/searchItem")
        this.$router.searchChoice=choice
    }
  }
};
</script>
<style lang="scss">
$addColors: rgb(78, 113, 187) rgb(69, 192, 26) rgb(39, 130, 215)
  rgb(250, 157, 59) rgb(39, 130, 215);
.addIndex {
  padding-top: 1.38rem;
  .divider {
    height: 0.5rem;
    background-color: rgb(235, 235, 235);
  }
  .addSearch {
    display: flex;
    align-items: center;
    height: 1.375rem;
    span {
      margin: 0 0.5rem;
    }
    input {
      border: none;
      outline: none;
      flex-grow: 1;
    }
  }
  .myNo {
    color: rgb(154, 154, 154);
    background-color: rgb(235, 235, 235);
    text-align: center;
    padding-top: 0.625rem;
    height: 1rem;
    span {
      margin-left: 0.25rem;
      &::before {
        font-size: 0.625rem;
      }
    }
  }
  .itemContainer {
    .addItem {
      display: flex;
      align-items: center;
      height: 1.875rem;
      border-bottom: 1px solid rgb(235, 235, 235);
      span {
        margin: 0 0.5em;
        &::before {
          font-size: 1rem;
        }
      }
      .itemCon {
        flex-grow: 1;
        p:nth-child(1) {
          font-size: 0.4rem;
        }
        p:nth-child(2) {
          font-size: 0.375rem;
          color: rgb(154, 154, 154);
        }
      }
      @for $i from 1 through 5 {
        &:nth-of-type(#{$i}) {
          span {
            color: nth($addColors, $i);
          }
        }
      }
    }
  }
}
</style>
