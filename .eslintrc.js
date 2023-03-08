module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      jsx: true
    },
    requireConfigFile: false,
    parser: "@babel/eslint-parser"
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": 0,
    "no-prototype-builtins": 0,
    "no-case-declarations": 0,
    "no-console": 0,
    "no-debugger": 0,
    "prefer-const": [
      2,
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],
    "no-var": 2,
    "no-unused-vars": 0,
    "no-use-v-if-with-v-for": 0,
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/no-multiple-template-root": 0,
    "vue/multi-word-component-names": 0,
    eqeqeq: [2, "always"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
