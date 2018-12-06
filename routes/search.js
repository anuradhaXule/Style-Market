var express = require('express');
var router = express.Router();
var db = require('../models');
const Op = require('sequelize').Op;


router.get('/', function(req, res, next) {
    res.render('search', { title: 'Style Market' });
    console.log("fdfgdfgdfgdfg");
});

router.post('/',function (req, res) {
    var stype = req.body.stype;
    var city = req.body.city;
    var sessiondate = req.body.date;
    var sessiontype = req.body.setype;

    console.log(stype);

    db.stylist.findAll({
            // where :{city:sendObj.location,type: sendObj.category, country:sendObj.gender}
            where: {
                [Op.or]: [{type: " "},{}]
            }

    }
        /* attributes: ['id','firstName', 'lastName', 'city','country'],
         include: [{
             model: db.Rate,
             where: {city: city}
         }, db.Skil, db.Image, db.Price]
     }*/
    ).then( (result) => {
            if(result!== null){res.json(result)}
            else{res.send("Result Not Found")}
        }
    );

    console.log(stype);
});

module.exports = router;









