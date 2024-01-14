var express = require('express');
var router = express.Router();
const Witche = require("../models/witche").Witche;
var User = require("./../models/user").User


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    req.session.greeting = "Hi!!!"
    res.render('index', { title: 'Express', counter:req.session.counter });
  } catch (err) {
    next(err);
  }
});


router.get('/logreg', async function(req, res, next) {
  res.render('logreg', { title: 'Вход',error:null}); 
});

router.post('/logreg', async function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  try {
      const user = await User.findOne({ username });
      
      if (user) {
          if (user.checkPassword(password)) {
              req.session.user = user._id;
              res.redirect('/');
          } else {
              res.render('logreg', { title: 'Вход', error: 'Неверный пароль' });
          }
      } else {
          const newUser = new User({ username, password });
          await newUser.save();
          req.session.user = newUser._id;
          res.redirect('/');
      }
  } catch (err) {
      next(err);
  }
});
    
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{error:null});
  });
  
  router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
  });
    
module.exports = router;
module.exports = router;