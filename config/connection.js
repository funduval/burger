var mysql = require('mysql');
var connection;

	

connection = mysql.createConnection({
	host: 'i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'bq7w8ln6328iwonk',
	password: "tsn2diixaa3q273b",
	database: 'wxg4j4mdz1ffdfg6'
});



connection.connect(function(err){

	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

