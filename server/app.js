const express = require('express');
const cors = require('cors');
var path = require('path');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

var server;
var port = process.env.PORT || process.env.NODE_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/public", express.static(path.resolve(__dirname + "/../public/")));


var router = require('./router.js');
router(app);

var services = require('./service.js')
services(app);

server = app.listen(port, function(err) {
    if(err) throw err;

    console.log("Listening on port: " + port);
});
