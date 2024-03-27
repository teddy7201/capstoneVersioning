const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/public", express.static(path.join(__dirname, '/public')));

var router = require('./router.js');
router(app);

const server = createServer(app);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/airhockey.html');
// })

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})




// const express = require('express');
// const path = require('path');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(cors);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use('/public', express.static(path.resolve(__dirname + "/../public/")));

// var server;
// var port = process.env.PORT || process.env.NODE_PORT || 3000;

// var router = require('./router.js');
// router(app);



// server = app.listen(port, function(err) {
//     if(err) throw err;

//     console.log("Listening on port: " + port);
// });

