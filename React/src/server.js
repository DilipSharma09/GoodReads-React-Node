const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var Request = require("request");
var convert = require('xml-js');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/search', function (req, res) {

    //console.log("q value" +  JSON.stringify( req.query.q) );
    Request.get({
        url: "https://www.goodreads.com/search/index.xml?key=yXrAWWQil1xjldrZuf50uw&q=" + req.query.q,
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
    }, (error, response, body) => {
        var result1 = convert.xml2json(body, { compact: true });
         return res.send(JSON.parse(result1).GoodreadsResponse.search.results.work);
    });

});

app.get('/show', function (req, res) {

    //console.log("q value" +  JSON.stringify( req.query.q) );
    Request.get({
        url: "https://www.goodreads.com/book/show/" + req.query.bookId + ".xml?key=yXrAWWQil1xjldrZuf50uw",
        // url: "https://www.goodreads.com/search/index.xml?key=yXrAWWQil1xjldrZuf50uw&q=machine",       
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
    }, (error, response, body) => {
        var result1 = convert.xml2json(body, { compact: true });
        return res.send(JSON.parse(result1));
    });

});



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
