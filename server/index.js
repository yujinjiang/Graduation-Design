const express = require('express');
const pagesRouter = require('./pageRouters/pageRouter');
const getPort = require('get-port');
const webpack = require('webpack');

const webpackConfig = require('../config/webpack.basic');
const app = express();

app.use(express.static('../dist'));
app.use('/', pagesRouter);

const compiler = webpack(webpackConfig);
// compiler.run((err, stats) => {
//     if (err || stats.hasErrors()) {
//         // 在这里处理错误
//         return;
//     }
//
//     console.log(stats.toString({
//         chunks: false,  // 使构建过程更静默无输出
//         colors: true    // 在控制台展示颜色
//     }));
//
//
// });

compiler.watch({
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 1000
}, (err, stats) => {
    console.log(stats.toString({
        chunks: false,  // 使构建过程更静默无输出
        colors: true    // 在控制台展示颜色
    }));

    if (err || stats.hasErrors()) {
        // 在这里处理错误
        return;
    }
    console.log(stats.toString({
        chunks: false,  // 使构建过程更静默无输出
        colors: true    // 在控制台展示颜色
    }));
});

(async () => {
    const port  = await getPort({port: 3000});
    console.log(port);
    app.listen(port);
})();