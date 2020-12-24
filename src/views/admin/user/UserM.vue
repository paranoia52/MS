<template>
  <div class="userm">
    <div class="top">
      <span>当前 > {{ $route.meta.title }}</span>
      <span style="color:red;cursor: pointer;" @click="logout">退出</span>
    </div>
    <div class="search">
      <div>
        <span>冻结</span>
        <span>解冻</span>
      </div>
      <div>
        <input type="button" value="重置">
        <span></span>
      </div>
    </div>
    <div class="table">
      <div class="table-head">
        <div>[ ]</div>
        <div>ID</div>
        <div>稀有ID</div>
        <div>会员昵称</div>
        <div>头像</div>
        <div>手机号码</div>
        <div>注册方式</div>
        <div>用户类型</div>
        <div>权限</div>
        <div>手机品牌</div>
        <div>注册时间</div>
        <div>在线状态</div>
        <div>账号状态</div>
        <div>备注</div>
        <div>操作</div>
      </div>
      <div class="table-body"></div>
    </div>
    <iframe src="http://192.168.150.254:8081/#/users/userList" height="850" width="1800" />
  </div>
</template>
<script>
import { formatTime } from "@/tool/filter";
export default {
  data() {
    return {};
  },
  methods: {
    formatTime,
    logout() {
      this.$router.push("/login");
      sessionStorage.removeItem("token");
    },
  },
  mounted() {},
  destroyed() {},
};
</script>
<style lang="less" scoped>
.userm {
  position: relative;
  .top {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    // padding: 25px 0;
    justify-content: space-between;
  }
  .search {
    width: 100%;
    position: absolute;
    top: 150px;
  }
  .table {
    position: absolute;
    top: 180px;
    left: 230px;
    width: 100%;
    font-size: 12px;
    .table-head {
      display: flex;
      line-height: 30px;
      font-weight: 700;
      > div {
        width: 100px;
        border: 0.5px solid #ddd;
        border-right: none;
        &:last-child {
          border-right: 0.5px solid #ddd;
        }
      }
    }
  }
}
</style>