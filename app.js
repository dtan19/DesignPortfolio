const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();


const logger = function(req, res, next){
	console.log('logging...');
    next();
}

/*app.get('/', function(req, res){
    res.render('index');

});*/

app.get('/',function(req,res){
  res.render('index');
  //It will find and locate index.html from View or Scripts
});

app.get('/portfolio',function(req,res){
  res.render('portfolio');
  //It will find and locate index.html from View or Scripts
});

//css router
const serveCSS = function (req, res) {
    if (req.url.indexOf('css') !== -1) {
        const css = fs.createReadStream(__dirname + req.url, 'utf8');
        css.pipe(res);
    }
};


app.use(logger);

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set Static Path
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views/css')));


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})
