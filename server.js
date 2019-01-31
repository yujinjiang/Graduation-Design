console.log()
const process = require('process');
const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const webpackConfig = require('./config/hot.config.js');
const app = express();

const DIST_DIR = path.join(__dirname, "dist"); // 设置静态访问文件路径
const PORT = 9090; // 设置启动端口
const complier = webpack(webpackConfig);

let devMiddleware = webpackDevMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true //向控制台显示任何内容
});

let hotMiddleware = webpackHotMiddleware(complier,{
    log: false,
    heartbeat: 2000,
});

app.use(devMiddleware)
app.use(hotMiddleware);
app.use(express.static(DIST_DIR));

app.listen(PORT,function(){
    console.log("成功启动：localhost:"+ PORT)
});