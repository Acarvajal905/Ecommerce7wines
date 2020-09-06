const jwt = require("jsonwebtoken");
const util = require("../util.js");


module.exports = function(req, res, next){
    
    if(req.method == "GET"){ //metodos GET pasan sin autenticar

        return next();

    }if(req.method == "POST" && req.path == "/users/"){ //POST para crear usuario pasa sin autenticar

        return next();

    }if(req.method == "PUT" && req.path.substr(0,15) == "/users/promote/"){ // PUT hacer admin pasa sin autenticar **es provisorio**
        
        return next();

    }if(req.method == "POST" && req.path == "/users/signin"){ // POST a iniciar sesion pasan sin auntenticar
        
        return next();

    }if(req.method != "GET" && req.path.includes("review")){ // POST | PUT | DELETE a review requiere ser usuario logueado 

        if(req.headers.authorization){

            let token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, util.secret, function(error,decoded){

                if(error) {

                    return res.status(403).send({error},{message: "no tiene permisos"});

                }
                if(decoded.user.isAdmin == false){
                    
                    return next();

                }else {

                    return res.status(403).send({message: "no tiene permisos"})

                }              
            })

        }else {
            
            return res.status(500).send({message: "no tiene permisos"})
        
        }
         
        // POST | DELETE | PUT a CATEGORIAS | PRODUCTOS | USUARIOS requieren ser admin
    }if(req.method != "GET" && ((req.path.substr(0,10) == "/products/" && !req.path.includes("review")) || req.path.substr(0,10) == "/category/" || req.path.substr(0,7) == "/users/" )){

        if(req.headers.authorization){

            let token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, util.secret, function(error,decoded){

                if(error) {

                    return res.status(403).send({error},{message: "no tiene permisos"});

                }
                if(decoded.user.isAdmin == true){
                    
                    return next();

                }else {

                    return res.status(403).send({message: "no tiene permisos"})

                }              
            })
        }else {

            return res.status(500).send({message: "no tiene permisos"})

        } 

    }
}