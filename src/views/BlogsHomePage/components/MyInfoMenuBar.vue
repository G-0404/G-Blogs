<!--
 * @Author: 微生
 * @Date: 2024-04-04 16:14:17
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-04 16:19:21
 * @FilePath: /blogs-G/src/views/BlogsHomePage/components/MyInfoMenuBar.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 微生, All Rights Reserved. 
-->
<template>
  <div class="my-info-menu-bar-container transform-55">
    <div class="menu-top"></div>
    <div class="menu-center">
      <div class="menu-item" :class="{ 'act-item': active_index === index }" v-for="(item, index) in 20">
        首页{{ item }}
      </div>
    </div>
    <div class="menu-botton"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active_index = ref(0)
</script>

<style scoped lang="scss">
.my-info-menu-bar-container {
  position: fixed;
  right: 15px;
  top: 15px;
  width: 70px;
  height: calc(100vh - 30px);
  background-color: #202029;
  display: flex;
  flex-direction: column;
  color: #8c8c8e;
  .menu-top {
    width: 70px;
    height: 70px;
    background-color: #24242f;
  }
  .menu-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0px;
    }
    .menu-item {
      padding: 18px 0;
      box-sizing: border-box;
      text-align: center;
      flex-shrink: 0;
      font-size: 11px;
    }
  }
  .menu-botton {
    width: 70px;
    height: 140px;
    background-color: #252530;
  }
}
.my-info-menu-bar-top {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 30px;
  background-color: #202029;
  display: flex;
  flex-direction: column;
  color: #8c8c8e;
}

@media (max-width: 920px) {
  .my-info-menu-bar-container {
    opacity: 0 !important;
  }
}
@media (min-width: 920px) {
  .my-info-menu-bar-top {
    opacity: 1 !important;
  }
}
</style>
