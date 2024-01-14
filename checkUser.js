const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Witcher");
const User = require("./models/user.js").User;

const first_user = new User({
  username: "Vasy",
  password: "qwert"
});

first_user.save()
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    throw err;
  });