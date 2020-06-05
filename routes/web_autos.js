var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  request('http://localhost:3000/autos',(err,response,body)=>{
    res.render('web_autos', {data:JSON.parse(body)});
  });
});

module.exports = router;
