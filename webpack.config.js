const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const config = {
  mode: 'development',
  entry: {
    index: ['./src/frontend/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/frontend'),
    filename: '[name].[chunkhash].js',
    publicPath: '',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new WebpackManifestPlugin(),
  ],
};

module.exports = config;
