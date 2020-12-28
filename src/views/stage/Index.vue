<template>
  <div class="index">
    <!-- 导航 -->
    <div class="navbar">
      <ul>
        <li v-for="(el,i) in menuList" :key="i" :class="{active: i == menuIndex}"
          @click="menuIndex = i;$router.push(el.path)">
          {{el.meta.title}}</li>
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
import router from "@/router/index";
export default {
  data() {
    return {
      menuList: [],
      menuIndex: 0,
    };
  },
  created() {
    router.options.routes.forEach((element) => {
      if (element.path === "/index") {
        this.menuList = element.children;
      }
    });
    console.log(this.menuList);
  },
};
</script>
<style lang="less" scoped>
.index {
  .navbar {
    // height: 44px;
    background-color: rgb(247, 241, 241);
    height: 1px;
    // background: linear-gradient(90deg, #000 0, #f1bf48 40%, #066dab);
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
        color: #999;
        font-size: 18px;
      }
    }
  }
  .main {
    // min-height: calc(100vh - 80px);
    min-height: 100vh;
    width: 99%;
    margin: 0 auto;
  }
}
</style>