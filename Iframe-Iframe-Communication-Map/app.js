var express = require('express');
var app = express();
var http    = require('http');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var path    = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.get( '/' ,function(req,res){res.render('map.html')} );


server = http.createServer(app);


server.listen(4000, function() {
  console.log(`Express server listening on port 4000`);
});

