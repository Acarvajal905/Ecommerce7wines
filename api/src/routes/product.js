const server = require('express').Router();
const { Product, Category, product_category } = require('../db.js');


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
// server.put('/:id', (req, res, next) => {
// 	Product.update(req.body,
// 		{
// 			where:
// 				{ id: req.params.id }
// 		})
// 		.then(function (product) {
// 			if (!product) { return res.status(404).end() }
// 			return res.json(product);
// 		})
// 		.catch(err => { console.log(err) });
// })
// server.put('/:producto', (req, res) => {
// 	const { categories } = req.body
// 	Product.findOne({
// 		where: { id: req.params.producto }
// 	}).then(product => {
// 		// Category.findOne({
// 		product.update(req.body)
// 		product.addCategory(product)
// 		// 	where: { id: categories }
// 		// }).then(category => {
// 		// })
// 	}).catch(err => { console.log(err) })
// })


// server.put('/:name', (req, res) => {
// 	Product.findOne({
// 		where: { name: req.params.name }
// 	}).then(product => {
// 		const categoriesId = product.categories;//Array de ids de categorias.
// 		Category.findOne({
// 			where: { id: categoriesId },
// 		}).then(categories => {
// 			product.update({
// 				name: req.body.name,
// 				description: req.body.description,
// 				price: req.body.price,
// 				stock: req.body.stock,
// 				image: req.body.image,
// 				content: req.body.content,
// 				percentage: req.body.percentage,
// 				country: req.body.country,
// 				colour: req.body.colour,
// 				categories: categories.id,
// 			}).then(product => { res.status(200).json({ product }); })
// 				.catch(error => { res.status(400).json({ error }) });
// 		}).catch(error => { res.status(400).json({ error }) });
// 	}).catch(error => { res.status(400).json({ error }) });
// });


server.put('/:id', (req, res) => {
	Product.update(req.body,
		{
			where:
				{ id: req.params.id }
		}).then(function (product) {
			if (!product) {
				return res.status(404).end()
			}
			return res.json(product);
		}).catch(err => { console.log(err) });
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
		.catch(err => { console.log(err) });
});

//S17 Crea ruta para sacar/agregar categorias de un producto.

//agrega una categoria a un producto.
server.post('/:idProd/category/:idCat', (req, res, next) => {
	idP = req.params.idProd;
	idC = req.params.idCat;
	product_category.create({
		categoryId: idC,
		productId: idP
	}).then((result) => {
		res.send(result)
	}).catch(err => { console.log(err) });
});
//Elimina la relacion entre un producto y una categoria.
server.delete('/:idProd/category/:idCat', (req, res, next) => {
	idP = req.params.idProd;
	idC = req.params.idCat;
	product_category.destroy({
		where: {
			categoryId: idC,
			productId: idP
		}
	}).then((result) => {
		if (result === 1) {
			res.json({ message: 'Categoria Borrada' });
		}
	})
		.catch(err => { console.log(err) });
});

module.exports = server;
