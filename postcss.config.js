module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 19.2,
      minPixelValue: 3, // < 3 的不转换
      propList: ["*"],
      unitPrecision: 2,
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
