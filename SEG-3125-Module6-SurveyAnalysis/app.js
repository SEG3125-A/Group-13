// Entry point for the application

// express application
var express = require('express');
// require the controller we make
var surveyController = require('./surveyController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static file serving
app.use(express.static('./public'));

// fire function from surveyController
surveyController(app);

// 404 page
app.use((req, res) => {
    res.status(404).render('404');
})

// listen to port
app.listen(3000);
console.log('listening port 3000');