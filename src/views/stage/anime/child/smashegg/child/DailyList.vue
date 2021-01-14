<template>
  <div class="daily-list">
    <div class="record-item" v-for="(item,index) in record" :key="index">
      <div style="min-width:22px;">{{ index+1 }}</div>
      <div style="width:35px;">
        <img style="border-radius:50%;height:100%;" :src="item.headicon" alt="">
      </div>
      <div class="name">
        <span>{{ item.nickName }}</span>
        <span class="time">{{ formatTime(item.time) }}</span>
      </div>
      <div class="present">
        <span>{{ item.GoodName }}</span>
        <span class="time">{{ item.price }}钻石</span>
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
          headicon: "http://127.0.0.1:3000/upload/head.jpg",
          time: 1610420339278,
          nickName: "见崎鸣",
          GoodName: "豪华游艇",
          price: 52000,
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
.daily-list {
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
    height: 35px;
    line-height: 35px;
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0;
    .name {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      font-size: 13px;
      line-height: normal;
    }
    .time {
      font-size: 12px;
      width: 60px;
      white-space: nowrap;
      transform: scale(0.7);
      position: relative;
      left: -9px;
      flex: 1;
    }
    .present {
      position: relative;
      left: 45px;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      line-height: normal;
    }
  }
}
</style>