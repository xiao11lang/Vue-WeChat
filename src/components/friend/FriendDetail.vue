<template>
    <div class="friendDetail">
        <header>
            <span class="iconfont icon-fanhui" @click="goBack"></span>
            <span>详细资料</span>
            <div class="more" @click="show">
                <span class="iconfont icon-ttpodicon"></span>
            </div>
        </header>
        <p class="divider"></p>
        <div class="avatar">
            <img src="../../assets/1.jpeg" alt="">
            <div class="infoCon">
                <div>
                    <span class="title">title<span class="iconfont icon-wo"></span></span>
                    <span class="iconfont icon-pengyouquan limit"></span>
                </div>
                <p>微信号:{{currentFriend.number}}</p>
                <p>昵称:{{currentFriend.userName}}</p>
            </div>
        </div>
        <p class="divider"></p>
        <div class="item">设置备注和标签</div>
        <div class="item phone">
            <span>电话号码</span>
            <div>
                <p>15156473200</p>
                <p>15156473200</p>
            </div>
        </div>
        <p class="divider"></p>
        <div class="item location">
            <span>地区</span><span>上海</span>
        </div>
        <div class="item photos" @click="goCircle">
            <span>个人相册</span>
            <div>
                <img src="../../assets/1.jpeg" alt="">
                <img src="../../assets/1.jpeg" alt="">
                <img src="../../assets/1.jpeg" alt="">
            </div>
        </div>
        <div class="item">更多</div>
        <div class="sendMes" @click="goChat">发消息</div>
        <div class="video">视频通话</div>
        <div class="modalCon" v-if="showModal" @click.self="close">
            <div class="modal">
                <div class="modalItem">
                    <span class="iconfont icon-xie"></span><span>设置备注及标签</span>
                </div>
                <div class="modalItem">
                    <span class="iconfont icon-xingxing"></span><span>标为星标朋友</span>
                </div>
                 <div class="modalItem">
                    <span class="iconfont icon-pengyouquan"></span><span>设置朋友圈权限</span>
                </div>
                 <div class="modalItem">
                    <span class="iconfont icon-fenxiang"></span><span>发送该名片</span>
                </div>
                 <div class="modalItem">
                    <span class="iconfont icon-tousu1"></span><span>投诉</span>
                </div>
                 <div class="modalItem">
                    <span class="iconfont icon-jiaruheimingdan"></span><span>加入黑名单</span>
                </div>
                 <div class="modalItem">
                    <span class="iconfont icon-delete"></span><span>删除</span>
                </div>
                 <div class="modalItem">
                    <span class="iconfont icon-novigo_desktop"></span><span>添加到桌面</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "FriendDetail",
  data: function() {
    return {
      showModal: false
    };
  },
  computed: {
    ...mapState(["currentFriend"])
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    show() {
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    },
    goCircle() {
      this.$router.push("/friendCircle");
    },
    goChat() {
      this.$router.push("/chatWindow");
    }
  }
};
</script>
<style lang="scss">
.friendDetail {
  padding-top: 1.38rem;
  header {
    div {
      flex-grow: 1;
      text-align: right;
    }
  }
  header span:nth-child(1) {
    margin: 0 0.5rem;
  }
  p.divider {
    height: 0.5rem;
    background: #ebebeb;
  }
  .avatar {
    display: flex;
    height: 2.5rem;
    align-items: center;
    img {
      width: 1.875rem;
      margin: 0 0.5rem;
    }
    .infoCon {
      flex-grow: 1;
      div {
        font-size: 0.5rem;
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 0.5rem;
          span {
            margin-left: 0.375rem;
            color: rgb(88, 155, 238);
            &::before {
              font-size: 0.5rem;
            }
          }
        }
        & .limit {
          margin-right: 0.5rem;
          color: rgb(192, 192, 192);
        }
      }
      p {
        color: rgb(192, 192, 192);
        font-size: 0.375rem;
      }
    }
  }
  .item {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    height: 1.375rem;
    border-bottom: 1px solid #ebebeb;
  }
  .phone {
    height: 2.75rem;
    div {
      margin-left: 0.5rem;
      height: 100%;
    }
    p {
      display: flex;
      align-items: center;
      color: rgb(104, 122, 160);
      height: 50%;
    }
  }
  .location {
    span {
      &:nth-child(1) {
        font-size: 0.4rem;
        margin-right: 1.68rem;
      }
      &:nth-child(2) {
        color: rgb(172, 172, 172);
      }
    }
  }
  .photos {
    height: 2.2rem;
    span {
      font-size: 0.4rem;
      margin-right: 0.25rem;
    }
    img {
      height: 1.875rem;
      margin-right: 0.25rem;
    }
  }
  .sendMes,
  .video {
    margin: 0.5rem;
    height: 1.2rem;
    color: white;
    font-size: 0.5rem;
    background: #46c01b;
    border-radius: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video {
    margin-top: 0;
    background: white;
    color: black;
    border: 1px solid rgb(172, 172, 172);
  }
  .modalCon {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
    .modal {
      position: absolute;
      overflow: scroll;
      bottom: 0;
      width: 100%;
      background: white;
      .modalItem {
        height: 1.375rem;
        display: flex;
        align-items: center;
        font-size: 0.4rem;
        color: rgb(172, 172, 172);
        & :first-child {
          margin: 0 0.625rem;
        }
      }
    }
  }
}
</style>
