var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var Witch = require("./models/witch").Witch
var witch = new Witch({
title: "Геральт",
})
console.log(witch)
witch.save()