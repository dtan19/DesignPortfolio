const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

/*const logger = function(req, res, next){
	console.log('logging...');
	next();
}

app.use(logger);*/

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set Static Path
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	res.render('index', {
		title: 'Cust'
	});

});

app.listen(3000, function(){
	console.log('Server Started on Port 3000...');
})