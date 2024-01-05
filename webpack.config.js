// Webpack 5
// const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

function getAllIndexPaths(src, paths = []) {
  // Get all files and folders in the current folder.
  const files = fs.readdirSync(src);

  // Iterate over all files and folders.
  for (const file of files) {
    // Get the full path to the file or folder.
    const fullPath = `./${path.join(src, file)}`;

    // If the file is an index file, add it to the paths array.
    if (file === "index.html") {
      paths.push(fullPath);
    }

    // If the file is a folder, recursively search it for index files.
    else if (fs.lstatSync(fullPath).isDirectory()) {
      getAllIndexPaths(fullPath, paths);
    }
  }

  // Return the paths array.
  return paths;
}

// Example usage.
const src = "./src";
const paths = getAllIndexPaths(src);

module.exports = {
  //   externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  //   externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   title: "Webpack Example App",
    //   header: "Webpack Example Title",
    //   metaDesc: "Webpack Example Description",
    //   // template: "./src/input/index.html",
    //   // filename: "./src/input/index.html",
    //   inject: "body",
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    alias: {
      handlebars: "handlebars/dist/handlebars.js",
    },
    extensions: [".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  entry: paths,
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    watchFiles: ["src/*"],
    static: {
      directory: path.resolve(__dirname, "src"),
    },
  },
};
