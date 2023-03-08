<!--
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-11-23 16:36:01
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-11-24 11:11:02
 * @FilePath: \ce-map3d\src\views\HeaderPanel.vue
 * @Description: 头部
-->
<template>
  <div
    class="app-header flex justify-between text-default bg-digit bg-opacity-70"
  >
    <div class="app-container flex items-center">
      <img
        v-if="logoUrl"
        :src="logoUrl"
        crossOrigin="anonymous"
        class="app-logo"
        alt="logo"
      />
      <span
        class="app-title text-lg font-bold text-default"
        v-html="appTitle"
      ></span>
    </div>
    <slot name="user" />
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.app-header {
  height: 3.13rem;
  z-index: 99;
  .app-container {
    margin-left: 0.83rem;
    .app-title {
      cursor: pointer;
      margin-left: 0.83rem;
    }
    .app-logo {
      width: 1.67rem;
      height: 1.67rem;
    }
  }
}
</style>
