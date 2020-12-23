var express = require('express');
var router = express.Router();

const executeQuery = require('../modules/sqlscript.js');

router.get('/', function (req, res, next) {
    res.send("Sei sulle API")
});

router.get('/users', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    executeQuery(`select * from ns_users`, [], function (error, results) {
        res.send({
            result: results
        })
    });
});

router.post('/users', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    executeQuery(`insert into users(name,email,company,picture) values(?,?,?,'http://placehold.it/32x32')`, [req.body.name, req.body.email, req.body.school], function (er, ress) {
        if (er) {
            res.send({
                result: [
                    "KO",
                    er
                ]
            })
        } else {
            res.send({
                result: [
                    "OK"
                ]
            })
        }
    });
});

router.get('/cart', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    executeQuery(`select * from ns_cart inner join ns_users on ns_cart.idUser = ns_users.id inner join ns_products on ns_cart.idProd = ns_products.id where ns_users.mail = ?;`, [req.query.email], function (error, results) {
        res.send({
            result: results
        })
    });
});

module.exports = router;