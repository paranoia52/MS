<template>
  <div class="sidebar">
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :unique-opened="true"
      background-color="#000033" text-color="#ddd" :collapse="isCollapse" active-text-color="#fff" router>
      <el-menu-item @click="changeCollapse">
        <i :class="foldIcon"></i><span></span>
      </el-menu-item>
      <template v-for="(item,index) in menuList">
        <!-- 有子目录的模块菜单 -->
        <el-submenu v-if="item.children" :index="item.path" :key="index">
          <template slot="title">
            <i :class="item.meta.icon" class="paddingR10"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="(child, chinx) in item.children">
            <el-menu-item :index="item.path + '/' + child.path" :key="chinx">
              {{ child.meta.title }}
            </el-menu-item>
          </template>
        </el-submenu>
        <!-- 无子目录的模块菜单 -->
        <el-menu-item v-else :index="item.path" :key="index">
          <i :class="item.meta.icon" class="paddingR10"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
import router from '@/router/index'
import UserMVue from '../user/UserM.vue'
export default {
  data() {
    return {
      isCollapse: false,
      foldIcon: 'el-icon-s-fold',
      menuList: [], // 根据路由配置显示的菜单列表
    }
  },
  created() {
    router.options.routes.forEach((element) => {
      if (element.path === '/backstage') {
        this.menuList = element.children
      }
    })
    // console.log(this.menuList);
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.foldIcon = 'el-icon-s-unfold'
      } else {
        this.foldIcon = 'el-icon-s-fold'
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)    
      // this.$router.push(key)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
}
</script>
<style lang="less" scoped>
.sidebar {
  height: 100vh;
  overflow: auto;
  text-align: center;
  .el-menu-vertical-demo {
    min-height: 100vh;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
  }
  /deep/.el-submenu__title {
    font-size: 18px !important;
  }
  .el-menu-item {
    font-size: 18px;
  }
  .el-menu-item.is-active {
    background-color: #0066cc !important;
  }
  .paddingR10 {
    color: #fff;
    margin-right: 10px;
    font-size: 18px;
  }
}
</style>