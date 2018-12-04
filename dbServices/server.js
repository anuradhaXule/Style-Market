const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

const Stylist = require('../models').stylist;
const Location = require('../models').location;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) =>{
    Stylist.findAll({
        include:[Location]
    }).then(stylists => {
        res.render('')
    });
})

app.listen(8080,()=>console.log('Listing to port 8080'));
