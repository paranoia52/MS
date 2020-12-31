<template>
  <div class="sidebar">
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :unique-opened="true" background-color="#000033" text-color="#fff" :collapse="isCollapse"
      active-text-color="#fff">
      <el-menu-item @click="changeCollapse" style="text-align: center">
        <i :class="iconname"></i><span>语音房间</span>
      </el-menu-item>
      <template v-for="(item,index) in menuList">
        <el-submenu v-if="item.children" :index="item.path" :key="index">
          <template slot="title">
            <i :class="item.meta.icon" class="paddingR10"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="(child, chinx) in item.children">
            <el-menu-item :index="item.path + '/' + child.path" :key="chinx"
              @click="toMenu(item.path)">
              {{ child.meta.title }}
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="item.path" :key="index" @click="toMenu(item.path)">
          <i :class="item.meta.icon" class="paddingR10"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import router from "@/router/index";
export default {
  data() {
    return {
      isCollapse: false,
      iconname: "el-icon-s-fold",
      menuList: [], // 根据路由配置显示的菜单列表
    };
  },
  created() {
    router.options.routes.forEach((element) => {
      if (element.path === "/admin") {
        this.menuList = element.children;
      }
    });
    // console.log(this.menuList);
  },
  methods: {
    toMenu(path) {
      this.$router.push(path);
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.iconname = "el-icon-s-unfold";
      } else {
        this.iconname = "el-icon-s-fold";
      }
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
      this.$router.push(key);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.sidebar {
  height: 100%;
  text-align: left;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 160px;
    min-height: 100vh;
  }
  .el-submenu .el-menu-item {
    min-width: 160px;
  }
  .el-menu-item.is-active {
    background-color: #0066cc !important;
  }
  .paddingR10 {
    margin-right: 10px;
    font-size: 20px;
  }
}
</style>