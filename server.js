var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape/:id', function(req, resp) {
  url = 'http://www.imdb.com/title/' + req.params.id;
  outputFile = process.argv[3] || 'output.json';

  request(url, function(err, response, body) {
    if(!err) {
      var $ = cheerio.load(body);

      var title, release, rating;
      var json = { title: '', release: '', rating: ''};
    }

    $('.header').filter(function() {
      var data = $(this).children();
      json.title = data.first().text();
      json.release = parseInt(data.last().children().text());
    });

    $('.star-box-giga-star').filter(function() {
      json.rating = parseFloat($(this).text());
    });

    var result = JSON.stringify(json);
    fs.writeFile(outputFile, result, function(err) {
      console.log('content of ' + url + ' written to ' + outputFile);
    });

    resp.end(result);
  });
});

app.listen(process.argv[2] || '8080');

exports = module.exports = app;
