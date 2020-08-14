const server = require('express').Router();
const { Category } = require('../db.js');

//S19

server.delete('/products/category/:id', (req, res) => {
    Category.findOne({
        where: { id: req.params.id }
    }).then(function (obj) {
        if (obj) return obj.update({ Category: null });
    })
});

//S20

server.put("/products/category/:id" , (req, res) => {
    Category.findOne({
        where: { id: req.params.id}
    }).then(function(obj) {
        if(obj) return obj.update({
            Category: req.params.Category 
        })
    })
});