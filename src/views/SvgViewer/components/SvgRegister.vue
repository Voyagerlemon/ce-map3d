<!--
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-12-05 15:40:45
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-12-05 17:21:51
 * @FilePath: \ce-map3d\src\views\SvgViewer\components\SvgRegister.vue
 * @Description: Svg图标注册
-->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template> 

<script>
import { computed } from "vue";
export default {
  name: "SvgRegister",
  props: {
    iconClass: { type: String },
    className: { type: String }
  },
  setup(props) {
    const iconName = computed(() => {
      return props.iconClass ? `#icon-${props.iconClass}` : "#icon";
    });
    const svgClass = computed(() => {
      return props.className ? "svg-icon " + props.className : "svg-icon";
    });
    return { iconName, svgClass };
  }
};
</script>

<style  lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
