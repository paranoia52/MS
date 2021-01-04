<template>
  <div class="userm">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">
        <el-button type="primary" size="small" :disabled=" selectList.length ? false : true">
          冻结
        </el-button>
        <el-button type="primary" size="small" :disabled=" selectList.length ? false : true">
          解冻
        </el-button>
        <el-button type="warning" size="small" :disabled=" selectList.length ? false : true">
          清除青少年
        </el-button>
      </div>
      <div class="header-right">
        <el-button type="primary" size="small">重置</el-button>
        <span style="margin: 0 10px;font-size:14px;">搜索条件</span>
        <el-select v-model="query.KeyType" size="small" style="width:150px" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="query.Keyword" placeholder="请输入内容" size="small"
          style="width:200px;margin: 0 10px;"></el-input>
        <el-button type="primary" size="small">查询</el-button>
        <el-button type="primary" size="small">筛选</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" border size="small" ref="multipleTable" v-loading="loading"
      @selection-change="handleSelection" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column align="center" prop="UserId" label="ID">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="toUserDetail">
            {{ scope.row.UserId }}</el-link>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="PrettyUserId" label="稀有ID">
        <template slot-scope="scope">
          <span>{{ scope.row.PrettyUserId || '-' }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="NickName" label="会员昵称">
      </el-table-column>
      <el-table-column align="center" prop="HeadIcon" label="头像">
        <template slot-scope="scope">
          <img v-if="scope.row.HeadIcon" style="width:60px;" :src="scope.row.HeadIcon" alt="">
          <img v-else style="width:60px;" src="@/assets/img/touxiang.png" alt="">
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Phone" label="手机号码">
      </el-table-column>
      <el-table-column align="center" prop="RegisterType" label="注册方式">
        <template slot-scope="scope">
          <span v-if="scope.row.RegisterType">手机注册</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="UserType" label="用户类型">
        <template slot-scope="scope">
          <span v-if="scope.row.UserType == 1">主播</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="IsSuperManage" label="权限">
        <template slot-scope="scope">
          <span v-if="scope.row.IsSuperManage">超管</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="IsSuperManage" label="青少年">
        <template slot-scope="scope">
          <span v-if="scope.row.IsYouthModel">开启</span>
          <span v-else>关闭</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="CreateTime" label="注册时间">
        <template slot-scope="scope">
          {{ scope.row.CreateTime}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="IsOnline" label="在线状态">
        <template slot-scope="scope">
          <span v-if="scope.row.IsOnline">在线</span>
          <span v-else>离线</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Status" label="账号状态">
        <template slot-scope="scope">
          <span v-if="scope.row.Status">正常</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Note" label="操作">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="operation(scope.row)">修改</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { formatTime } from "@/tool/filter";
export default {
  data() {
    return {
      query: {
        KeyType: 1,
        Keyword: "",
      },
      options: [
        {
          value: 1,
          label: "ID",
        },
        {
          value: 2,
          label: "昵称",
        },
      ],
      tableData: [],
      loading: false,
      selectList: [],
    };
  },
  methods: {
    formatTime,
    handleSelection(val) {
      this.selectList = val;
    },
    toUserDetail() {
      console.log("toUserDetail");
    },
    operation() {
      console.log("operation");
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.tableData.push({
        UserId: "3257099",
        PrettyUserId: "",
        NickName: "萌新1927",
        HeadIcon: "",
        Phone: "13125698542",
        RegisterType: "1",
        UserType: 1,
        IsSuperManage: "",
        IsSuperManage: "",
        PhoneBrand: "",
        CreateTime: 13414124,
        IsOnline: true,
        Status: true,
      });
    }
  },
};
</script>
<style lang="less" scoped>
.userm {
  .header {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }
}
</style>