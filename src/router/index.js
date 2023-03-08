/*
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-11-23 14:36:51
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-12-05 15:58:23
 * @FilePath: \ce-map3d\src\router\index.js
 * @Description: 路由
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    redirect: "/svg"
  },
  {
    path: "/screen",
    name: "screen",
    component: () => import("@/views/ScreenViewer")
  },
  {
    path: "/svg",
    name: "Svg",
    component: () => import("@/views/SvgViewer")
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/TestSvg")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
