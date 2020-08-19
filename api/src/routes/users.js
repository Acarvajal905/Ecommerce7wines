const server = require('express').Router();

//s35 modificiar un usuario
server.put('/users/:id',(req,res)=>{
	Users.update(req.body,
		{where:
			{id:req.params.id}
	})
	.then(function(user){
		if(!product){return res.status(404).end()}
		return res.json(user);
	})
	.catch(err=>next(err));
});

//s36  retornar todos los usuarios
server.get('/users',(req,res)=>{
    Users.findAll()
    .then((user)=>{
        res.send(user);
    })
})

//s34 crear un usuario
server.post('/users',(req,res,next)=>{
    Users.create(req.body)
    .then((user)=>{
        res.send(user)
    })
    .catch(err=>next(err))
})

//s37 eliminar un usuario..
server.delete('/users/:id',(req,res)=>{
    Users.destroy({where:
        {id:req.params.id}
    }).then(function(user){
        if (user===1) {
          res.json({message:'usuario eliminado'})  
        } 
    })
})