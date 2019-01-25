const fs = require('fs');
const path = require('path');

function getTemplateNames() {
    return fs.readdirSync(path.resolve('../templates'));
}

function getEntries() {
    const entryNames = getTemplateNames();

    return entryNames.map(name => {
        const slicedName = name.slice(0, name.lastIndexOf('.'));
        return './entry/' + slicedName + '.js';
    });
}

function getTemplate() {
    
}

module.exports = {
    getTemplateNames,
    getEntries
};