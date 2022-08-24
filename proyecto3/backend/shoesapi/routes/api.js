var express = require('express');
var router = express.Router();

const Item = require('../models').item;  
const Compra = require('../models').compra;  

/* GET users listing. */
router.get('/items', function(req, res, next) {
    Item.findAll({  
        attributes: { exclude: ["updatedAt"] }  
    })  
    .then(items => {  
        res.json(items)  
    })  
    .catch(error => res.status(400).send(error))
});

router.get('/items/:category', function(req, res, next) {
    let categorySearch = req.params.category
    Item.findAll({  
        where:{
            category:categorySearch
        }
    })  
    .then(items => {  
        res.json(items)  
    })  
    .catch(error => res.status(400).send(error))
});

router.get('/items/item/:id', function(req, res, next) {
    let id = req.params.id
    Item.findOne({  
        where:{
            idItem:id
        }
    })  
    .then(item => {  
        res.json(item)  
    })  
    .catch(error => res.status(400).send(error))
});


module.exports = router;