<template>
  <div class="admin">
    <el-container>
      <el-aside width="auto" class="sidebar">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <el-tabs class="tabs" v-model="activeName" type="card" closable
            @tab-click="addTabsClick(activeName)" @tab-remove="removeTab">
            <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.title"
              :name="item.name">
            </el-tab-pane>
          </el-tabs>
          <transition name="el-fade-in-linear" mode="out-in">
            <keep-alive>
              <router-view :key="key" />
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Menu from "./Menu";
import Header from "./Header";
export default {
  components: {
    Menu,
    Header,
  },
  data() {
    return {
      tabList: [],
      activeName: "",
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  watch: {
    "$route.path": {
      handler: function (val) {
        if (
          !this.tabList.length ||
          this.tabList.every((item) => item.path != this.$route.path)
        ) {
          this.tabList.push({
            title: this.$route.meta.title,
            name: this.$route.path.replace("/", ""),
            path: this.$route.path,
          });
        }
        this.activeName = this.$route.path.replace("/", "");
      },
      immediate: true, // 页面初始化执行一次
    },
  },
  methods: {
    removeTab(val) {
      if (this.tabList.length > 1) {
        this.tabList.splice(
          this.tabList.findIndex((i) => i.name == val),
          1
        );
        // this.$router.go(-1);
      }
    },
    addTabsClick(val) {
      console.log(val);
      this.$router.push(
        this.tabList[this.tabList.findIndex((i) => i.name == val)].path
      );
    },
  },
};
</script>
<style lang="less" scoped>
.admin {
  // height: 100%;
  .el-header,
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 70px;
    height: 70px !important;
  }
  .el-main {
    min-width: 1150px;
    background-color: #f2f2f2;
    color: #ddd;
    min-height: calc(100vh - 70px);
    .tabs {
      background-color: #fff;
    }
  }
  .el-main::-webkit-scrollbar {
    height: 1px;
    width: 1px; /*滚动条宽度*/
    background-color: #fff;
  }
  /deep/.el-tabs__header {
    margin: 0;
  }
  /deep/.tableShadow {
    margin: 0;
  }
  /deep/.tableBtn {
    margin: 0;
  }
}
</style>