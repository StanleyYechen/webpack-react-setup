const path = require('path');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            }
          },
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCSSAssetsPlugin(),
    new PurifyCSS({
      paths: glob.sync([
        path.resolve(__dirname, '../src/*.js'),
        path.resolve(__dirname, '../src/*.jsx'),
        path.resolve(__dirname, '../src/*.ts'),
        path.resolve(__dirname, '../src/*.tsx')
      ])
    }),
    new Dotenv({
      path: './.env.production'
    })
  ]
};