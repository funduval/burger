
const express = require('express');
const burger = require('../models/burger');
const router = express.Router();




router.get('/', function(req,res){

	res.redirect('/burgers');

});

router.get('/burgers', function(req,res){
	console.log("Hitting burger get route")
	burger.all(function(data){

		var hbsObject = { burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});	
});

router.post('/burgers/create', function(req,res){
	burger.create(['name', 'eaten'], 
		[req.body.name, req.body.eaten],
		function(){
			res.redirect('/burgers')
	});	
});

router.put('/burgers/update/:id', function(req,res){
	
	var condition = "id = " + req.params.id;
	console.log('condition', condition);

	burger.update({ eaten: req.body.eaten }, condition, function(){

			var condition = 'id = '+ req.params.id;
			res.redirect('/burgers');

	});	
});

router.delete('/cats/delete/:id', function(req,res){
	var condition = "id = " + req.params.id;
	burger.delete(condition, function(){

		res.redirect('/');
	});

});

module.exports = router;
