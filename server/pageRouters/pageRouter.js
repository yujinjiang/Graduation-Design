const express = require('express');
const router =  express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.resolve('../dist/views/home.html'));
});

router.get('/:router', (req, res, next) => {
    const router = req.params.router;
    res.sendFile(path.resolve('../dist/views/' + router + '.html'));
});

module.exports = router;
