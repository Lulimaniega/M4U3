var express = require('express');
const async = require('hbs/lib/async');
const { route } = require('.');
const { getMaxListeners } = require('../app');
var router = express.Router();
var nodemailer =  require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
    isContacto: true });
});



router.post('/', async (req, res, next) =>{

  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.tel;
  var comentarios = req.body.comentarios;
  console.log(req.body);

  var obj = {
    to: 'maniegaluli@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + "se contacto a traves y quiere mas info a este correo: " + email + ". <br> Además, hizo el siguiente comentario:  " + comentarios + ". <br> Su tel es " + telefono
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
  var info = await transporter.sendMail(obj);

  res.render('contacto', {
    isContacto: true,
    message: 'Mensaje enviado correctamente',
  });

});



module.exports = router;
