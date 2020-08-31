const server = require('express').Router();
const { User } = require('../db.js');
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
    User.findAll()
        .then((users) => {
            res.send(users);
        }).catch(err => { console.log(err) });
})

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



// //s36  retornar todos los usuarios
// server.get('/', (req, res, next) => {
//     User.findAll()
//         .then((user) => {
//             res.send(user);
//         })
//         .catch((err) => { console.log(err) });
// });

// //s35 modificiar un usuario
// server.put('/:id', (req, res) => {
//     User.update(req.body,
//         {
//             where:
//                 { id: req.params.id }
//         })
//         .then(function (user) {
//             if (!user) { return res.status(404).end() }
//             return res.json(user);
//         })
//         .catch((err) => { console.log(err) });
// });

// //s34 crear un usuario
// server.post('/', (req, res, next) => {
//     User.create(req.body)
//         .then((user) => {
//             res.send(user)
//         })
//         .catch((err) => { console.log(err) });
// })

// //s37 eliminar un usuario..
// server.delete('/:id', (req, res) => {
//     User.destroy({
//         where:
//             { id: req.params.id }
//     }).then((user) => {
//         if (user === 1) {
//             res.json({ message: 'usuario eliminado' })
//         }
//     })
//         .catch((err) => { console.log(err) });
// })


module.exports = server