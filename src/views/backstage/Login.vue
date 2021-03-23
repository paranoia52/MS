<template>
  <div id="root">
    <!-- 流星雨效果 -->
    <div id="stars">
      <div class="star" style="top: 0px;left: 500px;"></div>
    </div>
    <!-- 登录表单 -->
    <el-card style="width:28%;margin:222px auto;" v-if="!isReg">
      <div slot="header">后台管理系统 Beta V1.11.45</div>
      <el-form :model="query" status-icon>
        <el-form-item>
          <el-input prefix-icon="el-icon-user" placeholder="账号" v-model="query.UserName" />
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-lock" placeholder="密码" type="password" v-model="query.PassWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 注册表单 -->
    <el-card style="width:28%;margin:222px auto;" v-else>
      <div slot="header">账号注册</div>
      <el-form :model="regQuery" label-width="55px">
        <el-form-item label="账号：">
          <el-input v-model="regQuery.UserName" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="regQuery.PassWord" />
        </el-form-item>
        <el-form-item label="昵称：">
          <el-input v-model="regQuery.NickName" />
        </el-form-item>
        <el-form-item label="简介：">
          <el-input v-model="regQuery.Signature" />
        </el-form-item>
        <el-form-item label="年龄：">
          <el-input v-model="regQuery.Age" />
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="regQuery.Sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="头像：">
          <el-upload class="avatar-uploader" action="http://127.0.0.1:3000/upload" :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleRegist">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button type="primary" class="btn" @click="isReg = !isReg">切换ip</el-button>
  </div>
</template>
<script>
import { Login, Regist } from '@/http/api.js'
export default {
  data() {
    return {
      query: {
        UserName: '',
        PassWord: '',
      },
      regQuery: {
        UserName: 'qz',
        PassWord: '',
        NickName: '红烛自怜无好计',
        Sex: 1,
        Age: 18,
        Signature: 'cool',
        HeadIcon: 'www.baidu.com',
      },
      isReg: false,
    }
  },
  methods: {
    handleLogin() {
      if (!this.query.UserName || !this.query.PassWord) {
        this.$message.warning('请填写必填项')
        return
      }
      Login(this.query).then((res) => {
        console.log(res)
        if (res.code === 0) {
          sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
        } else {
          this.$message(res.msg)
        }
      })
    },
    handleRegist() {
      if (
        !this.regQuery.UserName ||
        !this.regQuery.PassWord ||
        !this.regQuery.NickName ||
        !this.regQuery.Age ||
        !this.regQuery.Signature ||
        !this.regQuery.HeadIcon
      ) {
        this.$message.warning('请填写必填项')
        return
      }
      Regist(this.regQuery).then((res) => {
        console.log(res)
        this.$message(res.msg)
      })
    },
    handleAvatarSuccess(value) {
      this.regQuery.HeadIcon = value.url
      console.log(value)
    },
  },
  mounted() {
    this.$nextTick(() => {
      var stars = document.getElementById('stars')
      // js随机生成流星
      for (var j = 0; j < 20; j++) {
        var newStar = document.createElement('div')
        newStar.className = 'star'
        newStar.style.top = randomDistance(100, -100) + 'px'
        newStar.style.left = randomDistance(2000, 500) + 'px'
        stars.appendChild(newStar)
      }
      // 封装随机数方法
      function randomDistance(max, min) {
        var distance = Math.floor(Math.random() * (max - min + 1) + min)
        return distance
      }
      var star = document.getElementsByClassName('star')
      // 给流星添加动画延时
      for (var i = 0, len = star.length; i < len; i++) {
        star[i].style.animationDelay = i % 6 == 0 ? '0s' : i * 0.8 + 's'
      }
    })
  },
}
</script>

<style lang="less" scoped>
#root {
  background: url('../../assets/img/bg2.jpg') no-repeat;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  .btn {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100px;
    opacity: 0.5;
  }
  #stars {
    margin: 0 auto;
    max-width: 1600px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // bottom: 0;
    z-index: 1;
    /deep/ .star {
      display: block;
      width: 1px;
      background: transparent;
      position: relative;
      opacity: 0;
      /*过渡动画*/
      animation: star-fall 6s linear infinite;
      -webkit-animation: star-fall 6s linear infinite;
      -moz-animation: star-fall 6s linear infinite;
      &::after {
        content: '';
        display: block;
        border: 0px solid #fff;
        border-width: 0px 90px 2px 90px;
        border-color: transparent transparent transparent
          rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
        /*变形*/
        transform: rotate(-45deg) translate3d(1px, 3px, 0);
        -webkit-transform: rotate(-45deg) translate3d(1px, 3px, 0);
        -moz-transform: rotate(-45deg) translate3d(1px, 3px, 0);
        transform-origin: 0% 100%;
        -webkit-transform-origin: 0% 100%;
        -moz-transform-origin: 0% 100%;
      }
    }
  }
}
@keyframes star-fall {
  0% {
    opacity: 0.5;
    transform: scale(0.5) translate3d(0, 0, 0);
    -webkit-transform: scale(0.5) translate3d(0, 0, 0);
    -moz-transform: scale(0.5) translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-1400px, 1400px, 0);
    -webkit-transform: translate3d(-1400px, 1400px, 0);
    -moz-transform: translate3d(-1400px, 1400px, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1.2) translate3d(-1500px, 1500px, 0);
    -webkit-transform: scale(1.2) translate3d(-1500px, 1500px, 0);
    -moz-transform: scale(1.2) translate3d(-1500px, 1500px, 0);
  }
}
</style>