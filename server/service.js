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

    app.get('/getGameData', function(req,res){ //returns data not in a specific order
        connection.query("SELECT * FROM games;", function(err, rows){
            if(err){
                return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
            }
            else{
                return res.status(200).send(JSON.stringify({msg: "SUCCESS", games: rows}));
            }
        })
    });

    app.get('/getTodayData', function(req,res){ //returns data from today
        connection.query("SELECT * FROM games WHERE game_date = CURDATE() ORDER BY player_score DESC", function(err, rows){
            if(err){
                return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
            }
            else{
                return res.status(200).send(JSON.stringify({msg: "SUCCESS", games: rows}));
            }
        })
    });

    app.get('/getWeekData', function(req,res){ //returns data entered the from today to 7 days ago
        connection.query("SELECT * FROM games WHERE game_date > DATE_SUB(NOW(), INTERVAL 1 WEEK) ORDER BY game_date DESC;", function(err, rows){
            if(err){
                return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
            }
            else{
                return res.status(200).send(JSON.stringify({msg: "SUCCESS", games: rows}));
            }
        })
    });

    app.get('/getHighestData', function(req,res){ //returns data in the order of highest score
        connection.query("SELECT * FROM games ORDER BY player_score DESC;", function(err, rows){
            if(err){
                return res.status(200).send(JSON.stringify({msg: "Error: " + err}));
            }
            else{
                return res.status(200).send(JSON.stringify({msg: "SUCCESS", games: rows}));
            }
        })
    });


};

module.exports = services;