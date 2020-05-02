const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/../dist',
    publicPath: '/',
    filename: '[name].[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
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
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      favicon: './public/favicon.ico',
      template: './public/index.ejs',
    })
  ]
};