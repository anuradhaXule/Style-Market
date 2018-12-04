var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Style Market' });
});

app.use(bodyParser());

router.post('/search',function (req, res) {
    res.render('search');
    console.log("Data passed");
});

module.exports = router;
