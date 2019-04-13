const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  mode: 'development',	
  resolve: {
    extensions: ['.js', '.ts']
  },
  entry: {
    polyfills: "./src/polyfills.ts",
    main: "./src/main.ts"
  },
  devtool: "source-map",
  devServer: {
      historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: "[name].js" // name of the generated bundle
  },
  module: {
    rules: [{
        test: /\.css$/,
        loader: ["style-loader", "css-loader", "to-string-loader"]
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: 'tslint-loader'
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }

    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
        },
      },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body"
    })
  ]
};