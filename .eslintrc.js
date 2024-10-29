module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": [0],
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-control-regex": 0,
    "no-unused-vars": "off",
  },
};
