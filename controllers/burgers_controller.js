
const express = require('express');
const burger = require('../models/burger.js');
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

	console.log("Hitting burger post route")

	burger.create(['name', 'eaten'], 

		[req.body.name, req.body.eaten],

		function(){
			
			res.redirect('/burgers')
	});	
});

router.put('/burgers/update/:id', function(req,res){

	console.log("Hitting burger put/update route")

	var eaten = "id = " + req.params.id;

	console.log('eaten', eaten);

	burger.update({ eaten: req.body.eaten }, eaten, function(){

			var eaten = 'id = '+ req.params.id;
			res.redirect('/burgers');

	});	
});

router.delete('/burgers/delete/:id', function(req,res){
	console.log("Hitting burger delete route")

	var eaten = "id = " + req.params.id;

	burger.delete(eaten, function(){

		res.redirect('/');
	});

});

module.exports = router;
