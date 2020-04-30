const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache:true,
                parallel:true,
                sourceMap:true
            }),
            new OptimizeCss()
        ]
    },
    entry:{
        app:'./src/index.js'
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot:true
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin,
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use:[
                    'xml-loader'
                ]
            }
        ]
    }
};