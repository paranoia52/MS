<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in levelList" :key="item">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <span style="margin-right: 20px;">{{ nowDate }}</span>
      <span>登录账号：</span>
      <el-link type="primary" :underline="false" style="margin-right: 20px;">{{ userName }}
      </el-link>
      <el-link type="danger" :underline="false" @click="handleLogout">退出</el-link>
    </div>
  </div>
</template>
<script>
import { formatTime } from "@/tool/filter.js";
export default {
  data() {
    return {
      nowDate: "",
      levelList: [],
      userName: "admin",
      timer: null,
    };
  },
  methods: {
    handleLogout() {
      this.$router.push("/login");
      sessionStorage.removeItem("token");
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.nowDate = formatTime(new Date().getTime());
    }, 1000);
  },
  watch: {
    $route: function (value) {
      this.levelList = [];
      for (let i of this.$route.matched) {
        this.levelList.push(i.meta.title);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>