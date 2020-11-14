var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresso', test: 'ciaoo', number: 23423, username: 'Nothing00', link: '/test', array: [
      "elemento 1",
      "elemento 2",
      "elemento 3",
      "elemento 4",
      "elemento 5",
      "elemento 6",
  ] });
});

router.get('/test', function(req, res, next) {
  res.render('test');
});


module.exports = router;
