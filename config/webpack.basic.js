const path = require('path');
const fs = require('fs');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const util = require('./util');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: util.getEntries(),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/static')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: false,
                        collapseWhitespace: false
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../images',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new extractTextPlugin({
            filename:  (getPath) => {
                return getPath('../style/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        ...util.getHtmlPlugin(),
        new cleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        })
    ],
    mode: 'development'
};