<template>
  <div class="wallpaper">
    <div class="cover" :class="{active: isShow}">
      <div class="detail">
        <div class="title">月光</div>
      </div>
      <img @click="isShow = !isShow"
        src="https://testh5.happyyuyin.com/static/img/banner_yaoqing.8f37c47.png" alt="">
    </div>
    <iframe src="http://192.168.150.254:8080/#/closeaccount" width="100%" height="100%"
      frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang="less" scoped>
.wallpaper {
  height: 100vh;
  position: relative;
  .cover {
    position: absolute;
    width: 50px;
    height: 50px;
    right: 30px;
    bottom: 0px;
    transition: 1s;
    img {
      margin: 10px;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      animation: xzyz 5s linear infinite;
    }
    &.active {
      width: 150px;
      height: 200px;
      background: #999;
      border-radius: 15px;
    }
  }
}
@keyframes xzyz {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>