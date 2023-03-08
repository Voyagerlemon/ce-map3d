/*
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-11-23 14:36:51
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-12-05 17:28:39
 * @FilePath: \ce-map3d\src\main.js
 * @Description: 入口文件
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "view-ui-plus/dist/styles/viewuiplus.css";
import "@/styles/index.scss";
import "@/svg";
import { Message } from "view-ui-plus";

const app = createApp(App);
app.config.globalProperties.$Message = Message;
app.use(store);
app.use(router);
app.mount("#app");
