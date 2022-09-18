const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = (env, argv) => {
  console.log(argv.mode)
  const isProduction = argv.mode === 'production';
  
  return {
  entry: './src/app.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },

  module: {
    rules: [
      // @Babel
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // Css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          (isProduction) ? MiniCssExtractPlugin.loader : 'style-loader',
         "css-loader",
         "sass-loader",
        ]
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  },

  
  optimization: {
    splitChunks:{
      chunks: (isProduction) ? 'all' : 'async'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.hbs',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }      
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "./assets" },
      ],
    }),
  ]
}};