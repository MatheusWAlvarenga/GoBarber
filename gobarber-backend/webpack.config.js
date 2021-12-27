const path = require('path');

module.exports = {
  entry: path.resolver(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'public'),

    filename: 'bundle.js',
  },
  module: {
    ruler: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
