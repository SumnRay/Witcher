var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/geralt', function(req, res, next) {
  res.render('witch', {
  title: "Геральт",
  picture: "images/geralt.jpg",
  desc: "Главный герой произведения, ведьмак школы волка, охотник на чудовищ."
  });
  });
  router.get('/yennifer', function(req, res, next) {
    res.render('witch', {
    title: "Йеннифер",
    picture: "images/yennifer.jpg",
    desc: "Чародейка, супруга геральта."
    });
    });
    router.get('/ciri', function(req, res, next) {
      res.render('witch', {
      title: "Цири",
      picture: "images/ciri.jpg",
      desc: "Приемная дочь геральта, ведьмачка."
      });
      });

module.exports = router;
