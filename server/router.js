const path = require('path');

//Page listeners
var router = function(app){
    app.get('/', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../public/airhockey.html"))
    });

    app.get('/leaderboardScreen', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../public/leaderboardScreen.html"))
    });

    app.get('/gameArea', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../public/gameArea.html"))
    });
}

module.exports = router;