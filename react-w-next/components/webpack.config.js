// @ts-nocheck
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoaders = (env, type) => {
  const isEnvDevelopment = env === 'development';
  let importLoaders = 0;

  if (type === 'css') {
    // The option importLoaders allows you to configure how many loaders before
    // css-loader should be applied to @imported resources.
    // https://stackoverflow.com/questions/52544620/what-is-exactly-the-importloaders-option-of-css-loader-in-webpack-4
    importLoaders = 1;
  }

  return [
    isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      },
    },
    'postcss-loader',
  ];
};

module.exports = (env, options) => {
  return [
    {
      name: 'components',
      entry: './src/index',
      mode: options.mode,
      devServer: {
        static: [
          {
            directory: path.join(__dirname, './dist'),
          },
          {
            directory: path.join(__dirname, '.wp_federation'),
          },
        ],
        port: 8081,
      },
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8081/',
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: getCssLoaders(options.mode, 'css'),
          },
          {
            test: /bootstrap\.tsx$/,
            loader: 'bundle-loader',
            options: {
              lazy: true,
            },
          },
          {
            test: /\.tsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        ],
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'components',
          filename: 'remoteEntry.js',
          exposes: {
            './Button': './src/components/Buttons/primary',
            './Input': './src/components/Input/primary',
          },
          shared: ['react', 'react-dom'],
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
          filename: '[name].bundle.css',
          chunkFilename: '[id].css',
          // filename: '[name].[contenthash:8].css',
        }),
      ],
    },
    {
      name: 'types_components',
      entry: ['./src/components/Buttons/', './src/components/Input/'],
      mode: 'development',
      output: {
        publicPath: 'auto',
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: getCssLoaders('development', 'css'),
          },
          {
            test: /\.tsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'dts-loader',
                options: {
                  name: 'components',
                  exposes: {
                    './Button': './src/components/Buttons/',
                    './Input': './src/components/Input/',
                  },
                },
              },
            ],
          },
        ],
      },
    },
  ];
};
