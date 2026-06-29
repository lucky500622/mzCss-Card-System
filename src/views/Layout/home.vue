<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import Card from '@/components/Card.vue'
</script>

<template>
  <div>
    <!-- 顶部导航栏 -->
    <TopBar>
      HOME
    </TopBar>

    <!-- 主要内容区域 -->
    <div class="main-box">
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../../../public/assets/img/1.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../public/assets/img/2.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../public/assets/img/3.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../public/assets/img/4.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../public/assets/img/5.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../public/assets/img/6.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../../public/assets/img/7.jpg" alt=""></van-swipe-item>
      </van-swipe>

      <!-- 卡卷卡片 -->
      <Card title="卡卷" :color="0" />
      <Card title="卡卷" :color="1" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-box {
  .my-swipe {
    margin: 0 auto;
    margin-top: 10px;
    width: 360px;
    height: 200px;
    background-color: #e6e6e6;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
