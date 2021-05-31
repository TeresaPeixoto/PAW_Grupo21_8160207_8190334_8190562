var User = require('../models/user');
const bcrypt = require('bcryptjs');

var jwt =  require ('jsonwebtoken');
var authconfig =require('../config/authconfig');

var authController={};

authController.login = function(req,res){
    console.log("chegou ao controlador");
    User.findOne({email: req.body.email}, function(err, user){

        if(err) return res.status(500).send('Erro no servidor');
        if(!user) return res.status(404).send('Useer não encontrado');
        console.log(user);
        console.log(req.body);
        //var passwordIsValid = bcrypt.compareSync(req.body.password, user.pass);
        if(req.body.password!=user.password) return res.status(401).send({auth:false , token: null});

        var token = jwt.sign({id: user._id}, authconfig.secret,{
            expiresIn:86400 // expira em 24 horas
        });

        res.status(200).send({auth:true, token:token,userName:user.userName});

    });
}

authController.logout = function (req, res){
    res.status(200).send({auth:false, token:null});
}


module.exports = authController;