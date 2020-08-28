const server = require('express').Router();
const { User } = require('../db.js');
// const { signin } = require('../../../client/src/components/Redux/Actions/index.js');

// CREA UN USUARIO
server.post('/', (req, res) => {
    const signinUser = req.body
    console.log({ signinUser });
    User.create(signinUser)
        .then((user) => {
            return res.send(user)
        }).catch(err => { console.log(err) });
});
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
    if (req.query.email || req.query.password) {
        var Useremail = req.query.email;
        var Userpassword = req.query.password;
        // if (req.query.email || req.query.password) {
        User.findAll({
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