var express = require('express');
var router = express.Router();
const Witche = require("../models/witche").Witche;
var User = require("./../models/user").User


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
/* POST login/registration page. */
router.post('/logreg', async function(req, res, next) {
  try {
    var username = req.body.username;
    var password = req.body.password;
    var user = await User.findOne({ username: username });
    if (user) {
      if (user.checkPassword(password)) {
        req.session.user = user._id;
        res.redirect('/');
      } else {
        res.render('logreg', { title: 'Вход' });
      }
    } else {
      var newUser = new User({ username: username, password: password });
      var savedUser = await newUser.save();
      req.session.user = savedUser._id;
      res.redirect('/');
    }
  } catch (err) {
    next(err);
  }
});



module.exports = router;