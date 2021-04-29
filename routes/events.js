var express = require('express');
var router = express.Router();

router.get('/create', function(req, res, next) {
  res.render('createEvent', { title: 'Criar evento' });
});

router.post("/create", function(req, res, next) {
    res.render('createEvent', { title: 'Criar evento' });
  });

module.exports = router;