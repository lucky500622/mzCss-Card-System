<script setup lang="ts">
</script>

<template>
  <div class="main-box">
    <div class="title"><slot>标题</slot></div>
  </div>
</template>

<style scoped lang="scss">
.main-box {
  display: flex;
  padding: 8px 0;
  align-items: center;
  background-color: #348fffe3;
  .title {
    margin: 0 auto;
    font-size: 18px;
    color: #fff;
    height: 22px;
    line-height: 22px;
  }
}
</style>
