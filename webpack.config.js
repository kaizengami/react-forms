const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const webpackMerge = require("webpack-merge");
const workboxPlugin = require("workbox-webpack-plugin");

const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env);

module.exports = env => {
  return webpackMerge(
    {
      mode: env.mode,
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      devServer: {
        historyApiFallback: true
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          title: "React forms",
          template: "src/index.html",
          favicon: "static/images/favicons/favicon.png"
        }),
        new workboxPlugin.InjectManifest({
          swSrc: "./src/sw.js",
          swDest: "./sw.js"
        }),
        new PrettierPlugin()
      ]
    },
    modeConfig(env)
  );
};
