<template>
  <div id="app">
    <div class="home">
      <div class="home-head">
        <div style="width:70%;margin:0 auto;top:20px;position:relative;">
          <div>{{date}}</div>
        </div>
      </div>
      <!-- 导航 -->
      <div class="home-nav">
        <ul>
          <li
            v-for="(el,i) in ['首页','音乐','壁纸','书屋']"
            :key="i"
            :class="{active: i === cur_nav}"
            @click="changeNav(i)"
          >{{el}}</li>
        </ul>
      </div>
      <!-- 11111111 -->
      <div style="min-height: calc(100vh - 240px);">
        <router-view></router-view>
      </div>
      <!-- 底部 -->
      <div style="text-align:center;color:#999;font-size:12px;padding-bottom:4px">
        <div style="padding-bottom:4px">Copyright © 2020</div>
        <div>www.yezismile.com All rights reserved. 京ICP备15029736号-1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur_nav: 0,
      date: new Date()
    };
  },
  methods: {
    changeNav(i) {
      this.cur_nav = i;
      this.$router.push(["/index", "/music", "/wallpaper", "/book"][i]);
    }
  }
};
</script>


<style lang="less" scoped>
.home {
  .home-head {
    height: 150px;
    background: url("https://images.anime-pictures.net/e9d/e9d7ab1b4a28a4c48107ab7a3c4206b7.jpg?if=ANIME-PICTURES.NET_-_655633-1920x1080-summer+pockets-naruse+shiroha-tagme+%28artist%29-long+hair-single-highres.jpg");
    // background-size: 100% 100%;
  }
  .home-nav {
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