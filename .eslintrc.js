module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["@react-native", "plugin:react-hooks/recommended"],
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ["simple-import-sort"],
  rules: {
    quotes: "off",
    "no-console": "error",
    "no-unused-vars": "error",
    "react-native/no-inline-styles": "off",
    "simple-import-sort/imports": "warn",
  },
};
