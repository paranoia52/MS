<template>
  <div class="role">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">
        <el-button type="danger" size="small" :disabled="false"
          @click="updateform={RoleName: '',Intro: '',Menu: []};showAdd = true">
          新增
        </el-button>
        <el-button type="primary" size="small" :disabled="false">
          删除
        </el-button>
      </div>
      <div class="header-right">
        <span style="margin: 0 10px;font-size:16px;color:#333;">搜索条件</span>
        <el-select v-model="keyType" size="small" style="width:150px" placeholder="请选择">
          <el-option v-for="item in [{value:0,label:'ID'}]" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="query.Keyword" placeholder="请输入内容" size="small"
          style="width:200px;margin: 0 10px;"></el-input>
        <el-button type="primary" size="small" @click="search">搜索</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" border size="small" ref="multipleTable"
      @selection-change="handleSelection" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column align="center" prop="id" label="ID"></el-table-column>
      <el-table-column align="center" prop="RoleName" label="权限方案"></el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          <span>{{scope.row.aa || '大海'}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Intro" label="操作">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="operation(scope.row)">修改</el-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加角色 -->
    <el-dialog title="新增权限方案" :visible.sync="showAdd" width="57%" height="500px">
      <AddRole @cancel="showAdd = false;updateform={}" :updateform="updateform" />
    </el-dialog>
  </div>
</template>
<script>
import AddRole from "./child/AddRole";
import { GetRole } from "@/http/api";
export default {
  components: {
    AddRole,
  },
  data() {
    return {
      showAdd: false,
      tableData: [],
      query: {
        Keyword: "",
      },
      updateform: {},
      keyType: 0,
    };
  },
  methods: {
    operation(value) {
      this.updateform = value;
      console.log(this.updateform);
      this.showAdd = true;
    },
    search() {
      console.log("search");
    },
    handleSelection() {
      console.log("handleSelection");
    },
    getData() {
      GetRole().then((res) => {
        if (res.code == 0 && res.data.length) {
          res.data.forEach((element) => {
            element.Menu = element.Menu.split(",");
          });
          this.tableData = res.data;
          console.log(this.tableData);
        }
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
</style>