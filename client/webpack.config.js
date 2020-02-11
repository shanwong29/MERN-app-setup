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

  // webpack start a local host 3000, and serve index.html. look for ./src/index.js, and ask babel to translate it to bundle.js, and render on local host 3000 which serves our index.html

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // telling webpack that we want bable to complie .js files
        exclude: /node_modules/,
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
    // without specifing template, html-webpack-plugin will create a default html
  ]
};
