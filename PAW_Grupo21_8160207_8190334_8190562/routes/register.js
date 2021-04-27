var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

module.exports = router;

router.post('/personal_data', function (req, res, next) {
  console.log(req.body);
  var birthDate = req.body.birthDate;

  

    let params = {
        ...req.body
    };
    
    res.status(200).render('personal_data', {title: 'Adicionar Informações Pessoais'});
});