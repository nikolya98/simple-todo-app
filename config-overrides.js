const { aliasWebpack, configPaths } = require("react-app-alias");

module.exports = (config) => {
  const overrider = aliasWebpack(configPaths("./jsconfig.paths.json"));
  return overrider(config);
};
