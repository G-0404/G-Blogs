/*
 * @Author: 微生
 * @Date: 2024-04-01 14:41:13
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-03 15:20:57
 * @FilePath: /blogs-G/src/main.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
import '@/styles/index.scss'
import '@/styles/index.css'
app.mount('#app')
