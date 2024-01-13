var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var schema = mongoose.Schema({ name: String })
schema.methods.obmen = function(){
console.log(this.get("name") + " Сказал 'Здравствуй'")
}
var Wit = mongoose.model('Wit', schema)

var Wit = new Wit({ name: 'Геральт' });
Wit.save().then(() => Wit.obmen());