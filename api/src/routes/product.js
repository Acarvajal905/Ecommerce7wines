const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then( function (products) {
			res.send(products);
		})
		.catch(next);
});
//S21 : Crear ruta que devuelva todos los productos
server.get('/products/',(req,res,next)=>{
	Product.findAll()
		.then(products=>{
			res.json(products);
		}).catch(next)
});
//S24 : Crear ruta de producto individual, pasado un ID que retorne un producto con sus detalles
server.get('/products/:id',(req,res,next)=>{
	Product.findById(req.params.id)
	.then(function(product){
		if(!product){return res.status(404).end();}
		return res.json(product)
	})
	.catch(err =>next(err))
});
//S23 : Crear ruta que retorne productos segun el keyword de búsqueda
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
//S25 : Crear ruta para crear/agregar Producto
server.post('/products',(req,res,next)=>{
	Product.create(req.body)
	.then(function(product){
		if(!product){return res.status(400).end();}
		return res.status(201).json(product)
	})
})
//S26 : Crear ruta para Modificar Producto
server.put('/products/:id',(req,res,next)=>{
	Product.update({id:req.params.id})
	.then(function(product){
		if(!product){return res.status(404) .end();}
		return res.json(product);
	})
	.catch(err=>next(err));
})
//S27 Crear ruta para eliminar producto
server.put('/products/:id',(req,res,next)=>{
		Product.update({id:req.params.id})
		.then(function(product){
			if(!product){return res.status(404) .end();}
			return res.status(200).end();
		})
		.catch(err=>next(err));
})
//S27 Crear ruta para eliminar producto
server.delete('/products/:id',(req,res,next)=>{
	Product.findByIdAndRemove(req.params.id)
	.then(function(product){
		if(!product){return res.status(404) .end();}
		return res.status(200).end();
	})
	.catch(err=>next(err));
});
//S17 Crea ruta para agregar categorias de un producto.
server.post('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { id: req.params.idProduct }
	}).then(function (obj) {
		if (obj) return obj.update({ Category: req.params.idCategory });
	})
});
//S17 Crea ruta para sacar categorias de un producto.
server.delete('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { id: req.params.idProduct }
	}).then(function (obj) {
		if (obj) return obj.update({ Category: null });
	})
});

module.exports = server;
