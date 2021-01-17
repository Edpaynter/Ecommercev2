const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/dist/index.html',
    filename: 'index.html',
    inject: 'body'
  });
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), HTMLWebpackPluginConfig],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    port: 3000,
  },
  externals: {
    // global app config object
    config: JSON.stringify({
        apiUrl: 'http://localhost:8080'
    })
}
};