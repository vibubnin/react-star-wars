const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  const modifiedConfig = alias({
    "@components": "src/components",
    "@constants": "src/constants",
    "@containers": "src/containers",
    "@hoc-helpers": "src/hoc-helpers",
    "@services": "src/services",
    "@utils": "src/utils",
  })(config);

  return modifiedConfig;
};
