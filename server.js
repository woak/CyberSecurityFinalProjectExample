var express = require('express');
var assert = require('assert');
var path = require('path');
// Required to use HTTP query or post parameters
var bodyParser = require('body-parser');
require('dotenv').config();

var app = express();

// setup Postgres
const { Pool, Client } = require('pg');
const client = new Client();
client.connect();

app.set('port', 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow Cross Origin Resources Sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/username', function(req, res) {
    if (req.body.username) {
        var rows = null;
        var rowsString = null;
        client.query("SELECT password FROM users WHERE username = '" + req.body.username + "'")
            .then((psqlRes) => {
                rows = psqlRes.rows
                    // TODO
                console.dir(psqlRes);
                if (rows && rows.length != 0) {
                    rowsString = '<p>Password: </p>';
                    rows.forEach(function(row) {
                        rowsString += '<p>' + row.password + '</p>';
                    });
                } else {
                    rowsString = '<p>No user with that Username!</p>';
                }
                res.send(rowsString);
            })
            .catch((e) => {
                console.log(e.stack);
                res.send('<p> Database Error!</p>');
            });
    }
});

app.listen(app.get('port'), function() {
    console.log('SQL injection example server running on ' + app.get('port'));
});