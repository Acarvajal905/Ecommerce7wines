const server = require('express').Router();
const { User } = require('../db.js');

//s36  retornar todos los usuarios
server.get('/',(req,res, next)=>{
    User.findAll()
    .then((user)=>{
        res.send(user);
    })
    .catch((err)=>{console.log(err)});
});

//s35 modificiar un usuario
server.put('/:id',(req,res)=>{
	User.update(req.body,
		{where:
			{id:req.params.id}
	})
	.then(function(user){
		if(!user){return res.status(404).end()}
		return res.json(user);
	})
	.catch((err)=>{console.log(err)});
});

//s34 crear un usuario
server.post('/',(req,res,next)=>{
    User.create(req.body)
    .then((user)=>{
        res.send(user)
    })
    .catch((err)=>{console.log(err)});
})

//s37 eliminar un usuario..
server.delete('/:id',(req,res)=>{
    User.destroy({where:
        {id:req.params.id}
    }).then((user) => {
        if (user===1) {
          res.json({message:'usuario eliminado'})  
        } 
    })
    .catch((err)=>{console.log(err)});
})

module.exports = server