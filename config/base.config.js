const openBrowser = require('open-browser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
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
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use:
                    [
                        'style-loader',
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
                                    path: './'
                                }
                            }
                        },
                        'sass-loader'
                    ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    hotReload: false // 打開热重载
                }
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
        new openBrowser({ url: 'http://localhost:9090'}),
        new VueLoaderPlugin()
    ]
};