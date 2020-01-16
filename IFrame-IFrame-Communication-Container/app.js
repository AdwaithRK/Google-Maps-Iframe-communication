var express = require('express');
var app = express();
var http    = require('http');
var path    = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get( '/' ,function(req,res){res.render('container.html')} );


server = http.createServer(app);


server.listen(5000, function() {
  console.log(`Express server listening on port 5000`);
});