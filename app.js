var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');
import * as jsonData from './index.html';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index);
}).listen(4000);



fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});