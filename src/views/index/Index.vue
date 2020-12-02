<template>
  <div class="index">
    <div class="home">
      <div class="home-head">
      </div>
      <!-- 导航 -->
      <div class="home-nav">
        <ul>
          <li v-for="(el,i) in ['首页','音乐','壁纸','书屋']" :key="i" :class="{active: i === nav_index}"
            @click="changeNav(i)">{{el}}</li>
        </ul>
      </div>
      <div style="min-height: calc(100vh - 240px);">
        <router-view></router-view>
      </div>
      <!-- 底部 -->
      <div style="text-align:center;color:#999;font-size:12px;padding-bottom:4px">
        <div style="padding-bottom:4px">Copyright © 2020</div>
      </div>
    </div>
  </div>
</template>

<script>
import { HeadHtml } from "../../assets/js/head";
export default {
  data() {
    return {
      nav_index: 0,
    };
  },
  created() {
    this.$nextTick(() => {
      HeadHtml();
    });
  },
  methods: {
    changeNav(i) {
      this.nav_index = i;
      this.$router.push(["/index", "/music", "/wallpaper", "/book"][i]);
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  .home-head {
    height: 150px;
    background-image: linear-gradient(to right, #150130, #300078);
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