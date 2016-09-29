const path = require('path');
const webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client', 'webpack/hot/dev-server',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.jsx?/,
      loaders: ['react-hot', 'babel', 'raw-loader'],
      include: APP_DIR
    }]
  }
};
