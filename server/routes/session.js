var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    res.render('account', { title: 'Prova', date: new Date() });
});

module.exports = router;