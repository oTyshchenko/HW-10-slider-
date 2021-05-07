const path = require('path')
const HTMLWebpackPlugim = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './Script1.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        port: 4200,
        overlay: true,
        open: true
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCssAssetWebpackPlugin({})
        ]
      },
    plugins: [
        new HTMLWebpackPlugim({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }
}