/*
 * @Author: 微生
 * @Date: 2024-04-01 14:41:13
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-03 13:26:03
 * @FilePath: /blogs-G/src/router/index.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // }
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/BlogsHomePage/index.vue')
    }
  ]
})

export default router
