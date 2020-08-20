const server = require('express').Router();

//s35 modificiar un usuario
server.put('/:id',(req,res)=>{
	Users.update(req.body,
		{where:
			{id:req.params.id}
	})
	.then(function(user){
		if(!user){return res.status(404).end()}
		return res.json(user);
	})
	.catch((err)=>{console.log(err)});
});

//s36  retornar todos los usuarios
server.get('/',(req,res)=>{
    Users.findAll()
    .then((user)=>{
        res.send(user);
    })
    .catch((err)=>{console.log(err)});
})

//s34 crear un usuario
server.post('/',(req,res,next)=>{
    Users.create(req.body)
    .then((user)=>{
        res.send(user)
    })
    .catch((err)=>{console.log(err)});
})

//s37 eliminar un usuario..
server.delete('/:id',(req,res)=>{
    Users.destroy({where:
        {id:req.params.id}
    }).then((user) => {
        if (user===1) {
          res.json({message:'usuario eliminado'})  
        } 
    })
    .catch((err)=>{console.log(err)});
})