var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Comic = require('../models/comics');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/saluda', (req, res, next) => {
  res.render('hola', { nombre: 'Alex' , colores:[
    {id:1, nombre:"rojo"},
    {id:2, nombre:"verde"},
    {id:3, nombre:"rosa"},
    {id:4, nombre:"blanco"}
  ]});
});

router.get('/alta', function(req, res, next) {
  res.render('alta_comic', {});
});

router.post('/grabar', function(req, res, next) {
  console.log(req.body);
  var nombre = req.body.nombre;
  var imagen = req.body.imagen;
  var poder = req.body.poder;
  var miComic=Comic({
    nombre: nombre,
    imagen: imagen,
    poderes: poder
  });

  router.get('/listar',(req,res,next)=>{
    Comic.find("",(err,data)=>{
      if (err) {
        res.send("Error: " + err);
      } else {
        res.render('Catalogo', {comics:data})
      }
    });
  });
  //Guardar en mongo
  miComic.save((err,data)=>{
    if(err) res.send("Error al guardar");
    else res.render("alta_ok", data);
  })

});

module.exports = router;
