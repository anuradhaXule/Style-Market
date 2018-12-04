var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Style Market' });
//});

app.use(bodyParser());

app.get('/', function(req, res, next){
  res.sendFile('index.pug', {root: path.join(__dirname, './views')});
});

app.post('/')

router.get('/search',function (req, res) {
  var type = req.body.styleType;
  res.json({message: 'Hello world hello'} );
});

module.exports = router;
