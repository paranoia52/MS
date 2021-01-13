<template>
  <div class="popup" v-if="show" @click="show = false"></div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    showPop: Boolean,
  },
  watch: {
    showPop(val) {
      this.show = val;
    },
    show(val) {
      this.$emit("close", val);
    },
  },
};
</script>
<style lang="less" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
}
</style>