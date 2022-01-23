const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  webpack5: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          components: "components@http://localhost:8081/remoteEntry.js",
        },
        shared: [],
      })
    );

    return config;
  },
};
