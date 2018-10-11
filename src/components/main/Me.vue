<template>
    <div class="me">
        <p class="divider"></p>
        <nav class="myInfo">
            <img src="../../assets/1.jpeg" alt="">
            <div class="infoRight">
                <div>
                    <p class="myName">{{userInfo.userName}}</p>
                    <span>微信号：{{userInfo.number}}</span>
                </div>
                <span class="iconfont icon-erweima"></span>
            </div>
        </nav>
        <p class="divider"></p>
        <div class="item">
            <span class="iconfont icon-qianbao"></span><span>钱包</span>
        </div>
        <p class="divider"></p>
        <div class="item">
            <span class="iconfont icon-weixinshoucang"></span><span>收藏</span>
        </div>
        <div class="item">
            <span class="iconfont icon-xiangce"></span><span>相册</span>
        </div>
        <div class="item">
            <span class="iconfont icon-qiabao"></span><span>卡包</span>
        </div>
        <div class="item">
            <span class="iconfont icon-biaoqing"></span><span>表情</span>
        </div>
        <p class="divider"></p>
        <div class="item">
            <span class="iconfont icon-33"></span><span>设置</span>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"Me",
    computed:{
        ...mapState(['userInfo'])
    },
    methods:{
        
    }
}
</script>
<style lang="scss">
$meColors: rgb(16, 174, 255) rgb(255, 192, 0) rgb(16, 174, 255) rgb(16, 174, 255) rgb(16, 174, 255) rgb(255, 192, 0) rgb(16, 174, 255);
.me{
    .divider {
    height: 0.5rem;
    margin: 0;
    background: rgb(235, 235, 235);
  }
  .myInfo{
      display: flex;
      align-items: center;
      padding: 0.25rem 0 0.25rem 0.5rem;
      img{
          width: 1.875rem;
          height: 1.857rem;
          margin-right: 0.5rem;
      }
      .infoRight{
          display: flex;
          flex-grow: 1;
          justify-content: space-between;
          margin-right: 0.875rem;
          p{
              font-size: 0.5rem
          }
          .iconfont{
              &::before{
                  font-size: 1.625em;
                  color: #ccc
              }
          }
      }
  }
  @for $i from 1 through 6 {
    & .item:nth-of-type(#{$i}) {
      span:nth-child(1) {
        color: nth($meColors, $i);
        margin: 0 0.5rem;
        &::before{
            font-size: 0.75rem
        }
      }
    }
  }
  .item{
      border-bottom: 1px solid rgb(235, 235, 235);
    height: 1.375rem;
    display: flex;
    align-items: center;
    span {
      &:nth-child(2) {
        font-size: 0.4375rem;
      }
    }
  }
}
</style>
