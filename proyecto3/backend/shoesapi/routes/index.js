var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

const Sequelize = require('sequelize');
const Item = require('../models').item;  



/* GET home page. */
router.get('/', function(req, res, next) {
  Item.findAll({  
    attributes: { exclude: ["updatedAt"] }  
  })  
  .then(items => {  
      res.render('index', { title: 'Express', arrItems: items });  
  })  
  .catch(error => res.status(400).send(error))


});

module.exports = router;
