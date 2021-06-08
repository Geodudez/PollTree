const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './public/build');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  mode: process.env.NODE_ENV,
  devServer: {
    port: 8080,
    proxy: {
      '/api/**': 'http://localhost:3000',
      '/auth/**': 'http://localhost:3000',
    },
    publicPath: '/build/',
    hot: true,
  },
  target: 'node',
  resolve: {
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};
