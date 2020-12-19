<template>
  <div class="regist">
    <div>
      <span>账号</span>
      <input type="text" v-model="query.UserName" required>
    </div>
    <div>
      <span>密码</span>
      <input type="text" v-model="query.PassWord" required>
    </div>
    <div>
      <span>昵称</span>
      <input type="text" v-model="query.NickName" required>
    </div>
    <div>
      <span>性别</span>
      <label><input type="radio" v-model="query.Sex" value="0">女生</label>
      <label><input type="radio" v-model="query.Sex" value="1">男生</label>
    </div>
    <div>
      <span>年龄</span>
      <select v-model="query.Age">
        <option v-for="i in 100" :key="i" :value="i">{{ i }}</option>
      </select>
    </div>
    <div>
      <span>邀请码</span>
      <input type="text" v-model="query.InviteCode">
    </div>
    <input type="submit" value="提交" @click="submit">
  </div>
</template>
<script>
import { Regist } from "@/http/api.js";
export default {
  data() {
    return {
      query: {
        UserName: "",
        PassWord: "",
        NickName: "",
        Sex: 0,
        Age: 0,
        InviteCode: 0,
      },
    };
  },
  methods: {
    submit() {
      console.log(this.query);
      this.query.InviteCode = +this.query.InviteCode
      Regist(this.query).then(res=>{
        console.log(res);     
        this.$toast(res.msg);
      })
    },
  },
};
</script>