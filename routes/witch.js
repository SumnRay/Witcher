var express = require('express');
var router = express.Router();
var Witches = require("../models/witches").Witches

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся witch');
});
/* Страница героев */
router.get("/:nick", async (req, res, next) => {
    try {
      const witches = await Witches.findOne({ nick: req.params.nick });
      console.log(witches);
      if (!witches) {
        throw new Error("Нет такого!");
      }
      res.render('witch', {
        title: witches.title,
        picture: witches.avatar,
        desc: witches.desc
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
