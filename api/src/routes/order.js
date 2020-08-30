const server = require('express').Router();
const { Order, Product, User } = require('../db.js');

// s44 retorne todas las ordenes
server.get('/',(req,res,next)=>{
    Order.findAll()
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

// s46 ruta que retorne  una orden en particular
server.get('/:id',(req,res,next)=>{
    Order.findByPk(req.params.id)
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
server.post('/:idOrd/product/:idProd', (req, res, next) => {
	idP = req.params.idProd;
	idO = req.params.idProd;
	order_product.create({
		orderId: idO,
		productId: idP
	}).then((result) => {
		res.send(result)
	}).catch(err => { console.log(err) });
});

module.exports = server;