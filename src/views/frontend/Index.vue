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
  },
};
</script>
<style lang="less" scoped>
.index {
  .navbar {
    height: 44px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    ul {
      width: 80%;
      margin: 0 auto;
      color: #DDD;
      display: flex;
      line-height: 44px;
      li {
        padding: 0 20px;
        cursor: pointer;
      }
      .active {
        color: #ccc;
        font-size: 18px;
      }
    }
  }
  .main {
    min-height: calc(100vh - 80px);
    width: 99%;
    margin: 0 auto;
  }
}
</style>