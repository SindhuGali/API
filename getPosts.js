var express = require('express');
var router = express.Router();

var postsData = require('../Models/getPosts');
/* GET users listing. */
router.get('/', function(req, res, next) {
      res.send(JSON.stringify(postsData));
});

module.exports = router;
