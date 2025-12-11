module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
    // plugin: ["nativewind/babel", "react-native-paper/babel"],
  };
};
