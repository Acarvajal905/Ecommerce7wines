const server = require('express').Router();
const { Order, Product, User, order_products, Order_Product } = require('../db.js');
const order = require('../models/order.js');

// s44 retorne todas las ordenes
server.get('/',(req,res,next)=>{
    Order.findAll({
        include: Product
    })
    .then((order) => {
        if (!order) {return res.status(404).end()}
        res.send(order)
    })
    .catch(err => { console.log(err) });
});

// Crea una nueva orden
server.post('/', (req, res, next) => {
	Order.create(req.body)
    .then((orden) => {
         res.status(201).send(orden);
    })
    .catch(err => { console.log(err) });
});

//s47 modificar una orden
server.put('/:id',(req,res,next)=>{
    Order.update(req.body,
        {
            where:
            { id:req.params.id }
    }).then((order) => {
        if (!order) {return res.status(404).end() }
        return res.json(order);
    })
    .catch(err => { console.log(err) });;
});

//S44  ruta que retorna todas las ordenes con el status que recibe por params.
server.get('/status/:status', (req, res, next) => {
    const {status} = req.params;
    console.log(status);
    Order.findAll({
        where: {
            status: status
        }
    }).then(result => {
        res.status(200).send(result);
    }).catch(err => { console.log(err) })
});

// s46 ruta que retorne  una orden en particular
server.get('/:id',(req,res,next)=>{
    Order.findByPk(req.params.id,{
        include: Product
    })
    .then((order) => {
        if (!order) {return res.status(404).end()}
        return res.json(order);
    })
    .catch(err => { console.log(err) });
});

//s45 retornar todas las ordenes de un usuario
server.get('/:id/',(req,res)=>{
    Order.findOne({
        where:{id:req.params.id},
        include: User
    })
    .then((order) => {
        res.send(order);
    })
    .catch(err => { console.log(err) });
});

//S38 Crear Ruta para agregar Item al Carrito
//ruta /order/:idOrd/product/idProd
//recibe id de orden e id de producto crea la relacion entre ellos.
/* server.post('/:idOrd/product/:idProd', (req, res, next) => {
	idP = req.params.idProd;
	idO = req.params.idOrd;
	Order_Product.create({
        where: { 
            orderId: idO,
            productId: idP
        }
    }).then((result) => {
		res.send(result)
	}).catch(err => { console.log(err) });
});
 */
//orders/:id/product/:id
server.post('/:idOrd/product/:idProd', (req, res, next) => {
	idP = req.params.idProd;
    idO = req.params.idOrd;
    const quantity = req.body.quantity; //cantidad de productos.
	Order.findByPk(idO)
    .then((order) => {
        Product.findByPk(idP)//busco el producto
        .then((product) => {
            console.log(product)
           order.addProduct(product, { through: { cantidad: quantity } });
           console.log(order);
           res.json("success");
        })
        .catch(err => { console.log(err) })
    })
    .catch(err => { console.log(err) })
});


/* server.post('/product/:id', (req, res, next) => {
    Product.findByPk(req.params.id)
        .then((product) => {
            console.log(product)
            if (!product) { return res.status(404).end() }
            Order.create(req.body)
                .then((order) => {
                    console.log(order);
                    const ordProd = order.addOrder(product);
                    res.send(ordProd);
            })
        })
        .catch(err => { console.log(err) });
}); */

module.exports = server;