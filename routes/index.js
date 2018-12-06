var express = require('express');
//const {stylist} = require('sequelize');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../models');
const Op = require('sequelize').Op;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


router.get('/', function(req, res, next) {
    db.stylist.findAll({
            // where :{city:sendObj.location,type: sendObj.category, country:sendObj.gender}
        order: [
            ['rating', 'DESC']
        ],
        limit:5
            }
        /* attributes: ['id','firstName', 'lastName', 'city','country'],
         include: [{
             model: db.Rate,
             where: {city: city}
         }, db.Skil, db.Image, db.Price]
     }*/
    ).then( (result) => {
            if(result!== null){
                res.render('index', {stylists: result})
            }
            else{
                res.render('index', { title: 'Style Market' });
            }
        }
    );
});


router.post('/search',function (req, res) {
    var stype = req.body.stype;
    var city = req.body.city;
    var sessiondate = req.body.date;
    var sessiontype = req.body.setype;
    console.log(stype);

    db.stylist.findAll({
            // where :{city:sendObj.location,type: sendObj.category, country:sendObj.gender}
            where: {
                [Op.or]: [{type: stype},{}]
            }}
        /* attributes: ['id','firstName', 'lastName', 'city','country'],
         include: [{
             model: db.Rate,
             where: {city: city}
         }, db.Skil, db.Image, db.Price]
     }*/
    ).then( (result) => {
            if(result!== null){
                res.render('search', {stylists: result})
            }
            else{
                res.send("Result Not Found")
            }
        }
    );

});


module.exports = router;
