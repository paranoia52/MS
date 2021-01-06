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
        <el-button type="warning" size="small" :disabled="false" @click="addUser">
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
        <el-button type="primary" size="small" @click="search">查询</el-button>
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
            {{ '325711' + scope.row.id }}</el-link>
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
          <span v-if="!scope.row.RegisterType">手机注册</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="UserType" label="用户类型">
        <template slot-scope="scope">
          <span v-if="!scope.row.UserType == 1">主播</span>
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
          {{ formatTimeUTC(scope.row.CreateTime) }}
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
          <span v-if="!scope.row.Status">正常</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Signature" label="个性签名"></el-table-column>
      <el-table-column align="center" prop="Note" label="操作">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="operation(scope.row)">修改</el-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination layout="prev, pager, next" :hide-on-single-page="true" :total="total"
      :current-page="query.pageNo" @current-change="changPage">
    </el-pagination>
    <!-- 修改用户数据弹窗 -->
    <SetUserInfo :visible="showUserInfo" :form.sync="UserInfo" @cancel="showUserInfo = false" />
  </div>
</template>
<script>
import { GetUserList, Regist } from "@/http/api.js";
import { formatTimeUTC } from "@/tool/filter";
import SetUserInfo from "./child/SetUserInfo.vue";
export default {
  components: {
    SetUserInfo,
  },
  data() {
    return {
      query: {
        pageNo: 1,
        KeyType: 0, // 0是全部  1是ID  2是昵称
        Keyword: "",
      },
      options: [
        {
          value: 0,
          label: "全部",
        },
        {
          value: 1,
          label: "ID",
        },
        {
          value: 2,
          label: "昵称",
        },
      ],
      tableData: [], // 列表数据
      loading: false,
      selectList: [], // 选中的用户列
      // 编辑用户信息
      showUserInfo: false,
      UserInfo: {},
      total: 10,
    };
  },
  methods: {
    formatTimeUTC,
    handleSelection(val) {
      this.selectList = val;
    },
    // 用户详情
    toUserDetail(val) {
      console.log(val);
    },
    // 编辑用户信息
    operation(val) {
      this.showUserInfo = true;
      this.UserInfo = val;
    },
    // 条件查询
    search() {
      this.query.pageNo = 1;
      this.inquire();
    },
    changPage(val) {
      this.query.pageNo = val;
      this.inquire();
    },
    // 获取数据
    inquire() {
      GetUserList(this.query).then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.total = res.data.total;
        this.query.pageNo = res.data.pageNo;
      });
    },
    // 添加用户
    addUser() {
      const query = {
        UserName: "admin10",
        PassWord: "admin",
        NickName: "vnijianwed",
        Sex: 0,
        Age: 20,
        Signature: "",
        HeadIcon: "",
      };
      Regist(query).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.inquire();
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