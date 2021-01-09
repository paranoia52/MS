<template>
  <div class="role">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">
        <el-button type="primary" size="small" :disabled="false"
          @click="updateform={Menu: []};showAdd = true">
          新增
        </el-button>
        <el-button type="danger" size="small" :disabled="false">
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
    <el-table :data="tableData" border size="small" ref="multipleTable" style="width: 100%">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column align="center" prop="id" label="ID"></el-table-column>
      <el-table-column align="center" prop="RoleName" label="权限方案"></el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">
          <span>{{scope.row.aa || '大海'}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Intro" label="操作">
        <template slot-scope="scope">
          <el-link type="primary" @click="operation(scope.row)">修改</el-link>
          <el-link type="danger" @click="del(scope.row)" style="margin:0 30px;">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加角色 -->
    <el-dialog title="新增权限方案" :visible.sync="showAdd" width="57%" height="500px">
      <AddRole @cancel="showAdd = false;" @save="showAdd = false;getData()"
        :updateform="updateform" />
    </el-dialog>
    <!-- 删除角色 -->
    <el-dialog title="提示" :visible.sync="showDel" width="30%">
      <span>确定删除角色？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showDel = false">取 消</el-button>
        <el-button type="primary" @click="confirmDel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import AddRole from "./child/AddRole";
import { GetRole, DelRole } from "@/http/api";
export default {
  components: {
    AddRole,
  },
  data() {
    return {
      showAdd: false,
      showDel: false,
      tableData: [],
      query: {
        Keyword: "",
      },
      updateform: {},
      keyType: 0,
      delId: 0,
    };
  },
  methods: {
    operation(value) {
      this.updateform = value;
      this.showAdd = true;
    },
    search() {
      console.log("search");
    },
    getData() {
      GetRole().then((res) => {
        console.log(res);
        if (res.code == 0 && res.data.length) {
          res.data.forEach((element) => {
            element.Menu = element.Menu.split(",");
          });
          this.tableData = res.data;
        }
      });
    },
    del(value) {
      this.delId = value.id;
      this.showDel = true;
    },
    confirmDel() {
      DelRole({ id: this.delId }).then((res) => {
        this.$message(res.msg);
        this.showDel = false;
        this.getData();
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="less" scoped>
.role {
  text-align: left;
  .header {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
}
</style>