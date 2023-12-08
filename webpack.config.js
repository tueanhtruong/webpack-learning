// Webpack 5
// const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //   externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  //   externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Webpack Example App",
      header: "Webpack Example Title",
      metaDesc: "Webpack Example Description",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      handlebars: "handlebars/dist/handlebars.js",
    },
  },
  output: {
    clean: true,
  },
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    watchFiles: ["src/*"],
  },
};
