<template>
    <div class="discover">
        <p class="divider"></p>
        <div class="item" @click="go('/myCircle')">
            <span class="iconfont icon-pengyouquan"></span>
            <span>朋友圈</span>
        </div>
        <p class="divider"></p>
        <div class="item" @click="go('/scan')">
            <span class="iconfont icon-saoyisao"></span>
            <span>扫一扫</span>
        </div>
        <div class="item" @click="go('/shake')">
            <span class="iconfont icon-yaoyiyao"></span>
            <span>摇一摇</span>
        </div>
        <p class="divider"></p>
        <div class="item" @click="go('/watch')">
            <span class="iconfont icon-kanyikan"></span>
            <span>看一看</span>
        </div>
        <div class="item" @click="go('/search')">
            <span class="iconfont icon-souyisou"></span>
            <span>搜一搜</span>
        </div>
        <p class="divider"></p>
        <div class="item" @click="go('/nearby')">
            <span class="iconfont icon-fujinderen"></span>
            <span>附近的人</span>
        </div>
        <div class="item" @click="go('/bottle')">
            <span class="iconfont icon-piaoliuping"></span>
            <span>漂流瓶</span>
        </div>
        <p class="divider" ></p>
        <div class="item" @click="go('/common/购物')">
            <span class="iconfont icon-gouwu"></span>
            <span>购物</span>
        </div>
        <div class="item" @click="go('/common/游戏')">
            <span class="iconfont icon-youxi"></span>
            <span>游戏</span>
        </div>
        <p class="divider"></p>
        <div class="item" @click="go('/common/小程序')">
            <span class="iconfont icon-xiaochengxu"></span>
            <span>小程序</span>
        </div>
    </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
  name: "Discover",
  methods: {
      goMine(){
          this.setMe(true)
          this.$router.push("/friendCircle")
      },
      go(path){
          this.$router.push(path)
      },
      ...mapMutations(["setMe"])

  }
};
</script>
<style lang="scss">
$disColors: rgb(255, 220, 114) rgb(16, 174, 255) rgb(16, 174, 255)
  rgb(255, 192, 0) rgb(249, 129, 129) rgb(16, 174, 255) rgb(16, 174, 255)
  rgb(249, 129, 129) rgb(10, 186, 8) purple;
.discover {
  .divider {
    height: 0.5rem;
    margin: 0;
    background: rgb(235, 235, 235);
  }
  @for $i from 1 through 10 {
    & .item:nth-of-type(#{$i}) {
      span:nth-child(1) {
        color: nth($disColors, $i);
        margin: 0 0.5rem;
        &::before{
            font-size: 0.75rem
        }
      }
    }
  }
  .item {
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

