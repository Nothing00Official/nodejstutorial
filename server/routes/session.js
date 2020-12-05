var express = require('express');
var router = express.Router();

const users = require('../users.json');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' })

router.post('/upload', multipartMiddleware, function (req, res, next) {
    res.render('upload', { title: 'Upload Test', fileName: req.files.filetoupload.name });
});

router.get('/upload', function (req, res, next) {
    res.render('upload', { title: 'Upload Test' });
});

router.get('/', function (req, res, next) {
    let username = req.body.username;
    let email = req.body.email;
    let psw = req.body.psw;
    let rpsw = req.body.rpsw;

    if (psw == rpsw) {
        res.render('account', { title: 'Prova', date: new Date(), user: username, mail: email });
    } else {
        res.send("<p style=\"color:red\">Le password non coincidono!</p>")
    }
});

router.post('/', function (req, res, next) {
    let username = req.body.username;
    let email = req.body.email;
    let psw = req.body.psw;
    let rpsw = req.body.rpsw;

    if (psw != rpsw) {
        res.send("<p style=\"color:red\">Le password non coincidono!</p>")
    } else {
        res.send("<p style=\"color:green\">Registrazione completa!</p>")
    }
});

router.get('/users', function (req, res, next) {
    res.render('users', { users: users });
});


module.exports = router;