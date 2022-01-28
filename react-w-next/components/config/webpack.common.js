//@ts-ignore
const path = require('path');
//@ts-ignore
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//@ts-ignore
module.exports = () => {
  return [
    {
      entry: '../src/index',
      output: {
        //@ts-ignore
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8081/',
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx|tsx|ts)$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: false,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              'postcss-loader',
            ],
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
    {
      name: 'types_components',
      entry: ['../src/components/Buttons/', '../src/components/Input/'],
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
                    './Button': '../src/components/Buttons/',
                    './Input': '../src/components/Input/',
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
