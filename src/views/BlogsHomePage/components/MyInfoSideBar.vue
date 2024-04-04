<!--
 * @Author: 微生
 * @Date: 2024-04-03 15:35:05
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-03 16:56:21
 * @FilePath: /blogs-G/src/views/BlogsHomePage/components/MyInfoSideBar.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by 微生, All Rights Reserved. 
-->
<template>
  <div class="my-info-side-bar-container transform-55">
    <div class="user-info-box">
      <div class="avatar-box">
        <img class="avatar" src="https://xiaoguo-1318259139.cos.ap-nanjing.myqcloud.com/avatar.jpg" alt="" />
        <div class="avatar-lamp"></div>
        <div class="avatar-lamp-ani"></div>
      </div>
      <div class="user-name">微生</div>
      <div class="user-desc-group">
        <div class="user-desc">Developer - WeiSheng</div>
        <div class="user-desc">g-404@qq.com</div>
      </div>
    </div>
    <div class="user-desc-box">
      <div class="desc-group">
        <div class="desc-item" v-for="item in 6">
          测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.my-info-side-bar-container {
  position: fixed;
  width: 290px;
  top: 15px;
  left: 15px;
  display: flex;
  height: calc(100vh - 30px);
  flex-direction: column;
  overflow-y: scroll;
  background-color: #20202a;
  &::-webkit-scrollbar {
    width: 0px;
  }
  .user-info-box {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(159deg, rgba(37, 37, 50, 0.9) 0, rgba(35, 35, 45, 0.9) 100%);
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    .avatar-box {
      position: relative;
      width: 90px;
      height: 90px;
      .avatar {
        width: 100%;
        height: auto;
        border-radius: 50%;
      }
      .avatar-lamp {
        position: absolute;
        bottom: 3px;
        right: 5px;
        height: 15px;
        width: 15px;
        background: #53b672;
        border-radius: 50%;
        z-index: 1;
        transition: 0.4s ease-in-out;
      }
      .avatar-lamp-ani {
        position: absolute;
        bottom: -1px;
        right: 1px;
        background: #fafafc;
        height: 23px;
        width: 23px;
        border-radius: 50%;
        animation: BreatheKeyFrames 1s infinite;
        z-index: 0;
      }
    }
    .user-name {
      color: #fafafc;
      font-size: 14px;
      margin-top: 18px;
      text-align: center;
    }
    .user-desc-group {
      margin-top: 10px;
      max-width: 60%;
      .user-desc {
        color: #8c8c8e;
        font-size: 11px;
        text-align: center;

        word-wrap: break-word;
      }
    }
  }
  .user-desc-box {
    // background-color: #20202a;
    flex: 1;
    .desc-group {
      .desc-item {
      }
    }
  }
}
@media (max-width: 920px) {
  .my-info-side-bar-container {
    left: -350px !important;
  }
}
@keyframes BreatheKeyFrames {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
