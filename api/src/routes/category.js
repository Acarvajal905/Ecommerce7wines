const server = require('express').Router();
const { Category } = require('../db.js');

server.get('/', (req, res, next) => {
	Category.findAll()
		.then((categorys) => {
			res.send(categorys);
		})
		.catch(next);

});

//S18 Crea una categoría nueva.
server.post('/', (req, res, next) => {
	Category.create({
        name: req.body.name,
        description: req.body.description,
    })
    .then((category) => {
        return res.status(201).send(category);
    })
    .catch(next);
});

//S19

server.delete('/:id', (req, res) => {
    Category.findOne({
        where: { id: req.params.id }
    }).then(function (obj) {
        if (obj) return obj.update({ Category: null });
    })
});

//S20

server.put("/:id" , (req, res) => {
    Category.findOne({
        where: { id: req.params.id}
    }).then(function(obj) {
        if(obj) return obj.update({
            Category: req.params.Category
        })
       return res.send(obj);
    })
});
GET /products/categoria/:nombreCat

//S22

server.get("/:nombreCat" , (req, res) => {
    Category.findAll({
        where: { name: req.params.name }
    }).then(function (obj) {
        if(obj) {
            return res.send(obj);
        }
    })
})


module.exports = server;