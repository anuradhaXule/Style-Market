var express = require('express');
//const {stylist} = require('sequelize');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Style Market' });
});


router.post('/search',function (req, res) {
    var stype = req.body.stype;
    var city = req.body.city;
    var sessiondate = req.body.date;
    var sessiontype = req.body.setype;
    //console.log(stype);
    res.render('search',{stype,city,sessiondate,sessiontype})
});


module.exports = router;
