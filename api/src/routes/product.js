const server = require('express').Router();
const { Product, Category } = require('../db.js');


//S21 : Crear ruta que devuelva todos los productos
server.get('/', (req, res, next) => {
	Product.findAll({
		include: Category
	})
	.then((products) => {
		res.send(products);
	})
	.catch(err => { console.log(err) });
});

//S24 : Crear ruta de producto individual, pasado un ID que retorne un producto con sus detalles
server.get('/:id', (req, res, next) => {
	Product.findByPk(req.params.id, {
		include: Category
	})
		.then((product) => {
			if (!product) { return res.status(404).end(); }
			return res.json(product)
		})
		.catch(err => { console.log(err) });
});
//S23 : Crear ruta que retorne productos segun el keyword de búsqueda

server.get('/search', (req, res, next) => {
	if (req.body.name || req.body.description) {
		var namePro = req.body.name;
		var descriptionPro = req.body.description;
		if (req.body.name && !req.body.description) {
			Product.findOne({
				where: { name: namePro }
			}).then((product) => {
				res.send(product)
			})
		} else if (!req.body.name && req.body.description) {
			Product.findOne({
				where:
					{ description: descriptionPro }
			}).then((product) => {
				res.send(product)
			}).catch(err => { console.log(err) });
		}
	}
});
//S25 : Crear ruta para crear/agregar Producto
// server.post('/', (req, res, next) => {
// 	const item = req.body
// 	console.log({ item });
// 	Product.create(item)
// 		.then((product) => {
// 			// Category.findOne({
// 			// 	where: { id: categoryId },
// 			// }).then(result => {
// 			// 		product.addCategory(result);
// 			// 	})
// 			// 	console.log(result);
// 			return res.send(product)
// 		}).catch(err => { console.log(err) });
// });

server.post('/', (req, res, next) => {
    const item = req.body
    console.log({ item });
    Product.create(item)
        .then((product) => {
			const categoriesId = item.categories;//Array de ids de categorias.
			//Por ahora solo trae un solo id 
            //categoriesId.forEach(categoryId => {
                Category.findOne({
                    where: { id: categoriesId },
           // })
             }).then(result => {
                     product.addCategory(result);
                 })
                 //console.log(result);
            return res.send(product)
        }).catch(err => { console.log(err) });
	});

//S26 : Crear ruta para Modificar Producto
server.put('/:id', (req, res, next) => {
	Product.update(req.body,
		{
			where:
				{ id: req.params.id }
		})
		.then(function (product) {
			if (!product) { return res.status(404).end() }
			return res.json(product);
		})
		.catch(err => { console.log(err) });
})


//S27 Crear ruta para eliminar producto
server.delete('/:id', (req, res, next) => {
	Product.destroy({
		where:
			{ id: req.params.id }
	}).then(function (product) {
		if (product === 1) {
			res.json({ message: 'Producto borrado' });
		}
		return next;
		/* {return res.status(404) .end();}
		return res.status(200).end(); */
	})
	.catch(err=>{console.log(err)});
});

//S17 Crea ruta para sacar categorias de un producto.
server.delete('/:idProducto/category/:idCategory', (req, res) => {
	Product.findOne({
		where: { id: req.params.idProducto }
	}).then((result) => {
		if (result) return result.update({ Category: null });
	})
	.catch(err => { console.log(err) });
});

module.exports = server;
