
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');


 // at Object.create (/Users/fundaistvan/burger/config/orm.js:51:14)
 //    at Object.create (/Users/fundaistvan/burger/models/burger.js:16:6)
 //    at /Users/fundaistvan/burger/controllers/burgers_controller.js:29:9


router.get('/', function(req,res){

	res.redirect('/burgers')

});

router.get('/burgers', function(req,res){
	console.log("Hitting burger get route")
	burger.all(function(data){

		var hbsObject = { burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});	
});

//router.post('/burger/create', function (req, res) {
//   burger.insertOne(req.body.burger_name, function() {
//     res.redirect('/index');
//   });
// });

router.post("/", function (req, res) {
  burger.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function () {
    res.redirect("/burgers");
  });
});

router.put('/burgers/update/:id', function(req,res){

	console.log("Hitting burger put/update route")

	var condition = "id = " + req.params.id;

	console.log('condition', condition);

	burger.update({ eaten: req.body.eaten }, condition, function(){

			res.redirect('/burgers');

	});	
});

router.delete('/burgers/delete/:id', function(req,res){
	console.log("Hitting burger delete route")

	var condition = "id = " + req.params.id;

	burger.delete(condition, function(){

		res.redirect('/');
	});

});

module.exports = router;
