var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE witchers;'
var seedQuery = 'INSERT INTO witchers (title, nick, avatar, about) VALUES ("Геральт", "Geralt", "/images/geralt.png", "Главный герой произведения, ведьмак школы волка, охотник на чудовищ."), ("Йеннифер", "Yennifer", "/images/yennifer.png", "Чародейка, супруга геральта."), ("Цири", "Ciri", "/images/ciri.png", "Приемная дочь геральта, ведьмачка.")';
var connection = mysql.createConnection({
    host : '127.0.0.1',
    port: '3306',
    user : 'root',
    password : '12345',
    database: 'witcher'
    });
    connection.connect()
    console.log("Running SQL seed...")
    // Drop content
    connection.query(drop, err => {
    if (err) {
    throw err
    }
    // Seed content
    connection.query( seedQuery, err => {
    if (err) {
    throw err
    }
    console.log("SQL seed completed!")
    connection.end()
    })
    })