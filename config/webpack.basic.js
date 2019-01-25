const path = require('path');
const fs = require('fs');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const util = require('./util');
util.getEntries();

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
            }
        ]
    },
    plugins: [
        new extractTextPlugin({
            filename:  (getPath) => {
                return getPath('../style/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        ...util.getHtmlPlugin()
    ],
    mode: 'development'
};