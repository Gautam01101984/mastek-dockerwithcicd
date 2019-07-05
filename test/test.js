//Simple async test for Http 200 response code using supertest
'use strict';
var request = require("supertest"),
 app = require("../app").getApp;
 describe('GET /', function(){
	it('expects Http Response 200', function(done){
		request(app)
		.get('/')
		.expect(200,done);
	});
 });
