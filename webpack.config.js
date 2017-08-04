const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/scripts/index.js'],
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src/scripts'),
        loader: 'babel-loader',
      },
    ],
  },
};
