<template>
  <div class="admcss" style="height:100%">
    <div class="layout-left" :class="{extend: Opmenu}">
      <ul>
        <li @click="Opmenu = !Opmenu">
          <i class="iconfont">&#xe630;</i>
          <span v-show="delayshow">语音房间</span>
        </li>
        <li v-for="(el,i) in menuList" :key="i" :class="{ pitch: currentMenu === i }"
          @click="$router.push(el.path);currentMenu=i">
          <i class="iconfont" :class="el.meta.icon"></i>
          <span v-show="delayshow" class="title">{{ el.meta.title }}</span>
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
      Opmenu: false,    // 侧栏的伸缩
      delayshow: false, // 显示标题
      currentMenu: 0,   // 当前菜单
      menuList: [],     // 根据路由配置显示的菜单列表
    };
  },
  created() {
    router.options.routes.forEach((element) => {
      if (element.path === "/admin") {
        this.menuList = element.children;
      }
    });
  },
  watch: {
    Opmenu: function (value) {
      if (value) {
        setTimeout(() => {
          this.delayshow = true;
        }, 300);
      } else {
        this.delayshow = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.admcss {
  height: 100%;
  display: flex;
  font-size: 14px;
  .layout-left {
    width: 56px;
    height: 100%;
    background: #000033;
    color: #fff;
    line-height: 56px;
    transition: 0.3s;
    &.extend {
      width: 180px;
      transition: 0.3s;
    }
    .pitch {
      background: #0066cc;
    }
    ul {
      li {
        position: relative;
        height: 56px;
        i {
          position: absolute;
          left: 20px;
          top: 0;
        }
      }
    }
  }
  .layout-right {
    // margin: 0 50px;
    flex: 1;
  }
}
</style>