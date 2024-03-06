module.exports = {
  root: true,
  extends: "@react-native",
  parserOptions: {
    requireConfigFile: false, // <== ADD THIS
  },
  rules: {
    quotes: "off",
    "react-native/no-inline-styles": "off",
  },
};
