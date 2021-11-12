var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Guia de regulação do SAMU 192' });
});

router.get('/hospitais', function(req,res) {
  res.render('index', {title: 'Hospitais'})
})

module.exports = router;
