<!--
 * @Author: 微生
 * @Date: 2024-04-01 14:41:13
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-03 11:46:37
 * @FilePath: /blogs-G/src/App.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 微生, All Rights Reserved. 
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- 带keepAlive的会被缓存 -->
  <keep-alive>
    <RouterView v-if="$route.meta.keepAlive" />
  </keep-alive>
  <RouterView v-if="!$route.meta.keepAlive" />
</template>

<style scoped></style>
