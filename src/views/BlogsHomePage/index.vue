<!--
 * @Author: 微生
 * @Date: 2024-04-03 11:51:48
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-04 14:01:26
 * @FilePath: /blogs-G/src/views/BlogsHomePage/index.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 微生, All Rights Reserved. 
-->
<template>
  <div class="container-home-page">
    <div class="my-info-content transform-55">
      <MyInfoSideBar />
      <div class="blogs-content">
        <div class="blogs-content-inner">
          <div v-for="item in 100">测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案</div>
        </div>
      </div>
      <div class="my-info-menu-bar transform-55">
        <div class="menu-top"></div>
        <div class="menu-center">
          <div class="menu-item" :class="{ 'act-item': active_index === index }" v-for="(item, index) in 20">
            首页{{ item }}
          </div>
        </div>
        <div class="menu-botton"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyInfoSideBar from './components/MyInfoSideBar.vue'

const show = ref(true)
const active_index = ref(0)
</script>

<style scoped lang="scss">
.container-home-page {
  position: relative;
  display: flex;
  // width: 100vw;
  padding: 15px;
  box-sizing: border-box;
  background-color: #191922;
  // min-height: 100vh;
  .my-info-content {
    position: relative;
    flex: 1;
    background-color: #313137;
    padding: 0 70px 0 290px;
    box-sizing: border-box;
    // overflow: hidden;
    // overflow-y: hidden;
    // 禁用滚动

    .my-info-menu-bar {
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
    .blogs-content {
      // background-color: orange;
      height: calc(100vh - 30px);
      flex: 1;
      overflow-y: scroll;
      .blogs-content-inner {
        background-color: #313137;
        height: 3000px;

        &::-webkit-scrollbar {
          width: 0px;
        }
      }
    }
  }
}

@media (max-width: 920px) {
  .my-info-menu-bar {
    opacity: 0 !important;
  }
  .my-info-content {
    padding: 0 !important;
  }
}
@media (min-width: 920px) {
  .my-info-menu-bar-top {
    opacity: 1 !important;
  }
}
</style>
