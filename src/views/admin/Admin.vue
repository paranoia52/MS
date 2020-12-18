<template>
  <div class="admcss" style="height:100%">
    <div class="layout-left" :class="{extend: Opmenu}">
      <ul>
        <li @click="extendmenu">=></li>
        <li v-for="(el,i) in menuList" :key="i" :class="{ pitch: currentMenu === i }"
          @click="$router.push(el.path);currentMenu=i">
          <span>{{ i+1 }}</span>
          <span class="title">{{ el.meta.title }}</span>
          <i class="iconfont">&#xe606;</i>
        </li>
      </ul>
    </div>
    <div class="layout-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import router from "@/router/index";
export default {
  data() {
    return {
      Opmenu: false,
      currentMenu: 0,
      menuList: [],
    };
  },
  created() {
    router.options.routes.forEach((element) => {
      if (element.path === "/admin") {
        this.menuList = element.children;
      }
    });
    console.log(this.menuList);
  },
  methods:{
    extendmenu(){
      this.$toast('消息');
      this.Opmenu = !this.Opmenu
    }
  }
};
</script>
<style lang="less" scoped>
.admcss {
  height: 100%;
  display: flex;
  .layout-left {
    width: 90px;
    height: 100%;
    background: #24292e;
    color: #fff;
    line-height: 50px;
    transition: 0.3s;
    .title{
      display: none;
      padding-left: 10px;
    }
    &.extend {
      width: 200px;
      transition: 0.3s;
      span{
        display: inline;
      }
    }
    .pitch {
      background: #b43934;
    }
  }
  .layout-right{
    margin: 0 50px;
    flex: 1;
  }
}
</style>