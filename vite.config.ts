/*
 * @Author: 微生
 * @Date: 2024-04-01 14:41:13
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-03 13:41:32
 * @FilePath: /blogs-G/vite.config.ts
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    // 配置前端服务地址和端口
    //服务器主机名
    host: '0.0.0.0',
    //端口号
    port: 8808,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
    open: false
    //自定义代理规则
  }
})
