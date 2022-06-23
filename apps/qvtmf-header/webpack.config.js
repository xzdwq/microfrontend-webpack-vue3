const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  output: {
    publicPath: 'http://localhost:4400/',
    // uniqueName: 'qvtmfHeader',
  },
  // experiments: {
  //   topLevelAwait: true,
  // },
  // optimization: {
  //   runtimeChunk: false,
  // },
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.jsx', '.js', '.json'],
  },
  devServer: {
    port: 4400,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  // devtool: false,
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'qvtmfHeader',
      // library: { type: 'var', name: 'qvtmfHeader' },
      filename: 'qvtmfHeader.js',
      remotes: {},
      exposes: {
        './qvtmfHeader': './src/components/top-bar.vue',
      },
      shared: require('./package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
