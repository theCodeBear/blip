var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'blip' });
});

router.get('/login', function(req, res) {
  res.render('registration', { title: 'sign up'});
});

module.exports = router;
