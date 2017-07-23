const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use(methodOverride('_method'));
var exphbs = require ('express-handlebars');
app.engine('handlebars', exphbrs({defaultLayout:'main'}));
app.set('view-engine', 'handlebars');

var routes = require ('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 3080;
app.listen(port);

