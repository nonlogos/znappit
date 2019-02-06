const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve, join } = require('path');
const commonConfig = require('./common');
const outputPath = resolve(join(__dirname, '..', '..', 'src', 'public'));
const publicPath = '/';

module.exports = merge(commonConfig, {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    resolve(join(__dirname, '../../src/client/index.tsx')), // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: outputPath,
    publicPath: publicPath, // necessary for HMR to know where to load the hot update chunks
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.NamedModulesPlugin({
      filename: 'index.html',
    }), // prints more readable module names in the browser console on HMR updates
  ],
  mode: 'development',
});
