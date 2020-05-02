const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: __dirname + '/../dist',
    publicPath: '/',
    filename: '[name].[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|ttf2|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2000
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      favicon: './public/favicon.ico',
      template: './public/index.ejs',
    }),
    new DashboardPlugin()
  ]
};