//sample node.js web app for mastek docker CI

'use strict';
var express = require('express'),
app = express();
app.set('views','views');
app.set('view engine','jade');
app.get('/',function(req,res){
	res.render('home',{});
});
console.log("hello");
app.listen(8080);
module.exports.getApp = app;
