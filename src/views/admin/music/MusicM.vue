<template>
  <div class="userm">
    <!-- 头部 -->
    <div class="header">
      <div class="header-left">
        <el-button type="danger" size="small" :disabled="false" @click="showAdd = true">
          上传歌曲
        </el-button>
        <el-button type="primary" size="small" :disabled="false">
          删除
        </el-button>
      </div>
      <div class="header-right">
        <span style="margin: 0 10px;font-size:16px;color:#333;">搜索条件</span>
        <el-select v-model="query.KeyType" size="small" style="width:150px" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="query.Keyword" placeholder="请输入内容" size="small" style="width:200px;margin: 0 10px;">
        </el-input>
        <el-button type="primary" size="small" @click="search">搜索</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" border size="small" ref="multipleTable" v-loading="loading"
      @selection-change="handleSelection" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column align="center" prop="Title" label="歌曲名称"></el-table-column>
      <el-table-column align="center" prop="Author" label="演唱者"></el-table-column>
      <el-table-column align="center" label="歌词">
        <template slot-scope="scope">
          <span>{{scope.row.Lyric ? 1:2}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="封面">
        <template slot-scope="scope">
          <img :src="scope.row.Cover" alt="">
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Phone" label="修改时间">
        <template slot-scope="scope">
          {{ formatTimeUTC(scope.row.CreateTime) }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作者">
        <template slot-scope="scope">
          <span>{{scope.row.aa || '大海666'}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="Note" label="操作">
        <template slot-scope="scope">
          <el-link type="primary" :underline="false" @click="operation(scope.row)">修改</el-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加歌曲 -->
    <AddMusic :visible="showAdd" @cancel="showAdd = false" />
  </div>
</template>
<script>
import { GetMusic } from "@/http/api.js";
import { formatTimeUTC } from "@/tool/filter";
import AddMusic from "./child/AddMusic";
export default {
  components: {
    AddMusic,
  },
  data() {
    return {
      query: {
        Type: 0, // 0是全部  1是热门  2是国语  3日语
        Keyword: "", // 关键字搜索
      },
      options: [
        {
          value: 0,
          label: "歌曲名称",
        },
        {
          value: 1,
          label: "演唱者",
        },
        {
          value: 2,
          label: "上传者",
        },
      ],
      tableData: [], // 列表数据
      loading: false,
      selectList: [], // 选中的用户列
      // 编辑用户信息
      showAdd: false,
    };
  },
  methods: {
    formatTimeUTC,
    handleSelection(val) {
      this.selectList = val;
    },
    operation(val) {},
    // 条件查询
    search() {
      this.inquire();
    },
    // 获取数据
    inquire() {
      GetMusic(this.query).then((res) => {
        console.log(res);
        this.tableData = res.data;
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