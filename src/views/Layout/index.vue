<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'

// router实例
const router = useRouter()

// 选中的tabbar索引
const active = ref<number>(0)
// 索引变更触发事件
watch(active, () => {
  if (active.value === 0) {
    router.push({ name: 'home' })
  } else if (active.value === 1) {
    router.push({ name: 'card' })
  }
}, { immediate: true })

</script>
<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="card">卡卷</van-tabbar-item>
    </van-tabbar>
    <RouterView > 
    </RouterView>
  </div>
</template>