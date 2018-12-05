var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const db = require('../models');
const Sequelize = require('sequelize');

module.exports.primarySearch = function (req, res) {
    var stytype = req.body.stype;
    console.log(stytype);
};

var app = express();
app.use(bodyParser());
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('search',{ title: 'Search'});
});







module.exports = router;
