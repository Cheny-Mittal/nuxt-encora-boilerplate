// .eslintrc.cjs

import ForkTsCheckerWebpackPlugin  from 'fork-ts-checker-webpack-plugin'
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [new ForkTsCheckerWebpackPlugin()],
  rules: {},
};
