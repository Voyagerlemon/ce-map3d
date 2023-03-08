module.exports = {
  // 启用深色模式，由系统浏览器控制
  darkMode: "media",
  // 删除未使用的css
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
  theme: {
    // 响应设置
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "22px",
      "4xl": "24px",
      "5xl": "26px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      primary: {
        DEFAULT: "#407eff",
        gradient: "linear-gradient(#5f93ff, #407eff)",
      },
      success: "#50c97a",
      warning: "#f59953",
      error: "#f55353",
      middle: {
        900: "#111215",
        800: "#202227",
        700: "#232426",
        600: "#7b8396",
        500: "#aaaaaa",
        400: "#d1d3d8",
        300: "#d8dadf",
        200: "#ebedf2",
        100: "#f1f2f4",
      },
    },
    spacing: {
      0: "0px",
      auto: "auto",
      xs: "2px",
      sm: "4px",
      base: "8px",
      lg: "12px",
      xl: "16px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "64px",
      "5xl": "128px",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.middle.400", "currentColor"),
    }),
    borderRadius: {
      DEFAULT: "1px",
      none: "0px",
      xs: "1px",
      sm: "2px",
      base: "4px",
      lg: "8px",
      xl: "12px",
      full: "9999px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    divideColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.middle.200", "currentColor"),
    }),
    divideWidth: (theme) => theme("borderWidth"),
    boxShadow: {
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
  },
  variants: {},
  // 支持自定义类名及类内容详见 https://www.tailwindcss.cn/docs/plugins
  plugins: [],
  // 可以在此关闭你不想使用的类
  corePlugins: {},
};
