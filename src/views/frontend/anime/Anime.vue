<template>
  <div class="anime">
    <div class="menu">
      <div class="type" v-for="(el,i) in menu" @click="curIndex=i" :key="i">{{el}}</div>
    </div>
    <Stereo v-if="curIndex==0" />
    <Album v-else-if="curIndex==1" />
    <DoubleHelix v-else-if="curIndex==2" />
    <Graph v-else-if="curIndex==3" />
  </div>
</template>
<script>
import Stereo from "./child/Stereo";
import Album from "./child/3DAlbum";
import DoubleHelix from "./child/DoubleHelix";
import Graph from "./child/Graph";
export default {
  components: {
    Stereo,
    Album,
    DoubleHelix,
    Graph,
  },
  data() {
    return {
      menu: ["3D立方体", "3D相册", "双螺旋", "各种图形"],
      curIndex: 0,
    };
  },
};
</script>
<style lang="less" scoped>
.anime {
  position: relative;
  height: 100%;
  .menu {
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    .type {
      height: 20px;
      outline: none;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;
      margin: 5px;
      text-decoration: none;
      font: 16px/100% "Microsoft yahei", Arial, Helvetica, sans-serif;
      padding: 0.5em 2em 0.55em;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      color: #fef4e9;
      border: solid 1px #da7c0c;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#faa51a),
        to(#f47a20)
      );
    }
  }
}
</style>