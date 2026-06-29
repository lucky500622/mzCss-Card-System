<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '卡卷'
  },
  description: {
    type: String,
    default: '这是一个卡卷，卡卷卡卷好卡卷'
  },
  color: {
    type: Number,
    default: 0
  }
})

// 卡片颜色列表
const colorList = [
  '#E6F7FF', // 浅天蓝
  '#FFF2E8', // 浅橘杏
  '#F0F9FF', // 雾浅蓝
  '#FFF7E6', // 奶黄
  '#F9E8FF', // 淡紫粉
  '#E8FFF3'  // 薄荷浅绿
]
// 卡片颜色
const color = computed(() => {
  if (props.color === 0) {
    return colorList[0]
  }
  else if (props.color === 1) {
    return colorList[1]
  }
  else if (props.color === 2) {
    return colorList[2]
  }
  else if (props.color === 3) {
    return colorList[3]
  }
  else if (props.color === 4) {
    return colorList[4]
  }
  else if (props.color === 5) {
    return colorList[5]
  }
})

// 处理卡片设置事件
const handleCardSetting = () => {
  console.log('卡片设置事件')
}
</script>

<template>
  <div class="main-box" :style="{backgroundColor: color}">
    <div class="title">
      {{ props.title }}
    </div>
    <div class="description">
      {{ props.description }}
    </div>
    <div class="arrow" @click="handleCardSetting">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-box {
  position: relative;
  margin: 10px;
  padding: 16px 0 0 16px;
  border-radius: 10px;
  height: 80px;
  color: #444444;
  font-size: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
  .title {
    font-weight: 700;
  }
  .description {
    margin-top: 26px;
    font-size: 12px;
    color: #6b6b6b;
  }
  .arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #6f6f6f;
  }
}
</style>
