var orm = require('../config/orm.js');
console.log("Loaded burger")
var burger = {

all: function(cb) {

	orm.all('burgers', function(res){

		cb(res);

	});
},

create: function(cols, vals, cb) {

	orm.create('burgers', cols, vals, function(res){

		cb(res);

	});
},
update: function(objColVals, eaten, cb) {

	orm.update('burgers', objColVals, eaten, function(res){

		cb(res);

	});
	
  }

};

module.exports = burger;