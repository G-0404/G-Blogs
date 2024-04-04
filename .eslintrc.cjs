/*
 * @Author: 微生
 * @Date: 2024-04-01 14:41:13
 * @LastEditors: WeiSheng 842469165@qq.com
 * @LastEditTime: 2024-04-03 11:54:19
 * @FilePath: /blogs-G/.eslintrc.cjs
 * @Description:
 *
 * Copyright (c) 2024 by 微生, All Rights Reserved.
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
