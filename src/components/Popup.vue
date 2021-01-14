<template>
  <div class="popup" v-if="show" @click.self="show= false">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    value: {
      default: true,
      type: Boolean,
    },
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit("input", val);
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
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>