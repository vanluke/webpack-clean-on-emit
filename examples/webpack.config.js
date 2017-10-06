const path = require('path');
const WebpackCleanPlugin = require('../index');

module.exports = {
  entry: "./entry.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js',
    publicPath: '',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [
    new WebpackCleanPlugin({
      src: path.resolve(__dirname, 'build'),
      clearAll: true,
    }),
  ],
};