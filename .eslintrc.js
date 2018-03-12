// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": 0,
    "no-tabs": 0,
    "eol-last": 0,  // 文件末尾强制换行  
    "no-new": 0,  //禁止使用new产生副作用
    "no-new-func": 0,  
    "no-new-object": 2,  
    "no-new-require": 2,  
    "no-new-wrappers": 2,
    "no-trailing-spaces": 0, 
    "space-unary-ops":0,
    "one-var":0,
    "no-extra-boolean-cast":0,
    "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
    }],
    "keyword-spacing": 0
  }
}
