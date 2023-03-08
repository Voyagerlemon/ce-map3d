<!--
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-12-05 15:55:16
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-12-05 17:27:28
 * @FilePath: \ce-map3d\src\views\TestSvg\TestSvg.vue
 * @Description: 测试Svg
-->
<template>
  <div class="container">
    <SvgIcon icon="401"></SvgIcon>
  </div>
</template>

<style lang="scss" scoped>
// 自定义svg颜色，宽高等样式
// 注意：这里之所以能自定义svg颜色，是因为我在.svg文件中把fill="xxx颜色值" 改为了fill="currentColor" (见下面第7步骤描述)
.svg-icon {
  width: 18px;
  height: 18px;
}
</style>
