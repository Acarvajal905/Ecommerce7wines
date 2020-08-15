const server = require('express').Router();
const { Product } = require('../db.js');


//S21 : Crear ruta que devuelva todos los productos
server.get('/', (req, res, next) => {
	Product.findAll()
		.then((products) => {
		res.send(products);
	})
	.catch(next);
});

//S24 : Crear ruta de producto individual, pasado un ID que retorne un producto con sus detalles
server.get('/:id',(req,res,next)=>{
	Product.findByPk(req.params.id)
	.then((product) => {
		if(!product){return res.status(404).end();}
		return res.json(product)
	})
	.catch(err =>next(err))
});
//S23 : Crear ruta que retorne productos segun el keyword de búsqueda
/* server.get('/search',(req,res,next) => {
	Product.findAll({
		where:{
			name:req.query.value,
			description:req.query.value,
		}
	}).then((products) => {
		res.render(products)
	}).catch(next);
}); */

server.get('/search',(req,res,next) => {
    if (req.query.name || req.query.description) {
        var namePro= req.query.name;
        var descriptionPro= req.query.description;
        if (req.query.name && !req.query.description) {
            Product.findAll({
                where:{name:namePro}
            }).then((product)=>{
                res.send(product)
            })
        }else if (!req.query.name && req.query.description) {
            Product.findAll({
                where:
                {description:descriptionPro}
            }).then((product)=>{
                res.send(product)
            })
        }
    }
});
//S25 : Crear ruta para crear/agregar Producto
server.post('/',(req,res,next)=>{
	Product.create(req.body)
	.then((product) =>{
		if(!product){return res.status(400).end();}
		return res.send(product)
	}).catch(err=>next(err = "error fatal"));
});

//S26 : Crear ruta para Modificar Producto
server.put('/:id',(req,res,next)=>{
	Product.update(req.body,
		{where:
			{id:req.params.id}
	})
	.then(function(product){
		if(!product){return res.status(404).end()}
		return res.json(product);
	})
	.catch(err=>next(err));
})


//S27 Crear ruta para eliminar producto
server.delete('/:id',(req,res,next)=>{
	Product.destroy({where:
		{id: req.params.id}
	}).then(function(product){
		if(product === 1){
            res.json({ message: 'Producto borrado'});
        }
		/* {return res.status(404) .end();}
		return res.status(200).end(); */
	})
	//.catch(err=>next(err));
});

//Para estos hay que leer la documentancion
//S17 Crea ruta para agregar categorias de un producto.
server.post('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { id: req.params.idProduct }
	}).then((obj) => {
		if (obj) return obj.update({ Category: req.params.idCategory });
	})
});
//S17 Crea ruta para sacar categorias de un producto.
server.delete('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { id: req.params.idProduct }
	}).then((obj) => {
		if (obj) return obj.update({ Category: null });
	})
});

module.exports = server;
