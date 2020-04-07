const path = require("path"); //from node.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
// with html-webpack-plugin, it creates the html file in dist automatically,
// we don't even need to create the dist file by ourselves

/*Starting from the entry points, webpack recursively builds a dependency graph that 
includes every module your application needs*/

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  // index.js (including all the components) will be complied by webpack to one file in /dist ==> "index_bundle.js"

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // telling webpack that we want bable to complie .js/.jsx files
        /* Out of the box, webpack only understands JavaScript and JSON files. 
        Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application*/
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  /*By default webpack automatically resolve js files. 
    But it doesn't resolve jsx files by default. 
    To be able to do that you have to manually configure your webpack config:*/
  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // without specifing template, html-webpack-plugin will create a default html template
  ],
};
