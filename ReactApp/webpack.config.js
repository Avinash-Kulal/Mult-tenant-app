const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MinifyHtmlWebpackPlugin = require("minify-html-webpack-plugin")
module.exports = {
 mode: "development",
 entry: "./index.js",
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "index.js"
 },
 target: "web",
 devServer: {
  static: './dist',
  port:3000
},
 resolve: {
  extensions: ['.js', '.jsx']
 },
 module: {
  rules: [
   {
    test: /\.(js|jsx)/,
    exclude: /node_modules/,
    use: 'babel-loader'
   },
   {
    test: /\.html/,
    use: 'html-loader'
   }

  ]
 },
 //devtool: "eval-cheap-module-source-map",
 devtool: 'eval-cheap-module-source-map',
 plugins: [
  new CopyPlugin({
   patterns: [
    { from: "./public/index.html", to: "." },
   ],
  }),
  new MinifyHtmlWebpackPlugin({
   src: './public',
   dest: './dist',
   rules: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true,
    minifyJS: true,
   }
  })
 ]
}