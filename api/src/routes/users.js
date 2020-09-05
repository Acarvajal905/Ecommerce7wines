const server = require('express').Router();
const { User, Product, Order } = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../util.js');

// CREA UN USUARIO
server.post('/', (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: password
    }).then(user => {
        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
        });
        res.send({
            user: user,
            token: token
        });

    }).catch(err => { console.log(err) });

});
//INICIO DE SESION
server.post('/signin', (req, res) => {
    let { email, password } = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then(user => {

        if (!user) {
            res.status(404).send({ msg: 'Usuario no encontrado' });
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.send({
                    user: user,
                    token: token
                })

            } else {
                res.status(401).send({ msg: 'Constraseña incorrecta' })
            }
        }
    })
})
// TRAE TODOS LOS USUARIOS
server.get('/', (req, res) => {
    User.findAll({
        include: Order
    })
    .then((users) => {
        res.send(users);
    }).catch(err => { console.log(err) });
})

//TRAE TODOS LOS USUARIOS LOGEADOS

//MODIFICAR USUARIO (USAR PARA ASIGNAR ROL DE ADMIN)
server.put('/:id', (req, res) => {
    User.update(req.body,
        {
            where:
                { id: req.params.id }
        }).then(function (user) {
            if (!user) {
                return res.status(404).end()
            }
            return res.json(user);
        }).catch(err => { console.log(err) });
})

 //TRAE TODOS LOS USUARIOS LOGEADOS
server.get('/signin/', (req, res) => {
    User.findAll()
        .then((users) => {
            res.send(users);
        }).catch(err => { console.log(err) });
})

//TRAE A UN USUARIO LOGEADO 
// server.get('/signin/:id', (req, res) => {
//     User.findOne({
//         where: {id: req.params.id}
//     })
//         .then((users) => {
//             res.send(users);
//         }).catch(err => { console.log(err) });
// })
 
//NO SIRVE BUSCAR USUARIOS
server.get('/search', (req, res) => {
    if (req.body.email) {
        var Useremail = req.body.email;
        User.findOne({
            where: { email: Useremail }
        }).then((user) => {
            res.send(user)
        })
        // }
        //  else if (!req.query.email && !req.query.password) {
        //     console.log('Usuario no encontrado')
        // }
    }
})

//s37 eliminar un usuario..
server.delete('/:id', (req, res) => {
    User.destroy({
        where:
            { id: req.params.id }
    }).then(function (user) {
        if (user === 1) {
            res.json({ message: 'usuario eliminado' })
        }
    })
        .catch((err) => { console.log(err) });
});

//PROMUEVE A ADMIN
server.put('/promote/:id', (req, res) => {
    User.findOne({
        where: { id: req.params.id }
    })
        .then(user => {
            user.update({
                isAdmin: true
            }).then(user => { res.status(200).json({ user }) })
        }).catch(error => { res.status(400).json({ error }) })
});
//GET A 1 USER
server.get('/:id', (req, res, next) => {
    User.findByPk(req.params.id, {
        // include: user.isAdmin
        include: Order
    })
    .then((user) => {
        if (!user) { return res.status(404).end(); }
        return res.json(user)
    })
    .catch(err => { console.log(err) });
});


//POST /users/:idUser/cart
//Crear Ruta para agregar Item al Carrito
server.post('/:id/cart', (req, res, next) => {
    User.findByPk(req.params.id)
        .then((user) => {
            if (!user) { return res.status(404).end()}
            Order.create(req.body)
            .then((order) => {
               const userOrd = user.addOrder(order);
                 res.send(userOrd);
            });
        })
        .catch(err => { console.log(err) });
});
module.exports = server