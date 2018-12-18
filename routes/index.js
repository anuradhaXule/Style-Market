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
        order: [
            ['rating', 'DESC']
        ],
        limit:5

    }).then( (result) => {
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
    var loc = req.body.city;
    var sessiondate = req.body.date;
    var sessiontype = req.body.setype;
    console.log(stype);
    console.log(loc);
    //stylist
    var stylistWhereClause = {};
    if(stype !== "What type of freelancer?"){
        stylistWhereClause['type'] = stype;
    }
    //location
    var locInclude = {};
    locInclude['model'] = db.location;
    if(loc !== "Which location?"){
        var locWhereClause = {};
        locWhereClause['city'] = loc;
        locInclude['where'] = locWhereClause;
    }
    //session date


    db.stylist.findAll({
            where:
                stylistWhereClause
            ,
            include: [
                locInclude
            ]
        }
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

router.post('/profile',function (req, res) {
    var idStylist = req.body.id;
    console.log(idStylist);
    db.stylist.find({
            where:
            {
                id: idStylist
            },
            include:[db.location,db.session,db.rates]
        }
    ).then( (result) => {
            if(result!== null){
                res.render('profile', {selected: result})
            }
            else{
                res.send("Result Not Found")
            }
        }
    );

});

/*
router.post('/search',function (res, req) {
    var stype = req.body.stylist-type;
    var loc = req.body.stylist-city;
    var sessiondate = req.body.sty-date;
    var sessiontype = req.body.session-length;
    var styleskill = req.body.sty-skill;
    var minFee = req.body.sty-min;
    var maxFee = req.body.sty-max;
    var styGender = req.body.sty-gender;
    var styExperienced = req.body.sty-experience-level;
    var styRating = req.body.sty-rating;

    console.log(stype);
    console.log(loc);
    //stylist
    var stylistWhereClause = {};
    if(stype !== "What type of freelancer?"){
        stylistWhereClause['type'] = stype;
    }
    //location
    var locInclude = {};
    locInclude['model'] = db.location;
    if(loc !== "Which location?"){
        var locWhereClause = {};
        locWhereClause['city'] = loc;
        locInclude['where'] = locWhereClause;
    }
    //session date


    db.stylist.findAll({
            where:
            stylistWhereClause
            ,
            include: [
                locInclude
            ]
        }
    ).then( (result) => {
            if(result!== null){
                res.render('search')

            else{
                res.send("Result Not Found")
            }
        }
    );
});
*/


module.exports = router;
