<template>
  <div class="win-record">
    <div class="record-item" v-for="(item,index) in record" :key="index">
      <div>
        <div>{{ item.mode }}</div>
        <div class="time"> {{ formatTime(item.time) }} </div>
      </div>
      <div style="line-height:35px;flex:1;">{{ item.dan }}</div>
      <div class="right">
        <span class="gifticon">
          <img style="width:17px;height:19px;" :src="item.icon" alt="">
          <span>{{ item.price }}钻石</span>
        </span>
        <span>
          X {{ item.count }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { formatTime } from "@/tool/filter";
export default {
  data() {
    return {
      record: [],
      query: {
        pageNo: 1,
      },
      total: 100,
    };
  },
  methods: {
    getData(action) {
      for (let i = 0; i < 20; i++) {
        this.record.push({
          mode: "100 连开",
          time: 1610420339278,
          dan: "金蛋",
          icon: "http://192.168.150.254:3000/upload/玫瑰花@3x.png",
          price: 1,
          count: 66,
        });
      }
    },
    formatTime,
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="less" scoped>
.win-record {
  background: #fcf4d2;
  margin: 15px 25px;
  color: #9b372b;
  text-align: left;
  padding: 15px 10px;
  border-radius: 5px;
  height: 220px;
  overflow-y: auto;
  .record-item {
    display: flex;
    font-weight: 700;
    font-size: 14px;
    height: 35px;
    margin: 10px 0;
    .time {
      transform: scale(0.7);
      position: relative;
      left: -17px;
      top: -3px;
      font-size: 12px;
      font-weight: 500;
    }
    .right {
      display: flex;
      line-height: 37px;
      .gifticon {
        line-height: 18px;
        display: flex;
        flex-direction: column;
        margin-right: -5px;
        span {
          transform: scale(0.8);
          position: relative;
          left: -7px;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>