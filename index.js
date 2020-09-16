var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, '/')));
app.use('**', express.static(__dirname + '/index.html'));

app.listen(3000, (req, res, next) => {

    console.log('App running on port 3000');
})