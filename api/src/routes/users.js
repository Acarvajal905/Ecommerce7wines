const server = require('express').Router();
const { User } = require('../db.js');


server.post('/create', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(user)
        })
    } else {
        res.status(401).send({ msg: 'Invalid Email or Password' })
    }
})


server.get('/createadmin', async (req, res) => {
    try {
        const user = new User({
            name: 'Admin',
            email: 'admin@admin.com',
            password: '1234',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({ msg: error.message });
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