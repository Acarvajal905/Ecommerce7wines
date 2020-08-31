const server = require('express').Router();
const { Reviews, User} = require('../db.js');


//s54 agregar reviews a un producto
//POST /product/:id/review

server.post('/:id/review', (req, res) =>{
	const review= req.body;
	const id= req.params.id;
	return Reviews.create({
		calificacion: review.calificacion,
		descripcion: review.descripcion,
        productId: id,
        userId: review.userId
	})
	.then((resv) => {
		console.log(resv);
		return res.send(resv)
	})
	.catch(err => {console.log(err)});

});

//s55 ruta para editar una reviews de un producto
//PUT /product/:id/review/:idReview

//// NO ANDA ///
server.put('/:id/review/:idReview', (req, res, next) => {
    const review= req.body;
    const id= req.params;
    console.log(id.idReview)
    
   return  Reviews.update({
        calificacion: review.calificacion,
		descripcion: review.descripcion,
        productId: id.id,
        userId: review.userId
      }, {
        where: {
          id: id.idReview
        }
    })
    .then(update => { if(!update)
        {return res.status(404).end()
        } return res.json({ message: 'actualizado' });
    })
	.catch(err => { console.log(err) });
})

//S56 crear ruta para deletear una review
// delete /:id/review/:idReview

server.delete('/:id/review/:idReview', (req, res, next) => {
	Reviews.destroy({
		where:
			{ id: req.params.idReview }
	}).then(function (review) {
		if (review === 1) {
            res.json({ message: 'borrado' });
		}
		
	})
	
});

// s57 crear una ruta para retornar todas las reviews de un producto
// GET /product/:id/review/
server.get('/:id/review/', (req, res, next) => {
	Reviews.findAll({
        where: { productId: req.params.id },
        include: User
    })
		.then((reviews) => {
			res.send(reviews);
		})
		.catch(err => { console.log(err) });
});





module.exports = server;
