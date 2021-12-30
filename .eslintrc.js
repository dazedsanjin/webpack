module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-undef': 0
  }
}
