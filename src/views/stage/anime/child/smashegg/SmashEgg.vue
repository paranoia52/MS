<template>
  <div class="smash-egg"
    :style="{backgroundImage:'url('+require('@/assets/img/smashegg/bg.png')+')'}">
    <!-- 跑马灯 -->
    <div class="notice">
      <Notice :sendVal='notice' />
    </div>
    <!-- 规则奖池榜单  -->
    <div class="rules">
      <div v-for="(item,i) in ['本期奖池','中奖记录','活动规则','每日榜单']" :key="i" @click="openDialog(i)">
        {{ item }}
      </div>
    </div>
    <!-- 弹窗 -->
    <Popup v-model="showDialog">
      <div class="popup-wrapper">
        <div class="title">{{ ['本期奖池','中奖记录','活动规则','每日榜单'][dialogIndex] }}</div>
        <Jackpot v-if="dialogIndex == 0" />
        <WinRecord v-else-if="dialogIndex == 1" />
        <ActiveRule v-else-if="dialogIndex == 2" />
        <DailyList v-else-if="dialogIndex == 3" />
      </div>
    </Popup>
    <!-- 金蛋 -->
    <Eggs @toggle="toggle" />
    <!-- 砸蛋选项 -->
    <div class="option">
      <div style="display:flex;align-items:center;">
        <div style="flex:1;">
          <img v-if="eggindex==0" style="width:21px;height:25px;"
            src="@/assets/img/smashegg/hammer.png">
          <img v-else style="width: 21px;height: 25px;" src="@/assets/img/smashegg/hammer2.png">
          <span>{{['金锤','银锤'][eggindex]}}：{{ balance.hammer }}/{{ smashQuery.count }}</span>
        </div>
        <div style="flex:1;">
          <img style="width: 21.5px;height: 17px;" src="@/assets/img/smashegg/diamond.png" alt="">
          <span>钻石：{{ balance.diamond }}</span>
        </div>
      </div>
      <div class="evenopen">
        <div v-for="(item,i) in [1,10,100]" :key="i">
          <span @click="smashQuery.count = item">{{ item }}连开</span>
        </div>
      </div>
      <div class="tryluck">
        <span @click="showBuy = true">试试手气</span>
      </div>
    </div>
    <!-- 购买锤子弹窗 -->
    <Popup v-model="showBuy">
      <div class="buyhammer">
        <div style="margin:20px auto 10px;display:flex;justify-content:Center;">
          <img v-if="eggindex==0" src="@/assets/img/smashegg/hammer.png">
          <img v-else src="@/assets/img/smashegg/hammer2.png">
          <span style="text-shadow:1px 1px 1px #9B372B;color:#fff;">
            {{['金锤子','银锤子'][eggindex]}}
          </span>
        </div>
        <div class="count">
          <span>数量</span>
          <div class="diamond-inp">
            <span style="left:13px;top:-1px;" @click="buyHammerCount-- ">-</span>
            <input v-model="buyHammerCount" type="number">
            <span style="right:10px;top:-1px;" @click="buyHammerCount++">+</span>
          </div>
        </div>
        <div class="count">
          <span>价格</span>
          <div> {{ buyHammerCount * hammerPrice }} 钻
            <img class="pricediamond" src="@/assets/img/smashegg/diamond.png">
          </div>
        </div>
        <div class="button">
          <span @click="showBuy = false">取消</span>
          <span @click="confirmBuy" class="active">确认</span>
        </div>
      </div>
    </Popup>
    <!-- 余额不足弹窗 -->
    <Popup v-model="showRecharge">
      <div class="buyhammer">
        <p style="padding: 50px 0;">
          余额不足，请充值！
        </p>
        <div class="button">
          <span @click="showRecharge = false">取消</span>
          <span class="active">确认</span>
        </div>
      </div>
    </Popup>
  </div>
