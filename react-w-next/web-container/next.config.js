const { i18n } = require("./next-i18next.config");

const { withModuleFederation } = require("@module-federation/nextjs-mf");

module.exports = {
  i18n,
  webpack: (config, options) => {
    const mfConf = {
      name: "web-container",
      library: {
        type: config.output.libraryTarget,
        name: "web-container",
      },
      remotes: {
        components: "components",
      },
      exposes: {},
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
