//@ts-ignore
const path = require('path');
//@ts-ignore
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//@ts-ignore
module.exports = {
  entry: './src/index.js',
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
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
