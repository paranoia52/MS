<template>
  <div class="login">
    <div id="root">
      <!-- 流星雨效果 -->
      <div id="stars">
        <div class="star" style="top: 0px;left: 500px;"></div>
      </div>
      <!-- 登录表单 -->
      <div class="form">
        <h2>芝麻开门</h2>
        <div>
          <span>账号： </span>
          <input type="text" v-model="query.UserName">
        </div>
        <div>
          <span>密码： </span>
          <input type="password" v-model="query.PassWord">
        </div>
        <div class="submit">
          <span @click="login">登录</span>
          <span>注册</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Login } from "@/http/api.js";
export default {
  data() {
    return {
      query: {
        UserName: "",
        PassWord: "",
      },
    };
  },
  methods: {
    login() {
      Login(this.query).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      var stars = document.getElementById("stars");
      // js随机生成流星
      for (var j = 0; j < 20; j++) {
        var newStar = document.createElement("div");
        newStar.className = "star";
        newStar.style.top = randomDistance(100, -100) + "px";
        newStar.style.left = randomDistance(2000, 500) + "px";
        stars.appendChild(newStar);
      }
      // 封装随机数方法
      function randomDistance(max, min) {
        var distance = Math.floor(Math.random() * (max - min + 1) + min);
        return distance;
      }
      var star = document.getElementsByClassName("star");
      // 给流星添加动画延时
      for (var i = 0, len = star.length; i < len; i++) {
        star[i].style.animationDelay = i % 6 == 0 ? "0s" : i * 0.8 + "s";
      }
    });
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  #root {
    // background: url("../../assets/img/bg.jpg") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: calc(100% - 250px);
    color: #fff;
    text-align: center;
    padding-top: 250px;
    .form {
      width: 250px;
      margin: 0px auto;
      background: rgba(0, 0, 0, 0.6);
      padding: 0 100px 30px;
      position: relative;
      z-index: 2;
      h2 {
        padding: 20px 0 50px;
      }
      input {
        outline-style: none;
        padding: 0 10px;
      }
      > div {
        margin: 10px 0;
      }
      .submit {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        span {
          display: block;
          padding: 5px 20px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          &:hover {
            background: #3a8cff;
          }
        }
      }
    }
    #stars {
      margin: 0 auto;
      max-width: 1600px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      /deep/ .star {
        display: block;
        width: 1px;
        background: transparent;
        position: relative;
        opacity: 0;
        /*过渡动画*/
        animation: star-fall 6s linear infinite;
        -webkit-animation: star-fall 6s linear infinite;
        -moz-animation: star-fall 6s linear infinite;
        &::after {
          content: "";
          display: block;
          border: 0px solid #fff;
          border-width: 0px 90px 2px 90px;
          border-color: transparent transparent transparent
            rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
          /*变形*/
          transform: rotate(-45deg) translate3d(1px, 3px, 0);
          -webkit-transform: rotate(-45deg) translate3d(1px, 3px, 0);
          -moz-transform: rotate(-45deg) translate3d(1px, 3px, 0);
          transform-origin: 0% 100%;
          -webkit-transform-origin: 0% 100%;
          -moz-transform-origin: 0% 100%;
        }
      }
    }
  }
}
@keyframes star-fall {
  0% {
    opacity: 0.5;
    transform: scale(0.5) translate3d(0, 0, 0);
    -webkit-transform: scale(0.5) translate3d(0, 0, 0);
    -moz-transform: scale(0.5) translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-1400px, 1400px, 0);
    -webkit-transform: translate3d(-1400px, 1400px, 0);
    -moz-transform: translate3d(-1400px, 1400px, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1.2) translate3d(-1500px, 1500px, 0);
    -webkit-transform: scale(1.2) translate3d(-1500px, 1500px, 0);
    -moz-transform: scale(1.2) translate3d(-1500px, 1500px, 0);
  }
}
</style>