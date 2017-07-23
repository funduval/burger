var connection = require('../config/connection.js');

function printXmarks(num){

	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('x');
	}
	return arr.toString();
}

function objToSql(ob){

	var arr = [];

	for (var key in ob){

		if (ob.hasOwnProperty(key)) {

			arr.push(key + '=' + ob[key]);
		}	
	}
	return arr.toString();
}

var orm = {

	all: function(tableInput, cb){

		var queryString = 'SELECT * FROM' + tableInput + ';';
		connection.query(queryString, function(err,result) {
			if(err)throw err;
			cb(result);
		});
	},

	create: function(table, cols, vals, cb){

		var queryString = 'INSERT INTO' + table;
		queryString = queryString + cols.toString();
		queryString = queryString + ' )';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printXmarks(vals.length);
		queryString = queryString + ') ';
		
		console.log(queryString);

		connection.query(queryString, vals, function(err,result) {
			if(err)throw err;
			cb(result);
		});
	},

	update: function(table, objColVals, eathood, cb){

		var queryString = 'UPDATE' + table;
		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + eathood;
		
		console.log(queryString);

		connection.query(queryString, function(err,result) {
			if(err)throw err;
			cb(result);
		});
	},
 
 	delete: function(table, eathood, cb){

		var queryString = 'DELETE FROM' + table;
		
		queryString = queryString + ' WHERE ';
		queryString = queryString + eathood;
		
		console.log(queryString);

		connection.query(queryString, function(err,result) {
			if(err)throw err;
			cb(result);
		});
	}

};

module.exports = orm;

