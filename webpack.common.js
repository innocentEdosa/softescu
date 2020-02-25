const PATH = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: PATH.resolve(__dirname, 'src/components/'),
      container: PATH.resolve(__dirname, 'src/container/'),
      api: PATH.resolve(__dirname, 'src/store/api'),
      actions: PATH.resolve(__dirname, 'src/store/actions/'),
      validation: PATH.resolve(__dirname, 'src/helpers/validation/'),
      fixtures: PATH.resolve(__dirname, 'src/helpers/fixtures/'),
      HOC: PATH.resolve(__dirname, 'src/HOC'),
      helpers: PATH.resolve(__dirname, 'src/helpers'),
    },
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg|woff|woff2|ttf|otf|eot)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Phoenix',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
