module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 可选链插件
  plugins: [
    ["@babel/plugin-proposal-optional-chaining"],
    [
      "import",
      {
        libraryName: "view-ui-plus",
        libraryDirectory: "src/components",
      },
      "view-ui-plus",
    ],
  ],
};
