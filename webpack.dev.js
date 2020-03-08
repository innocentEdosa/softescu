const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    open: true,
    port: 3000,
    overlay: true,
    compress: true,
    historyApiFallback: true,
    after: () => {
    },
  },
  mode: 'development',
  devtool: 'inline-source-map',
});
