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

var services = function(app){
    app.post('/public/gameArea.html', function(req, res){
        var data = {
            games_id: req.body.games_id,
            player_name: req.body.player_name,
            player_score: req.body.player_score,
            game_date: req.body.game_date
        };

        connection.query("INSERT INTO games SET ?", data, function(err){
            if (err){
                return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
            }
            else{
                return res.status(200).send(JSON.stringify({msg: "SUCCESS"}));
            }
        });
    });
};

module.exports = services;