<template>
  <!-- 3D盒子 -->
  <div class="stereo-box">
    <span id="in-front">
      <img src="@/assets/img/head.jpg" class="in-img" alt="">
    </span>
    <span id="in-back">
      <img src="@/assets/img/head.jpg" class="in-img" alt="">
    </span>
    <span id="in-left">
      <img src="@/assets/img/head.jpg" class="in-img" alt="">
    </span>
    <span id="in-right">
      <img src="@/assets/img/head.jpg" class="in-img" alt="">
    </span>
    <span id="in-top">
      <img src="@/assets/img/head.jpg" class="in-img" alt="">
    </span>
    <span id="in-bottom">
      <img src="@/assets/img/head.jpg" class="in-img" alt="">
    </span>
    <!-- 外层图片 -->
    <div class="out-front">
      <img src="@/assets/img/head.jpg" class="out-img" alt="">
    </div>
    <div class="out-back">
      <img src="@/assets/img/head.jpg" class="out-img" alt="">
    </div>
    <div class="out-left">
      <img src="@/assets/img/head.jpg" class="out-img" alt="">
    </div>
    <div class="out-right">
      <img src="@/assets/img/head.jpg" class="out-img" alt="">
    </div>
    <div class="out-top">
      <img src="@/assets/img/head.jpg" class="out-img" alt="">
    </div>
    <div class="out-bottom">
      <img src="@/assets/img/head.jpg" class="out-img" alt="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.stereo-box {
  width: 200px;
  height: 200px;
  margin: 200px auto;
  animation: stereo 20s infinite;
  transform-style: preserve-3d;
  animation-timing-function: linear;
  span {
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50px;
    left: 50px;
  }
  div {
    position: absolute;
    transition: all 0.4s;
  }
  .in-img {
    width: 100px;
    height: 100px;
  }
  .out-img {
    width: 200px;
    height: 200px;
  }
  #in-front {
    transform: translateZ(50px);
  }
  #in-back {
    transform: translateZ(-50px);
  }
  #in-left {
    transform: rotateY(90deg) translateZ(50px);
  }
  #in-right {
    transform: rotateY(-90deg) translateZ(50px);
  }
  #in-top {
    transform: rotateX(90deg) translateZ(50px);
  }
  #in-bottom {
    transform: rotateX(-90deg) translateZ(50px);
  }
  .out-front {
    transform: translateZ(100px);
  }
  .out-back {
    transform: translateZ(-100px);
  }
  .out-left {
    transform: rotateY(90deg) translateZ(100px);
  }
  .out-right {
    transform: rotateY(-90deg) translateZ(100px);
  }
  .out-top {
    transform: rotateX(90deg) translateZ(100px);
  }
  .out-bottom {
    transform: rotateX(-90deg) translateZ(100px);
  }
  &:hover .out-front {
    transform: translateZ(200px);
  }
  &:hover .out-back {
    transform: translateZ(-200px);
  }
  &:hover .out-left {
    transform: rotateY(90deg) translateZ(200px);
  }
  &:hover .out-right {
    transform: rotateY(-90deg) translateZ(200px);
  }
  &:hover .out-top {
    transform: rotateX(90deg) translateZ(200px);
  }
  &:hover .out-bottom {
    transform: rotateX(-90deg) translateZ(200px);
  }
}
@keyframes stereo {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>