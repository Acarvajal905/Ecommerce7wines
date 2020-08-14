const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then( function (products) {
			res.send(products);
		})
		.catch(next);
});
//S17 Crea ruta para agregar categorias de un producto.
server.post('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { name: req.params.idProduct } //buscas un name pero estas requiriendo el id del producto no deberia requerir el name?
	}).then(function (obj) {
		if (obj) return obj.update({ Category: req.params.idCategory });
	})
});
//S17 Crea ruta para sacar categorias de un producto.
server.delete('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { name: req.params.idProduct } //buscas un name pero estas requiriendo el id del producto no deberia requerir el name?
	}).then(function (obj) {
		if (obj) return obj.update({ Category: null });
	})
});

module.exports = server;
