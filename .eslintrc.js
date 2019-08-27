module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "preetier"],
  plugins: ["preetier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "class-mathod-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePatter: "next" }]
  }
};
