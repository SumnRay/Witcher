const express = require('express');
const router = express.Router();
const Witche = require("../models/witche").Witche;
var async = require("async")

 /* GET users listing. */

/* Страница героев */
router.get('/:nick', async function(req, res, next) {
  try {
    const [witche, witchery] = await Promise.all([
      Witche.findOne({ nick: req.params.nick }),
      Witche.find({}, { _id: 0, title: 1, nick: 1 })
    ]);
  
    if (!witche) {
      throw new Error("Нет такого");
    }
    
    renderWitche(res, witche.title, witche.avatar, witche.desc, witchery);
  } catch (err) {
    next(err);
  }
});

function renderWitche(res, title, picture, desc, witchery) {
  console.log(witchery);

  res.render('witche', {
    title: title,
    picture: picture,
    desc: desc,
    menu: witchery
  });
}
module.exports = router;
