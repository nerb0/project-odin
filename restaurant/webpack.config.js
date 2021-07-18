const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    util: './src/scripts/util.js',
    home: './src/scripts/home.js',
    menu: './src/scripts/menu.js',
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    template: "template.html",
    inject: 'body',
  })],
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};