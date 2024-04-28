const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!BigBang56',
    database: 'capstonehockeyv2'
})

connection.connect(function(err) {
    if(err) throw err;

    console.log("Database is connected");
});

module.exports = services;