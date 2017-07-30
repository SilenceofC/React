var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
let address = 'mongodb://127.0.0.1:27017/yummy';


router.get('/',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let gallery = db.collection('home');
    if(err) throw err;
    gallery.find().toArray(function(err,result){
      if(err) throw err;
        res.send(result);
    })
  });
});


router.get('/home_one',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let one = db.collection('one');
    if(err) throw err;
    one.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});

router.get('/home_two',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let two = db.collection('two');
    if(err) throw err;
    two.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});


router.get('/product',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let product = db.collection('products');
    if(err) throw err;
    product.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});


router.get('/detail',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let detail = db.collection('detail');
    if(err) throw err;
    detail.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});


router.get('/details',function(req,res,next){
  mongoCt.connect(address,function(err,db){
    let details = db.collection('details');
    if(err) throw err;
    details.find().toArray(function(err,result){
      if(err) throw err;
      res.send(result);
    })
  });
});


router.post('/login', function(req, res, next) {
  let username = req.body['username'];
  let password = req.body['password'];
  let data={username};
  mongoCt.connect(address,function(err,db){
    if(err) throw err;
    let user = db.collection('user');
    user.find(data).toArray(function(err,result){
      // console.log(result);
      if(result.length > 0){
        if(result[0].username == username && result[0].password == password){
          res.send('success:'+ result[0].username);
        }else{
          res.send('forget');
        }
      }else{
        res.send('error');
      }
    });
  });
});




router.post('/regist', function(req, res, next) {
  let username = req.body['username'];
  let password = req.body['password'];
  let email = req.body['email'];
  let data={username,password,email};
  mongoCt.connect(address,function(err,db){
    if(err) throw err;
    let user = db.collection('user');
    user.find({username}).toArray(function(err,result){
      if(result.length>0){
        res.send('用户名已存在');
      }else{
        user.insertOne(data,function(err,result){
          if(err) throw err;
          res.send('注册成功');
        });
      }
    });
  });
});

router.post('/forget', function(req, res) {
  // res.setHeader('Access-Control-Allow-Credentials', true);
  let username = req.body['username'];
  let data={username};
  mongoCt.connect(address,function(err,db){
    if(err) throw err;
    let user = db.collection('user');
    user.find(data).toArray(function(err,result){
       res.send(result);
    });
  });
});



module.exports = router;


