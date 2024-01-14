var express = require('express');
var router = express.Router();
const Witche = require("../models/witche").Witche

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    router.get('/', function(req, res, next) {
      res.cookie('greeting', 'Hi!!!').render('index', { title: 'Express', menu:menu });
      });
    const menu = await Witche.find({}, { _id: 0, title: 1, nick: 1 });
    req.session.greeting = "Hi!!!"
    res.render('index', {
      title: 'Witchery',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;