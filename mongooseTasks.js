const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Wit = mongoose.model('Wit', { name: String });

const wit = new Wit({name: 'Геральт'});
wit.save().then(() => console.log('Здравствуй'));