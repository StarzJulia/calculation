const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: [ '.js', '.vue' ],
        alias: {
            'vue$': 'vue/dist/vue.runtime.js',
        }
    },
    module: {
      rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          },
          {
              test: /\.js$/,
              loader: 'babel-loader'
          },
          {
              test: /\.s[ac]ss$/i,
              use: [
                  'vue-style-loader',
                  { loader: 'css-loader', options: { sourceMap: true } },
                  { loader: 'sass-loader', options: { sourceMap: true } }
              ]
          }
      ]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, ''),
      },
      compress: true,
      hot: true,
      port: 9000,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new VueLoaderPlugin()
  ]
}