const express = require('express');
const pagesRouter = require('./pageRouters/pageRouter');
const getPort = require('get-port');
const app = express();

app.use(express.static('../dist'));
app.use('/', pagesRouter);

(async () => {
    const port  = await getPort({port: 3000});
    console.log(port);
    app.listen(port);
})();