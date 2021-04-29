var express = require('express');
var router = express.Router();

const {
  existingUsers,
  findUser
}=require("../existingUsers");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Review' });
});

module.exports = router;