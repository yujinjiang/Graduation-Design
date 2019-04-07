const path = require('path');
const fs = require('fs');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const openBrowser = require('open-browser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const util = require('./util');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: util.getEntries(),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/static')
    },
    resolve: {
        extensions: ['.js', '.vue', '.scss', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx|js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", {legacy: true }],
                            ['@babel/plugin-proposal-class-properties', {loose: true}]
                        ]
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },

                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: '../'
                                }
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
                test: /\.(png|jpg|gif|svg)$/,
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
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../fonts',
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
        }),
        new openBrowser({ url: 'http://localhost:3000'}),
        new VueLoaderPlugin()
    ],
    mode: 'production'
};