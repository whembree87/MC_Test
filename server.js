var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var path = require('path');

var connectionString = 'mongodb://whembree87:msdfall16@ds039281.mlab.com:39281/meaningcloud';
var port = 3000;
var db = mongoose.connect(connectionString, function(err, response) {
    if(err) {
        console.log('Error ', err);
    } else {
        console.log('Success, connected to ', connectionString);
    }
});

app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "this is the secret",
    resave : true,
    saveUninitialized : true
}));
app.use(cookieParser());
app.use(express.static(__dirname + '/client'));

require("./server/app.js")(app, db, mongoose);

app.listen(process.env.PORT || port);