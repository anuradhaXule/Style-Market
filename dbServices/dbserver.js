const db = require('../models');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

db.sequelize.sync().then(console.log("Model created.."));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


