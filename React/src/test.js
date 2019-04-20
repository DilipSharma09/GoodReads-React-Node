var expect  = require('chai').expect;
var request = require('request');

    describe ('Test Node API', function() {
        it('API Status', function(done){
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        //Here we are expecting Total searched book data to be count 20
        //Will Pass
        it('Correct Total Content', function(done) {
            request('http://localhost:8080/search?q="test"' , function(error, response, body) {
            var dd= JSON.parse(response.body).length;
                expect(dd).to.equal(20);
                done();
            });
        });

         //Here we are expecting Total searched book data to be count 21
         // Will Fail
        it('INCorrect Total Content', function(done) {
            request('http://localhost:8080/search?q="test"' , function(error, response, body) {
            var dd= JSON.parse(response.body).length;
                expect(dd).to.equal(21);
                done();
            });
        });


    });

