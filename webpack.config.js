const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const workboxPlugin = require("workbox-webpack-plugin");
//const webpackPwaManifest = require("webpack-pwa-manifest");

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
        // new webpackPwaManifest({
        //   name: "Preact forms",
        //   short_name: "PreactForms",
        //   description: "Preact forms - Progressive Web App!",
        //   display: "fullscreen",
        //   // start_url: "/",
        //   background_color: "#ffffff",
        //   // crossorigin: "use-credentials", //can be null, use-credentials or anonymous
        //   icons: [
        //     {
        //       src: path.resolve("src/assets/icon.png"),
        //       sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        //     },
        //     {
        //       src: path.resolve("src/assets/large-icon.png"),
        //       size: "1024x1024" // you can also use the specifications pattern
        //     }
        //   ]
        // }),
        new HtmlWebpackPlugin({
          title: "React forms",
          template: "src/index.html",
          favicon: "static/images/favicons/favicon.png"
        }),
        new workboxPlugin.InjectManifest({
          swSrc: "./src/sw.js",
          swDest: "./sw.js"
        })
      ]
    },
    modeConfig(env)
  );
};
