/*
 * @Author: xuhy 1727317079@qq.com
 * @Date: 2022-11-23 14:36:51
 * @LastEditors: xuhy 1727317079@qq.com
 * @LastEditTime: 2022-12-15 09:08:50
 * @FilePath: \ce-map3d\vue.config.js
 * @Description: Vue配置文件
 */
const { defineConfig } = require("@vue/cli-service");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");
const basePath = process.env.VUE_APP_BASE_PATH;
const port = process.env.VUE_APP_DEV_PORT;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: basePath,
  productionSourceMap: true,
  devServer: {
    host: "localhost",
    port,
    open: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    }
  },
  chainWebpack: config => {
    config.plugin("SpriteLoaderPlugin").use(SpriteLoaderPlugin, [
      {
        plainSprite: true
      }
    ]);
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => ({
        ...options,
        compilerOptions: {
          isCustomElement: tag => tag.startsWith("-")
        }
      }));
    // 设置 svg-sprite-loader
    /*  config.module
      .rule("svg")
      .exclude.add(path.resolve(__dirname, "src/svg"))
      .end();
    config.module
      .rule("svg")
      .test(/\.svg$/)
      .include.add(path.resolve("src/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end(); */
  },
  pluginOptions: {
    svgSpriteLoader: {
      dir: path.resolve(__dirname, "src/svg"),
      test: /\.svg$/,
      options: {
        symbolId: "icon-[name]",
        extract: true,
        outputPath: "static/svg/",
        publicPath: "static/svg/",
        spriteFilename: "sprite.svg"
      }
    }
  }
});
