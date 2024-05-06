const path = require('path');

//Page listeners
var router = function(app){
    app.get('/', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../public/html/airhockey.html"))
    });

    app.get('/leaderboardScreen', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../public/html/leaderboardScreen.html"))
    });

    app.get('/gameArea', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../public/html/gameArea.html"))
    });
}

module.exports = router;