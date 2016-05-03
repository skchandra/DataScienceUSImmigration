var exphbs = require('express-handlebars');

var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/map', function(req, res){
    res.sendfile('./views/index.html');
});
app.get('/bar', function(req, res){
    res.sendfile('./views/indexbar.html');
});
var PORT = process.env.PORT || 5000;
    app.listen(PORT, function() {
      console.log("Application running on port: ", PORT);
});