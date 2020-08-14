const server = require('express').Router();
const { Product } = require('../db.js');


server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});
server.get('/products/',(req,res,next)=>{
	Product.findAll()
		.then(products=>{
			res.json(products);
		}).catch(next)
});
server.get('/search',(req,res,next) => {
	Product.findAll({
		where:{
			name:req.query.value,
			description:req.query.value,
		}
	}).then(function(products){
		res.render(products)
	}).catch(next);
});
//S17 Crea ruta para agregar categorias de un producto.
server.post('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { name: req.params.idProduct }
	}).then(function (obj) {
		if (obj) return obj.update({ Category: req.params.idCategory });
	})
});
//S17 Crea ruta para agregar categorias de un producto.
server.delete('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { name: req.params.idProduct }
	}).then(function (obj) {
		if (obj) return obj.update({ Category: null });
	})
});

module.exports = server;
