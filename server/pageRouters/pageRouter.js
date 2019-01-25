const express = require('express');
const router =  express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.resolve('../dist/views/home.html'));
});

module.exports = router;
