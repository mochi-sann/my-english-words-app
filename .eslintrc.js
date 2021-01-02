module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx", "ts"],
      },
    ], // should add ".ts" if typescript project
    "no-useless-escape": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-use-before-define": [
      "off",
      {
        functions: true,
        classes: false,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        jsxBracketSameLine: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
        printWidth: 80,
      },
    ],
  },
};
