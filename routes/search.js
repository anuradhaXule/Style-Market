var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('search',{ title: 'Search'});
});

app.use(bodyParser());



module.exports = router;
