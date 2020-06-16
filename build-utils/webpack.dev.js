const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const DataHub = require('macaca-datahub');
const datahubProxyMiddle = require('datahub-proxy-middleware');

const datahubConfig = {
  port: 5678,
  hostname: '127.0.0.1',
  store: path.join(__dirname, '../', 'mock'),
  proxy: {},
  showBoard: true,
};

const defaultDatahub = new DataHub({
  port: datahubConfig.port
});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env.development'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8000,
    open: true,
    hot: true,
    proxy: {
      '*': {
        target: 'http://127.0.0.1:5678/data/demo'
      }
    },
    before: app => datahubProxyMiddle(app)(datahubConfig),
    after: () => {
      defaultDatahub.startServer(datahubConfig).then(() => {
        console.log('datahub ready');
      });
    }
  }
};