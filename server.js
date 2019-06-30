var app = require('./app');
var port =  4000;
var server = app.listen(port, function() {
     console.log('Express server running on port  ' + port);
});