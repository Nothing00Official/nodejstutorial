var express = require('express');
var router = express.Router();

const users = require('../users.json');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' })
const executeQuery = require('../modules/sqlscript.js');
const session = require('express-session');

router.use(session({ secret: 'asdas' }));

router.post('/upload', multipartMiddleware, function (req, res, next) {
    if(!req.session.user){
        return res.redirect('/');  
    }
    res.render('upload', { title: 'Upload Test', fileName: req.files.filetoupload.name });
});

router.get('/upload', function (req, res, next) {
    if(!req.session.user){
        return res.redirect('/');  
    }
    res.render('upload', { title: 'Upload Test' });
});


router.get('/', function (req, res, next) {
    if (req.session.user) {
        return res.render('account', { title: 'Prova', user: req.session.user });
    }
    return res.redirect('/');
});

router.get('/logout', function (req, res, next) {
    if (req.session.user) {
       req.session.user = null;
       req.session.destroy();
    }
    return res.redirect('/');
});

router.post('/', function (req, res, next) {
    let username = req.body.username;
    let psw = req.body.psw;
    executeQuery(`select id from users where email = ? and psw = ?`, [username, psw], function (error, results) {
        if (error) throw error;
        if (results.length == 0) {
            res.send("Username o password non corretti!");
        } else {
            req.session.user = username;
            return res.redirect('/account');
        }
    });
});

router.get('/users', function (req, res, next) {
    if (!req.session.user) {
        return res.redirect('/');
    }
    executeQuery("select * from users", [], function (error, results) {
        if (error) throw error;
        res.render('users', { users: results });
    });
});

router.get('/users/:email', function (req, res, next) {
    if (!req.session.user) {
        return res.redirect('/');
    }
    executeQuery(`select * from users where email = ?`, [req.params.email], function (error, results) {
        if (error) throw error;
        res.render('user', results[0]);
    });
});

module.exports = router;