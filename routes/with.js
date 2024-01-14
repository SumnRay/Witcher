const express = require('express');
const router = express.Router();
//const Witche = require("../models/witche").Witche;
var async = require("async")
var db = require('../mySQLConnect.js');
var checkAuth = require("./../middleware/checkAuth.js");

router.get("/:nick", checkAuth, function(req, res, next) {
  db.query(`SELECT * FROM witchers WHERE witchers.nick = '${req.params.nick}'`, (err,witchers) => {
  if(err) {
    console.log(err);
    if(err) return next(err)
    } else {
      if(witchers.length == 0) return next(new Error("Такого алхимика нет"))
        var witche = witchers[0];
        res.render('witche', {
          title: witche.title,
          picture: witche.avatar,
          desc: witche.about
  })
}
})

});

 /* GET users listing. */

/* Страница героев */
// router.get('/:nick', checkAuth, async function(req, res, next) {
//   try {
//     const [witche, witchery] = await Promise.all([
//       Witche.findOne({ nick: req.params.nick }),
//       Witche.find({}, { _id: 0, title: 1, nick: 1 })
//     ]);
  
//     if (!witche) {
//       throw new Error("Нет такого");
//     }
    
//     renderWitche(res, witche.title, witche.avatar, witche.desc, witchery);
//   } catch (err) {
//     next(err);
//   }
// });

// function renderWitche(res, title, picture, desc, witchery) {
//   console.log(witchery);

//   res.render('witche', {
//     title: title,
//     picture: picture,
//     desc: desc,
//     menu: witchery
//   });
// }
module.exports = router;
