const path = require("path");
const Htmlwebpackplugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./src",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new Htmlwebpackplugin({
      template: "./src/template.html",
      filename: "index.html",
      title: "NekoChan's Cafe",
      inject: "body",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};
