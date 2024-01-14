var express = require('express');
var router = express.Router();
const Witche = require("../models/witche").Witche


/* GET home page. */  
  router.get('/', async(req, res, next) => {
    try{
      const menu = await Witche.find({}, { _id: 0, title: 1, nick: 1 });
      res.render('index', { title: 'Witcher', menu:menu,counter:req.session.counter });
    }
    catch (err) {next(err);}
});
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
  });
  


module.exports = router;