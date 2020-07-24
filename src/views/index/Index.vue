<template>
  <div class="index">
    <div class="index-head">
      <div style="width:70%;margin:0 auto;top:20px;position:relative;">
        <div>2020-7-24 星期五</div>
        <div></div>
      </div>
    </div>
    <!-- 导航 -->
    <div class="index-nav">
      <ul>
        <li
          v-for="i in 5"
          :key="i"
          :class="{active: i === cur_nav}"
          @click="changeNav(i)"
        >{{['','首页','随笔','旅行','书屋','壁纸','音乐'][i]}}</li>
      </ul>
    </div>
    <!-- 11111111 -->
    <div style="height: calc(100vh - 240px);">1</div>
    <!-- 底部 -->
    <div style="text-align:center;color:#999;font-size:12px;padding-bottom:4px">
      <div style="padding-bottom:4px">Copyright © 2020</div>
      <div>www.yezismile.com All rights reserved. 京ICP备15029736号-1</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // Banner
  },
  data() {
    return {
      bannerList: [],
      cur_nav: 1
    }
  },
  methods: {
    changeNav(i) {
      this.cur_nav = i
    },
    handleSwiperClick() { }
  },
  created() {
    this.bannerList = [
      {
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1919596378,1921295715&fm=26&gp=0.jpg'
      },
      {
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=11823439,454794708&fm=26&gp=0.jpg'
      },
      {
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1919596378,1921295715&fm=26&gp=0.jpg'
      },
      {
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=11823439,454794708&fm=26&gp=0.jpg'
      }
    ]
  }

}
</script>

<style lang="less" scoped>
.index {
  .index-head {
    height: 150px;
    background: url("https://images.anime-pictures.net/e9d/e9d7ab1b4a28a4c48107ab7a3c4206b7.jpg?if=ANIME-PICTURES.NET_-_655633-1920x1080-summer+pockets-naruse+shiroha-tagme+%28artist%29-long+hair-single-highres.jpg");
    // background-size: 100% 100%;
  }
  .index-nav {
    background: linear-gradient(to right, #cebe9f, #bfab86);
    ul {
      width: 70%;
      margin: 0 auto;
      color: #fff;
      display: flex;
      line-height: 50px;
      font-size: 20px;
      li {
        padding: 0 20px;
      }
      .active {
        background: #f2eada;
        color: #333;
      }
    }
  }
}
</style>