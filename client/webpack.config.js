const path = require("path"); //from node.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
// with html-webpack-plugin, it creates the html file in dist automatically,
// we don't even need to create the dist file by ourselves

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  // index.js (including all the components) will be complied by webpack to one file in /dist ==> "index_bundle.js"

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // telling webpack that we want bable to complie .js/.jsx files
        // A loader converts the file to a valid module.
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
    // without specifing template, html-webpack-plugin will create a default html template
  ]
};