</template>
<script>
import Notice from "@/components/Notice";
import Popup from "@/components/Popup";
import ActiveRule from "./child/ActiveRule";
import WinRecord from "./child/WinRecord";
import Jackpot from "./child/Jackpot";
import DailyList from "./child/DailyList";
import Eggs from "./child/Eggs";
export default {
  components: {
    Notice,
    Popup,
    ActiveRule,
    WinRecord,
    Jackpot,
    DailyList,
    Eggs,
  },
  data() {
    return {
      // 跑马灯数据
      notice: [
        "恭喜冬冬获得 抱抱熊 10个！",
        "恭喜嘻嘻获得 小天鹅 15个！",
        "恭喜喃喃获得 天女 20个！",
        "恭喜贝贝获得 许愿流星 25个！",
      ],
      showDialog: false, // 显示 奖池 规则 记录 榜单的弹窗
      showBuy: false, // 购买锤子弹窗
      showRecharge: false, // 提示充值弹窗
      dialogIndex: 0, // 奖池 规则 记录 榜单的index
      buyHammerCount: 1, // 要买的锤子数量
      // 剩余锤子和钻石
      balance: {
        hammer: 10,
        diamond: 100,
      },
      // 砸蛋数量
      smashQuery: {
        count: 1,
      },
      hammerPrice: 50, // 锤子价格
      eggindex: 0, // 0是金蛋 1是银蛋
    };
  },
  methods: {
    // 打开奖池 规则 记录 榜单的弹窗
    openDialog(index) {
      this.dialogIndex = index;
      this.showDialog = true;
    },
    // 确认购买锤子
    confirmBuy() {
      this.showBuy = false;
      if (this.buyHammerCount * this.hammerPrice > this.balance.diamond) {
        this.showRecharge = true;
      } else {
        this.balance.hammer += this.buyHammerCount;
        this.balance.diamond -= this.buyHammerCount * this.hammerPrice;
      }
    },
    // 切换金蛋/银蛋
    toggle(index) {
      this.eggindex = index;
      this.hammerPrice = index ? 30 : 50;
    },
  },
};
</script>
<style lang="less" scoped>
.smash-egg {
  box-sizing: border-box;
  margin: 0 auto;
  width: 375px;
  height: 667px;
  color: #fff;
  background-size: 100% 100%;
  overflow: hidden;
  padding-top: 40px;
  .notice {
    margin-top: 8px;
    .van-notice-bar {
      background: rgba(0, 0, 0, 0.2);
      font-size: 12px;
      height: 25px;
      color: #fff;
    }
  }
  .rules {
    margin-top: 21px;
    text-align: center;
    color: #9b372b;
    font-size: 13px;
    position: relative;
    z-index: 5;
    height: 35px;
    > div {
      width: 75px;
      height: 27px;
      line-height: 30px;
      background: #ffd600;
      position: absolute;
      &:nth-child(1) {
        border-radius: 0 27px 27px 0;
      }
      &:nth-child(2) {
        border-radius: 27px 0 0 27px;
        right: 0;
      }
      &:nth-child(3) {
        border-radius: 0 27px 27px 0;
        top: 40px;
      }
      &:nth-child(4) {
        border-radius: 27px 0 0 27px;
        top: 40px;
        right: 0;
      }
    }
  }
  .option {
    margin-top: 60px;
    text-align: center;
    .evenopen {
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        font-size: 14px;
        border: 1px solid #fff;
        width: 65px;
        margin: 22px 15px 0;
        height: 30px;
        line-height: 33px;
        border-radius: 5px;
        box-shadow: 0px 0px 5px rgba(255, 255, 255);
      }
    }
    .tryluck {
      font-size: 20px;
      color: #9b372b;
      span {
        background: radial-gradient(#ffdb4b, #ffdb4b, #ffe78a);
        margin: 25px auto;
        display: block;
        width: 160px;
        height: 50px;
        line-height: 52px;
        border-radius: 50px;
        box-shadow: 0px 3px 1px #ff9b00;
      }
    }
    img {
      display: inline;
    }
  }
  .popup-wrapper {
    width: 300px;
    height: 350px;
    background-image: radial-gradient(#ffda48, #ffda48, #ffe788);
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    font-size: 12px;
    .title {
      font-size: 22px;
      margin: 15px auto 0;
      letter-spacing: 2px;
      text-shadow: -2px 0px 1px #ff9600;
    }
  }
  .buyhammer {
    width: 280px;
    height: 180px;
    background-image: radial-gradient(#ffda48, #ffda48, #ffe788);
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    font-size: 14px;
    color: #9b372b;
    font-weight: 700;
    position: relative;
    img {
      width: 21px;
      height: 25px;
      margin-right: 10px;
    }
    .count {
      display: flex;
      padding: 8px 15px;
      .diamond-inp {
        width: 140px;
        border: 1px solid #a02e27;
        background: #fef4ce;
        border-radius: 3px;
        position: relative;
        input {
          display: block;
          margin: 0 auto;
          background: #fef4ce;
          width: 50%;
          outline: none;
          border: none;
          border-right: 1px solid #a02e27;
          border-left: 1px solid #a02e27;
          text-align: center;
        }
        span {
          position: absolute;
        }
      }
      > span {
        width: 70px;
      }
      div {
        width: 150px;
        text-align: left;
      }
      .pricediamond {
        display: inline;
        width: 16.5px;
        height: 14px;
        position: relative;
        top: 4px;
        left: 4px;
      }
    }
    .button {
      letter-spacing: 2px;
      span {
        display: inline-block;
        width: 75px;
        height: 33px;
        line-height: 35px;
        margin: 5px 20px;
        border-radius: 75px;
        background: #fff;
        box-shadow: 0px 3px 1px #ff9d2b;
        &.active {
          background: #ff9d2b;
          box-shadow: 0px 3px 1px #fff;
          color: #fff;
        }
      }
    }
  }
}
</style>