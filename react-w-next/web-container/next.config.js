const { i18n } = require("./next-i18next.config");
const WebpackRemoteTypesPlugin = require("webpack-remote-types-plugin").default;

module.exports = {
  i18n,
  webpack5: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          components: "components@http://localhost:8081/remoteEntry.js",
          app2: "app2@http://localhost:3002/",
        },
        shared: [],
      }),
      new WebpackRemoteTypesPlugin({
        remotes: {
          app2: "app2@http://localhost:3002/",
          components: "components@http://localhost:8081/",
        },
        outputDir: "types", // supports [name] as the remote name
        remoteFileName: "[name]-dts.tgz", // default filename is [name]-dts.tgz where [name] is the remote name, for example, `app` with the above setup
      })
    );

    return config;
  },
};
