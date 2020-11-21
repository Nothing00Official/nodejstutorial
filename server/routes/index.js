var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TubeStudents', date: new Date()});
});

router.get('/registrazione-studente', function(req, res, next) {
  res.render('studentregister', { title: 'TubeStudents - Registrazione Studente'});
});

router.get('/assistenza', function(req, res, next) {
  res.render('support', { title: 'TubeStudents - Assistenza'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'TubeStudents - Account'});
});


module.exports = router;
