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

const server = http.createServer(function (req, res) {
  router.css(request, response);
  router.home(request, response);

});
server.listen(3000);

//css router
const serveCSS = function (req, res) {
    if (req.url.indexOf('css') !== -1) {
        const css = fs.createReadStream(__dirname + req.url, 'utf8');
        css.pipe(res);
    }
};

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})
