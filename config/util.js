const fs = require('fs');
const path = require('path');
const webpackHtmlPlugin = require('html-webpack-plugin');

function getTemplateNames() {
    return fs.readdirSync(path.resolve('../templates'));
}

function getEntries() {
    const entryNames = getTemplateNames();
    const entries = {};
    entryNames.map(name => {
        const slicedName = name.slice(0, name.lastIndexOf('.'));
        entries[slicedName] = './entry/' + slicedName + '.js'
    });

    return entries;
}

function getHtmlPlugin() {
    const templateNames = getTemplateNames();
    return templateNames.map(name => {
        const slicedName = name.slice(0, name.lastIndexOf('.'));
        return new webpackHtmlPlugin({
            filename: '../views/' + slicedName + '.html',
            template: './templates/' + slicedName + '.html',
            inject: true,
            minify: true,
            chunks: [slicedName]
        })
    });
}

module.exports = {
    getEntries,
    getHtmlPlugin
};