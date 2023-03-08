<!--
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-11-23 16:44:11
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-11-25 12:09:45
 * @FilePath: \ce-map3d\src\views\ScreenViewer\ScreenViewer.vue
 * @Description: 系统界面
-->
<template>
  <div id="sceneViewer" class="absolute flex flex-col w-full h-full">
    <TopHeader>
      <User v-slot: user />
    </TopHeader>
    <div class="w-full h-full relative overflow-hidden scene-viewer">
      <div class="flex flex-1 h-full relative">
        <div id="sceneWrapper" class="relative h-full w-full"></div>
        <div
          id="sceneTool"
          class="absolute pointer-events-none scene-tool"
        ></div>
      </div>
      <div
        id="sceneLeft"
        class="absolute top-0 left-0 bottom-0 bg-digit bg-opacity-70 border border-digitline border-opacity-30 border-l-0"
      ></div>
      <div
        id="viewerFull"
        class="absolute top-0 left-0 bottom-0 right-0 pointer-events-none viewer-full"
      ></div>
    </div>
  </div>
</template>
<script setup>
import TopHeader from "./components/HeaderPanel.vue";
import User from "./components/UserRegion.vue";
</script>
<style lang="scss" scoped>
.scene-viewer {
  .scene-tool {
    top: 0.94rem;
    left: 0.94rem;
    right: 0.94rem;
    bottom: 1rem;
    background-color: rgba($color: #000000, $alpha: 0);
  }
  .viewer-full {
    z-index: 9999;
    background-color: rgba($color: #000000, $alpha: 0);
    & > div {
      @apply pointer-events-auto;
    }
  }
}
</style>
