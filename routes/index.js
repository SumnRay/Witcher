var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/geralt', function(req, res, next) {
  res.send("<h1>Страница Геральта</h1>")
  });
  router.get('/yennifer', function(req, res, next) {
    res.send("<h1>Страница Йеннифер</h1>")
    });
    router.get('/ciri', function(req, res, next) {
      res.send("<h1>Страница Цири</h1>")
      });

module.exports = router;
