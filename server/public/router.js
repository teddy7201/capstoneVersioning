const path = require('path');

//Page listeners
var router = function(app){
    app.get('/', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../public/airhockey.html"))
    });

    app.get('/leaderboardScreen', function(req, res){
        res.status(200).sendFile(path.join(__dirname + "/../public/leaderboardScreen.html"))
    });

    // app.get('/browse-libary', function(req, res){
    //     res.status(200).sendFile(path.join(__dirname + "/../client/browse-library.html"))
    // });
}

module.exports = router;