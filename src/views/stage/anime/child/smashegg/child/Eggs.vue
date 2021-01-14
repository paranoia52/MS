<template>
  <div class="eggs">
    <div class="left" @click="toggleEgg(0)">
      <i :class="{active: !toggle}"></i><span>砸金蛋</span>
    </div>
    <div class="eggs-container" ref="eggcontainer">
      <!-- 金蛋 -->
      <div class="eggs-item">
        <div style="position:relative;">
          <img class="debris3" v-show="egganimation4" src="@/assets/img/smashegg/debris3.png">
          <img class="debris4" v-show="egganimation4" src="@/assets/img/smashegg/debris4.png">
          <img class="debris2" v-show="egganimation4" src="@/assets/img/smashegg/debris2.png">
          <img class="debris5" v-show="egganimation4" src="@/assets/img/smashegg/gift-ribbon.png">
          <img class="debris6" v-show="egganimation4" src="@/assets/img/smashegg/gift-bg.png">
          <img class="debris7" v-show="egganimation4" src="@/assets/img/smashegg/gift-noumenon.png">
          <img class="hammer-img" :class="{active:egganimation2}" v-show="egganimation1"
            src="@/assets/img/smashegg/hammer.png">
          <img class="debris1" v-show="egganimation3 && !egganimation4"
            src="@/assets/img/smashegg/debris1.png">
          <img class="egg-img" v-show="!egganimation4" src="@/assets/img/smashegg/goldegg.png"
            @click="smash()">
          <img class="bottom-img" src="@/assets/img/smashegg/pedestal.png">
        </div>
      </div>
      <!-- 银蛋 -->
      <div class="eggs-item">
        <div style="position:relative;">
          <img class="debris3 debsli" v-show="egganimation4"
            src="@/assets/img/smashegg/debris3.png">
          <img class="debris4 debsli" v-show="egganimation4"
            src="@/assets/img/smashegg/debris4.png">
          <img class="debris2 debsli" v-show="egganimation4"
            src="@/assets/img/smashegg/debris2.png">
          <img class="debris5" v-show="egganimation4" src="@/assets/img/smashegg/gift-ribbon.png">
          <img class="debris6" v-show="egganimation4" src="@/assets/img/smashegg/gift-bg.png">
          <img class="debris7" v-show="egganimation4" src="@/assets/img/smashegg/gift-noumenon.png">
          <img class="hammer-img" :class="{active:egganimation2}" v-show="egganimation1"
            src="@/assets/img/smashegg/hammer2.png">
          <img class="debris1 debsli" v-show="egganimation3 && !egganimation4"
            src="@/assets/img/smashegg/debris1.png">
          <img class="egg-img" v-show="!egganimation4" src="@/assets/img/smashegg/silveregg.png"
            @click="smash()">
          <img class="bottom-img" src="@/assets/img/smashegg/pedestal.png">
        </div>
      </div>
    </div>
    <div class="right" @click="toggleEgg(1)">
      <span>砸银蛋</span><i :class="{active: toggle}"></i>
    </div>
    <!-- 获得礼物弹窗 -->
    <Popup v-model="showResult">
      <div class="popup-wrapper">
        <div class="Result">
          <p>
            恭喜获得 香槟X75、金蛋X23、泡泡枪X1、甜蜜屋X1。
          </p>
          <div class="button">
            <span @click="showResult=false;">确认</span>
          </div>
        </div>
      </div>
    </Popup>
  </div>
