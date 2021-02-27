<template>
  <div class="container">
    <div class="dna">
      <div v-for="i in 70" :key="i" class="ele" :style="'--delay:-'+0.15*i+'s;'"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 1000px;
  height: 600px;
  background: hsla(205, 95%, 15%, 1);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: -webkit-radial-gradient(
    top,
    circle cover,
    hsla(205, 95%, 15%, 1) 0%,
    hsla(251, 20%, 17%, 1) 80%
  );
  overflow: hidden;
}
.dna {
  width: 120%;
  height: 40%;
  margin-top: 220px;
  margin-left: -150px;
  // perspective: 400px;
  transform: rotate(30deg);
  transform-style: preserve-3d;
}
.ele {
  position: relative;
  width: 1px;
  height: 140px;
  float: left;
  margin: 0 8px;
  box-shadow: 1px 1px 1px 1px hsla(0, 0%, 0%, 0.2);
  background: hsla(243, 100%, 85%, 1);
  animation: run 5s var(--delay) linear infinite;
}
.ele::before,
.ele::after {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
}
.ele::before {
  top: -2px;
  box-shadow: 2px 2px 2px 2px hsla(0, 0%, 0%, 0.25);
  background: hsla(243, 95%, 85%, 1);
}
.ele:after {
  bottom: -2px;
  box-shadow: 2px 2px 2px 2px hsla(0, 0%, 0%, 0.25);
  background: hsla(243, 95%, 85%, 1);
}
@keyframes run {
  from {
    transform: rotateX(-360deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
</style>