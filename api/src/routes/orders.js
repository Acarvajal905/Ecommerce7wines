const server = require('express').Router();


//s47 modificar una orden
server.put('orders/:id',(req,res,next)=>{
    Orders.update(req.body,
        {where:
        {id:req.params.id}
    }).then(function(order){
        if (!order) {return res.status(404).end() }
        return res.json(order);
    })
    .catch(err => next(err) );
})

// s46 ruta que retorne  una orden en particular
server.get('orders/:id',(req,res,next)=>{
    Orders.findByPk(req.params.id)
    .then(function(order){
        if (!order) {return res.status(404).end()}
        return res.json(order)
    })
    .catch(err => next(err) );
})

// s44 retorne todas las ordenes
server.get('/orders',(req,res,next)=>{
    Orders.findAll()
    .then(function(order){
        if (!order) {return res.status(404).end();}
        return res.json(order)
    })
    .catch(err => next(err) );
})

//s45 retornar todas las ordenes de los usarios
server.get('/users/:id/orders',(req,res)=>{
    Orders.findOne(
        {where:
            {id:req.params.id}
        })
        .then(function(order){
            res.json(order)
        })
        .catch(err => next(err) );
})
module.exports=server;