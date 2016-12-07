var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))

function respond(res, filePath) {
    res.sendFile(path.join(__dirname, filePath));
}

app.get('/', function(req, res) {
    respond(res, './public/index.html');
});

app.get('/todo', function(req, res) {
    respond(res, './public/todo.html');
});

app.listen(3000);