var express = require('express');
var router = express.Router();

const executeQuery = require('../modules/sqlscript.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'TubeStudents', date: new Date() });
});

router.get('/registrazione-studente', function (req, res, next) {
  res.render('studentregister', { title: 'TubeStudents - Registrazione Studente' });
});

router.post('/registrazione-studente', function (req, res, next) {
  executeQuery(`select id from users where email = '${req.body.email}'`, function (error, results) {
    if (results.length > 0) {
      res.send("La mail inserita già esiste!");
    } else {
      if (req.body.psw != req.body.rpsw) {
        res.send("Le password inserite non coincidono!");
      } else {
        executeQuery(`insert into users(name,email,company,picture) values('${req.body.username}','${req.body.email}','${req.body.school}','http://placehold.it/32x32')`, function (er, ress) {
          res.send("Utente registrato con successo!")
        });
      }
    }
  });
});

router.get('/assistenza', function (req, res, next) {
  res.render('support', { title: 'TubeStudents - Assistenza' });
});

router.get('/login', function (req, res, next) {
  if (req.session.user) {
    return res.redirect('/account');
  }
  res.render('login', { title: 'TubeStudents - Account' });
});

module.exports = router;