</template>
<script>
import { debounce } from "@/tool/filter";
import Popup from "@/components/Popup";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      egganimation1: false, // 控制动画
      egganimation2: false,
      egganimation3: false,
      egganimation4: false,
      showResult: false, // 显示砸蛋结果的弹窗
      toggle: 0, // 切换金蛋银蛋的
    };
  },
  methods: {
    smash(type) {
      let step = 1;
      this.egganimation1 = true;
      const timer = setInterval(() => {
        if (step == 1) {
          this.egganimation2 = true;
          step++;
          return;
        }
        if (step == 2) {
          this.egganimation2 = false;
          this.egganimation3 = true;
          step++;
          return;
        }
        if (step == 3) {
          this.egganimation4 = true;
          step++;
          return;
        }
        if (step == 4) {
          setTimeout(() => {
            this.showResult = true;
          }, 800);
          step++;
          return;
        }
        if (step > 4) {
          clearInterval(timer);
          return;
        }
      }, 500);
    },
    toggleEgg(index) {
      // 已经砸蛋了 不允许切换
      if (
        this.egganimation1 ||
        this.egganimation2 ||
        this.egganimation3 ||
        this.egganimation4
      ) {
        return;
      }
      this.toggle = index;
      if (index) {
        this.$refs.eggcontainer.style = "transform: translateX(-50%);";
      } else {
        this.$refs.eggcontainer.style = "transform: translateX(0);";
      }
      this.$emit("toggle", index);
    },
    init() {
      this.egganimation1 = false;
      this.egganimation2 = false;
      this.egganimation3 = false;
      this.egganimation4 = false;
    },
  },
  watch: {
    showResult(val) {
      if (!val) {
        this.init();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.eggs {
  height: 250px;
  width: 100%;
  position: relative;
  letter-spacing: 16px;
  font-size: 18px;
  text-shadow: -1.5px 0px 0px #ff9600;
  z-index: 4;
  .eggs-container {
    width: 200%;
    display: flex;
    transition: 0.5s;
    .eggs-item {
      width: 50%;
      .egg-img {
        display: block;
        margin: 0 auto;
        width: 127px;
        height: 161px;
        z-index: 1;
        position: relative;
      }
      .bottom-img {
        margin-top: -32px;
      }
      .hammer-img {
        width: 60px;
        height: 75px;
        position: absolute;
        left: 200px;
        top: -20px;
        z-index: 6;
        transform: rotate(40deg);
        transition: 0.01s;
        transform-origin: 100% 100%;
        &.active {
          transform: rotate(0);
        }
      }
      .debris1 {
        position: absolute;
        width: 125px;
        height: 103px;
        left: 33%;
        z-index: 5;
      }
      .debris2 {
        position: relative;
        z-index: 4;
        display: block;
        margin: 0 auto;
        width: 127px;
        height: 102px;
        padding-top: 59px;
      }
      .debris3 {
        position: absolute;
        width: 68px;
        height: 62px;
        left: 33%;
        z-index: 5;
        animation: toleft 1s forwards;
      }
      .debris4 {
        position: absolute;
        width: 100px;
        height: 106px;
        left: 42%;
        top: -35px;
        z-index: 5;
        animation: toright 1s forwards;
      }
      .debris5 {
        position: absolute;
        width: 355px;
        height: 140px;
        top: 33px;
      }
      .debris6 {
        position: absolute;
        width: 104px;
        height: 104px;
        left: 35%;
        top: 0;
        z-index: 7;
        animation: scalc 2s forwards;
      }
      .debris7 {
        position: absolute;
        width: 68px;
        height: 68px;
        left: 40%;
        top: 10px;
        z-index: 7;
        animation: scalc 2s forwards;
      }
      .debsli {
        filter: grayscale(1);
      }
    }
  }
  i {
    display: block;
    width: 19px;
    height: 33px;
    transform: translateY(80%);
    position: relative;
  }
  .left {
    -webkit-writing-mode: vertical-rl; // 文字竖排
    writing-mode: vertical-rl;
    position: absolute;
    left: 12px;
    top: 63px;
    z-index: 10;
    i {
      background: url("../../../../../../assets/img/smashegg/toleft.png")
        no-repeat;
      background-size: 100% 100%;
      left: 14px;
      &.active {
        filter: grayscale(1);
      }
    }
  }
  .right {
    -webkit-writing-mode: vertical-rl; // 文字竖排
    writing-mode: vertical-rl;
    position: absolute;
    top: 63px;
    right: 12px;
    z-index: 20;
    i {
      background: url("../../../../../../assets/img/smashegg/toright.png")
        no-repeat;
      background-size: 100% 100%;
      right: 14px;
      &.active {
        filter: grayscale(1);
      }
    }
  }
  .popup-wrapper {
    width: 280px;
    height: 180px;
    background-image: radial-gradient(#ffda48, #ffda48, #ffe788);
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    .Result {
      letter-spacing: 1px;
      height: 100%;
      p {
        font-size: 16px;
        padding: 35px 15px;
        color: #333;
        text-shadow: none;
      }
      .button {
        span {
          display: inline-block;
          width: 75px;
          height: 33px;
          line-height: 35px;
          margin: 5px 20px;
          border-radius: 75px;
          background: #ff9d2b;
          box-shadow: 0px 3px 1px #fff;
          color: #fff;
        }
      }
    }
  }
  @keyframes toleft {
    0% {
      transform: translateX(0) rotate(0);
    }
    100% {
      transform: translateX(-30px) rotate(-30deg);
    }
  }
  @keyframes toright {
    0% {
      transform: translateX(0) translateY(0) rotate(0);
    }
    100% {
      transform: translateX(30px) translateY(-20px) rotate(20deg);
    }
  }
  @keyframes scalc {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2);
    }
  }
}
</style>