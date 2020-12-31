<template>
  <div>
    userm
  </div>
</template>
<script>
import { formatTime } from "@/tool/filter";
export default {
  data() {
    return {};
  },
  methods: {
    formatTime,
    logout() {
      this.$router.push("/login");
      sessionStorage.removeItem("token");
    },
  },
  mounted() {},
  destroyed() {},
};
</script>
<style lang="less" scoped>
</style>