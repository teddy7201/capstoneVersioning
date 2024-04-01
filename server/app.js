const express = require('express');
const cors = require('cors');
const { createServer } = require('node:http');
var path = require('path');
const { join } = require('node:path');
const bodyParser = require('body-parser');


const app = express();

/*app.use(cors);

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
});*/


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/public", express.static(path.resolve(__dirname + "/../public/")));

//app.use("/public", express.static(path.join(__dirname, '/public')));

var router = require('./router.js');
router(app);

const server = createServer(app);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/airhockey.html');
// })

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})
