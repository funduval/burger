router.get('/', function(req,res){

	res.redirect('/cats');

});

router.get('/burgers', function(req,res){
	burger.all(function(data){

		var hbsObject = { burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});	
});

router.post('/burgers/create', function(req,res){
	burger.create(['name', 'eathood'], 
		[req.body.name, req.body.eathood],
		function(){
			res.redirect('/burgers');
	});	
});

router.put('/burgers/update/:id', function(req,res){
	
	var eathood = 'id = '+ req.params.id;
	console.log('eathood', eathood);

	burger.update({ eaten: req.body.eaten }, eathood, function(){

			var eathood = 'id = '+ req.params.id;
			res.redirect('/burgers');

	});	
});

router.delete('/cats/delete/:id', function(req,res){


}
