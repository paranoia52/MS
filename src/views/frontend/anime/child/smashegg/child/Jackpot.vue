<template>
  <div class="jackpot">
    <div class="gift">
      <div v-for="(item,index) in present" :key="index">
        <img :src="item.icon" alt="">
        <span>{{ item.price }} 钻石</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      present: [
        {
          icon: "http://192.168.150.254:3000/upload/玫瑰花@3x.png",
          price: 10,
        },
        {
          icon: "http://192.168.150.254:3000/upload/么么哒@3x.png",
          price: 20,
        },
        {
          icon: "http://192.168.150.254:3000/upload/香水@3x.png",
          price: 30,
        },
        {
          icon: "http://192.168.150.254:3000/upload/金话筒@3x.png",
          price: 40,
        },
        {
          icon: "http://192.168.150.254:3000/upload/表白@3x.png",
          price: 50,
        },
        {
          icon: "http://192.168.150.254:3000/upload/棒棒糖@3x.png",
          price: 60,
        },
        {
          icon: "http://192.168.150.254:3000/upload/口红@3x.png",
          price: 70,
        },
        {
          icon: "http://192.168.150.254:3000/upload/一箭穿心@3x.png",
          price: 80,
        },
        {
          icon: "http://192.168.150.254:3000/upload/火箭@3x.png",
          price: 90,
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.jackpot {
  background: #fcf4d2;
  margin: 15px 25px;
  color: #9b372b;
  text-align: left;
  padding: 15px 10px;
  border-radius: 5px;
  .gift {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > div {
      width: 33%;
      margin: 5px 0;
      text-align: center;
      img {
        display: block;
        margin: 0 auto 4px;
        width: 44px;
        height: 44px;
      }
      &:nth-child(2) {
        img {
          transform: scale(1.2);
        }
      }
      &:nth-child(5) {
        img {
          transform: scale(1.6);
        }
      }
      &:nth-child(8) {
        img {
          width: 70px;
          transform: scale(0.9);
        }
      }
    }
  }
}
</style>