const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    plugins:[
        // new CleanWebpackPlugin(),
        new webpack.DllReferencePlugin({
            manifest:path.resolve(__dirname,'dist','manifest.json')
        }),
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html',
            title:'React boilerplate'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              },
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
              },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpe?g|gif)$/,
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