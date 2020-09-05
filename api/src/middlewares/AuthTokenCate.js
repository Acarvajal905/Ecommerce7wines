const jwt = require("jsonwebtoken");
const util = require("../util.js");

module.exports = function(req, res, next){
  if(req.path.substr(0,10) == "/category/"){
    if(req.method == "GET"){
        next();
    }if(req.headers.authorization ){

        let token = req.headers.authorization.split(" ")[1]

        jwt.verify(token, util.secret, function(error,decoded){
            if(error) {
                return res.status(500).send({error},{message: "no tiene permisos"});
            }if(req.method != "GET"){
                
                if(decoded.user.isAdmin == true){
                    next();
                }else {
                    res.status(403).send({message: "no tiene permisos"})
                }
            }
        })
    } 
  }else next();
}