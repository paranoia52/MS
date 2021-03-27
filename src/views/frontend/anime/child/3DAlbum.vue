<template>
  <!-- 3D相册效果 -->
  <div class="album">
    <div id="rotephoto">
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
      <figure><img src="@/assets/img/bg2.jpg" alt=""></figure>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
// 3D相册
.album {
  width: 360px;
  height: 250px;
  position: relative;
  margin: 200px auto;
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
@keyframes albumRotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>