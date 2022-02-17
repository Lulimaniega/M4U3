var express = require('express');
var router = express.Router();
<<<<<<< HEAD
=======
var usuariosModel = require(',/../../models/usuariosModel');

>>>>>>> 44f8f52cefe3d1f2b43b9ca5c5830f8795eea5b2

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
     layout:'admin/layout' 
    });
});

<<<<<<< HEAD
=======
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.render ('admin/login', {
     layout:'admin/layout' 
    });
});



router.post('/', async(req, res, next)=> {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario,password);

    if (data!=undefined){
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
      } else {
        res.render('admin/login',{
          layout: 'admin/layout',
          error: true
        });
      }
    } catch (error){
      console.log(error);
    }
});

>>>>>>> 44f8f52cefe3d1f2b43b9ca5c5830f8795eea5b2
module.exports = router;