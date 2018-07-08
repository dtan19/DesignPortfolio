const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();


const logger = function(req, res, next){
	console.log('logging...');
    next();
}


app.get('/',function(req,res){
  res.render('web');
  //It will find and locate web.ejs from View or Scripts
});

app.get('/portfolio',function(req,res){
  res.render('portfolio');
  //It will find and locate portfolio.ejs from View or Scripts
});

app.get('/product',function(req,res){
  res.render('product');
  //It will find and locate product.ejs from View or Scripts
});

app.get('/userguide',function(req,res){
  res.render('userguide');
  //It will find and locate userguide.ejs from View or Scripts
});

app.get('/photography',function(req,res){
  res.render('photography');
  //It will find and locate photography.ejs from View or Scripts
});

app.get('/vids',function(req,res){
  res.render('vids');
  //It will find and locate vids.ejs from View or Scripts
});

app.get('/resume',function(req,res){
  res.render('resume');
  //It will find and locate resume.ejs from View or Scripts
});

app.get('/saferide',function(req,res){
  res.render('saferide');
  //It will find and locate saferides.ejs from View or Scripts
});

app.get('/travler-case-study',function(req,res){
    res.render('travler-case-study');
    //It will find and locate travler-case-study.ejs from View or Scripts
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
