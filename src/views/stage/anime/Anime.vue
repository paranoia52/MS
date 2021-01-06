<template>
  <div class="anime">
    <!-- 3D旋转效果 -->
    <div class="stereo-box">
      <span id="in-front">
        <img src="@/assets/img/3d/2.jpg" class="in-img" alt="">
      </span>
      <span id="in-back">
        <img src="@/assets/img/3d/2.jpg" class="in-img" alt="">
      </span>
      <span id="in-left">
        <img src="@/assets/img/3d/2.jpg" class="in-img" alt="">
      </span>
      <span id="in-right">
        <img src="@/assets/img/3d/2.jpg" class="in-img" alt="">
      </span>
      <span id="in-top">
        <img src="@/assets/img/3d/2.jpg" class="in-img" alt="">
      </span>
      <span id="in-bottom">
        <img src="@/assets/img/3d/2.jpg" class="in-img" alt="">
      </span>
      <!-- 外层图片 -->
      <div class="out-front">
        <img src="@/assets/img/3d/2.jpg" class="out-img" alt="">
      </div>
      <div class="out-back">
        <img src="@/assets/img/3d/2.jpg" class="out-img" alt="">
      </div>
      <div class="out-left">
        <img src="@/assets/img/3d/2.jpg" class="out-img" alt="">
      </div>
      <div class="out-right">
        <img src="@/assets/img/3d/2.jpg" class="out-img" alt="">
      </div>
      <div class="out-top">
        <img src="@/assets/img/3d/2.jpg" class="out-img" alt="">
      </div>
      <div class="out-bottom">
        <img src="@/assets/img/3d/2.jpg" class="out-img" alt="">
      </div>
    </div>
    <!-- 3D相册效果 -->
    <div class="album">
      <div id="rotephoto">
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
        <figure><img src="@/assets/img/3d/1.jpg" alt=""></figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.anime {
  position: relative;
  // 3D盒子
  .stereo-box {
    width: 200px;
    height: 200px;
    // margin: 200px auto;
    position: absolute;
    top: 150px;
    left: 50px;
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
  // 3D相册
  .album {
    width: 360px;
    height: 250px;
    position: relative;
    margin: 300px auto;
    perspective: -400px; // 景深？
    #rotephoto {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      animation: albumRotate 20s infinite linear;
      &:hover {
        animation-play-state: paused;
      }
      figure {
        width: 350px;
        height: 250px;
        position: absolute;
        border: 1px solid black;
        overflow: hidden;
        img {
          width: 100%;
          height: 250px;
          // 滤镜
          filter: grayscale(1);
          transition: all 0.8s ease;
          &:hover {
            filter: grayscale(0);
            transform: scale(1.3, 1.3);
          }
        }
        &:nth-child(1) {
          transform: rotateY(0deg) translateZ(500px);
        }
        &:nth-child(2) {
          transform: rotateY(40deg) translateZ(500px);
        }
        &:nth-child(3) {
          transform: rotateY(80deg) translateZ(500px);
        }
        &:nth-child(4) {
          transform: rotateY(120deg) translateZ(500px);
        }
        &:nth-child(5) {
          transform: rotateY(160deg) translateZ(500px);
        }
        &:nth-child(6) {
          transform: rotateY(200deg) translateZ(500px);
        }
        &:nth-child(7) {
          transform: rotateY(240deg) translateZ(500px);
        }
        &:nth-child(8) {
          transform: rotateY(280deg) translateZ(500px);
        }
        &:nth-child(9) {
          transform: rotateY(320deg) translateZ(500px);
        }
        &:nth-child(10) {
          transform: rotateY(360deg) translateZ(500px);
        }
        &:nth-child(11) {
          transform: rotateY(400deg) translateZ(500px);
        }
        &:nth-child(12) {
          transform: rotateY(440deg) translateZ(500px);
        }
      }
    }
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
@keyframes albumRotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>