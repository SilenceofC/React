var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 脚手架' });
});

// router.get('/reg',function(req, res){
//   res.render('reg');
// });
//
// router.get('/login',function(req, res){
//   res.render('login');
// });


module.exports = router;
