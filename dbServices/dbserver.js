const db = require('../models');

db.sequelize.sync().then(console.log("Model created.."));