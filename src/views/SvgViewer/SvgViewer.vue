<!--
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-11-24 15:09:15
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-12-05 17:30:26
 * @FilePath: \ce-map3d\src\views\SvgViewer\SvgViewer.vue
 * @Description: svg图标预览组件
-->
<script>
import Clipboard from "clipboard";
import { getCurrentInstance, h } from "vue";
const icons = require
  .context("../../svg", false, /\.svg$/)
  .keys()
  .map(name => name.replace(/^\.\/([\w-]+)\.svg/, "$1"));
export default {
  name: "SvgViewer",
  methods: {
    handleIconClick() {
      const divAll = document.querySelectorAll(".icon");
      const spanAll = document.querySelectorAll(".icon-name");
      const iconName = [];
      const div = [];
      spanAll.forEach(item => {
        iconName.push(item.innerHTML);
      });
      divAll.forEach(item => {
        div.push(item);
      });
      for (let i = 0; i < div.length; i++) {
        const clipboard = new Clipboard(div[i], {
          text: function () {
            return `<SvgIcon name="${iconName[i]}" />`;
          }
        });
        clipboard.on("success", () => {
          this.$Message.success({
            content: `${iconName[i]}图标代码已成功复制`,
            duration: 3,
            closable: true
          });
          clipboard.destroy();
        });
      }
    }
  },
  mounted() {
    this.handleIconClick();
  },
  render: () => {
    const instance = getCurrentInstance();
    console.log("@", instance);
    return h(
      <div class="icon-view">
        <h2>点击Svg图标获取代码</h2>
        <div class="icons">
          {icons.map(iconName => (
            <div class="icon">
              <i name={iconName} />
              <span class="icon-name">{iconName}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
</script>
<style lang="scss" scoped>
.icon-view {
  width: 100%;
  min-width: 500px;
  height: 100vh;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  h2 {
    color: #eee;
    letter-spacing: 0.1rem;
    text-align: center;
    margin: 20px 0;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    overflow: auto;
    justify-content: space-between;
    .icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 9px 8px;
      width: 140px;
      height: 90px;
      background-color: #222733;
      border-radius: 8%;
      cursor: pointer;
      :deep(svg) {
        height: 3rem;
        width: 3rem;
      }
      i:hover {
        transform: scale(1.5);
      }
      .icon-name {
        color: #8f9797;
        margin-top: 20px;
        font-size: 14px;
        font-weight: normal;
      }
      .icon-name:hover {
        color: #42b883;
        font-weight: bold;
      }
      &:hover {
        transform: translateY(-3%);
      }
    }
  }
}
</style>
