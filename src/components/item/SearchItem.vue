<template>
    <div class="searchItem">
        <div class="searchTop">
            <span class="iconfont icon-fanhui back" @click="goBack"></span>
            <div class="topRight">
                <input type="text" :placeholder="placeHolder" v-model="number" @input="notExist=false">
                <span class="iconfont icon-guanbi" v-if="number!=''" @click="clear"></span>
            </div>
            
        </div>
        <div class="link" v-if="number!=''" @click="search">
            <span class="iconfont icon-xindepengyou2"></span>
            搜索：
            <span>{{number}}</span>
        </div>
        <div class="notExist" v-if="notExist">账户不存在</div>
    </div>
</template>
<script>
import axios from "axios"
import {mapMutations,mapState} from "vuex"
export default {
  name: "SearchItem",
  data: function() {
    return {
      placeHolder: "",
      number:'',
      notExist:false
    };
  },
  computed:{
      ...mapState(["userInfo"])
  },
  methods: {
    clear(){
        this.number=""
    },
    goBack() {
      this.$router.go(-1);
    },
    ...mapMutations(['setSearch',"setFriend"]),
    search(){
        let filter=this.userInfo.friends.filter((friend)=>friend.number===parseInt(this.number))
        console.log(filter)
        if(filter.length!==0){
            this.setFriend(...filter)
            this.$router.push("/friendDetail")
        }else{
            let fd=new FormData();
            fd.append("number",this.number)
            axios.post("http://localhost:3000/search",fd).then((res)=>{
                if(res.data==="not_exist"){
                    this.number=""
                    this.notExist=true
                }else{
                    this.notExist=false;
                    this.setSearch(res.data)
                    this.$router.push("/result")
                }
            })
        }
        
    }
  },

  created() {
    this.placeHolder =
      this.$router.searchChoice === 1 ? "微信号/QQ号/手机号" : "公众号";
  }
};
</script>
<style lang="scss">
.searchItem {
  padding-top: 0.25rem;
  .searchTop {
    display: flex;
    align-items: center;
    
    .back {
      margin-left: 0.375rem;
    }
    .topRight {
      display: flex;
      flex-grow: 1;
      margin: 0 0.375rem;
      border-bottom: 1px solid #46c01b;
      input {
        flex-grow: 1;
        border: none;
        outline: none;
        font-size: 0.375rem;
      }
      .iconfont{
          font-size: 0.375rem
      }
    }
  }
  .link{
      height: 1.875rem;
      margin-top: 0.25rem;
      display: flex;
      align-items: center;
      .iconfont{
          margin: 0 0.375rem;
          &::before{
              font-size: 1.375rem;
              color: rgb(43, 162, 69)
          }
          
      }
      span:nth-child(2){
          color: #46c01b
      }
  }
  .notExist{
      margin-top: 0.5rem;
      height: 1.375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.5rem
  }
}
</style>
