var express = require('express');
var app = require('app');
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
var port = process.env.PORT || 3000;

app.listen(port);
app.post('/', function(req, res) {

    var title = req.body.title;
    var body = req.body.body;

    module.exports.title = title;
    module.exports.body= body;
});
