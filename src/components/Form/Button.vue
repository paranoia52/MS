<template>
  <el-button :type="type" :disabled="disabled" :size="size" :icon="icon" :round="round" :plain="plain" :circle="circle"
    :loading="loading" @click="handle">
    {{ capion }}
    <i :class="inIcon"></i>
  </el-button>
</template>

<script>
export default {
  props: {
    size: { default: 'small' },
    type: { default: 'primary' },
    plain: { default: false },
    round: { default: false },
    circle: { default: false },
    loading: { default: false },
    disabled: { default: false },
    icon: { default: '' },
    inIcon: { default: '' },
    capion: { default: '' },
  },
  methods: {
    handle() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="less" scoped></style>
