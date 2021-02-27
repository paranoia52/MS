<template>
  <div class="addrole">
    <el-tabs type="border-card" key="tabs">
      <el-tab-pane v-for="(item,index) in data" :key="index" :label="menu_title[index]">
        <el-tree v-for="(child,idx) of item" :key="idx" :data="child" :ref="child[0].id"
          :default-checked-keys="updateform.Menu" show-checkbox node-key="id" default-expand-all>
        </el-tree>
      </el-tab-pane>
    </el-tabs>

    <div style="display: flex;justify-content: space-between;margin-top:30px;">
      <el-form :model="updateform" ref="updateform" label-width="100px" class="flex">
        <el-form-item label="方案名称：" prop="RoleName">
          <el-input v-model.trim="updateform.RoleName" clearable size="small">
          </el-input>
        </el-form-item>
        <el-form-item label="备注：" prop="Intro">
          <el-input v-model.trim="updateform.Intro" clearable maxlength="50" size="small">
          </el-input>
        </el-form-item>
      </el-form>
      <div style="margin-top:70px;">
        <el-button size="small" @click="$emit('cancel')">取 消</el-button>
        <el-button type="primary" size="small" @click="handleConfirm">保 存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router/index";
import { AddRole } from "@/http/api";
export default {
  props: {
    updateform: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      data: {},
      menu_title: {},
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  watch: {
    updateform: {
      handler: function (val) {
        if (this.updateform.Menu) {
          for (const i in this.data) {
            for (const j of this.data[i]) {
              this.$refs[j[0].id][0].setCheckedKeys(this.updateform.Menu, true);
            }
          }
        }
      },
      immediate: true, // 页面初始化执行一次
    },
  },
  created() {
    this.filterTree();
  },
  methods: {
    handleConfirm() {
      this.updateform.Menu = [];
      if (this.updateform.RoleName && this.updateform.Intro) {
        let arr = [];
        for (const i in this.data) {
          for (const j of this.data[i]) {
            arr = this.$refs[j[0].id][0].getCheckedKeys(true);
            if (arr.length !== 0) {
              this.updateform.Menu = [].concat(this.updateform.Menu, arr);
            }
          }
        }
        AddRole(this.updateform).then((res) => {
          console.log(res);
          if (res.code == 0) {
            this.updateform = { RoleName: "", Intro: "", Menu: [] };
            this.$emit("save");
          }
          this.$message(res.msg);
        });
      } else {
        this.$message("请填写必要的参数");
      }
    },
    // 路由组装树形图结构
    filterTree() {
      let arr = [];
      let childrenObj = {};
      const routeList = router.options.routes[3].children;
      for (const i in routeList) {
        if (routeList[i].children) {
          arr = [];
          for (const child of routeList[i].children) {
            childrenObj = {
              id: child.path,
              label: child.meta.title,
              children: [
                {
                  id: child.path,
                  label: "查看",
                },
                {
                  id: child.path + "-handle",
                  label: "编辑",
                },
              ],
            };
            // 处理群管理特殊权限
            if (child.meta.specialPower) {
              for (const item in child.meta.specialPower) {
                childrenObj.children.push({
                  id: child.path + "-" + item,
                  label: child.meta.specialPower[item],
                });
              }
            }
            arr.push([childrenObj]);
          }
        } else {
          let path = routeList[i].path.replace(/\//g, "");
          arr.push([
            {
              id: routeList[i].path,
              label: routeList[i].meta.title,
              children: [
                {
                  id: path,
                  label: "查看",
                },
                {
                  id: path + "-handle",
                  label: "编辑",
                },
              ],
            },
          ]);
        }
        let str = routeList[i].path.replace("/", "");
        this.data[str] = arr;
        this.menu_title[str] = routeList[i].meta.title;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.addrole {
  // margin: -30px -20px;
  /deep/.el-tabs__content {
    overflow-x: auto;
  }
  .el-tab-pane {
    display: flex;
    flex-wrap: wrap;
  }
  .el-tree {
    width: 100px;
    min-height: 100px;
    padding-right: 30px;
    border-right: 1px solid #ccc;
  }
}
</style>