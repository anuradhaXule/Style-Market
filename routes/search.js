var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('search', { title: 'Style Market' });
});

router.post('/',function (req, res) {
    var stype = req.body.stype;
    var city = req.body.city;
    var sessiondate = req.body.date;
    var sessiontype = req.body.setype;
    console.log(stype);
});

module.exports = router;









