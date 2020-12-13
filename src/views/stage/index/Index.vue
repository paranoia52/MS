<template>
  <div class="index">
    <!-- 导航 -->
    <div class="navbar">
      <ul>
        <li v-for="(el,i) in navList" :key="i" :class="{active: i == navIndex}"
          @click="navIndex = i;$router.push(el.path)">
          {{el.title}}</li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div style="font-size:12px;padding:8px 0;height:20px">
      <div>Copyright © 2020</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: "动画", path: "/anime" },
        { title: "壁纸", path: "/wallpaper" },
        { title: "音乐", path: "/music" },
        { title: "书屋", path: "/book" },
      ],
      navIndex: 0,
    };
  },
};
</script>
<style lang="less" scoped>
.index {
  .navbar {
    height: 44px;
    background-color: #000;
    background: linear-gradient(90deg, #000 0, #f1bf48 40%, #066dab);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    ul {
      width: 80%;
      margin: 0 auto;
      color: #aaa;
      display: flex;
      line-height: 44px;
      li {
        padding: 0 20px;
        cursor: pointer;
      }
      .active {
        color: rgba(255, 255, 255, 0.9);
        font-size: 18px;
      }
    }
  }
  .main {
    min-height: calc(100vh - 80px);
    width: 80%;
    margin: 0 auto;
  }
}
</style>