/* global process */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackModules = require("webpack-modules");

const baseDir = process.cwd();

module.exports = {

  context: path.resolve(baseDir, "./src"),

  entry: {
    index: "../index.js",
  },

  output: {
    path: path.resolve(baseDir, "./dist"),
    filename: "js/[name].js"
  },

  resolve: {
    extensions: ["*", ".mjs", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: [{
          loader: "babel-loader",
          options: {
            configFile: "./babel.config.js"
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true,
              localIdentName: "[local]"
            }
          },
          "css-loader",
        ]
      }
    ]
  },

  plugins: [
    new WebpackModules(),
    new MiniCssExtractPlugin({
      filename: "css/app.css"
    }),
  ],

  devtool: "source-map"

};
