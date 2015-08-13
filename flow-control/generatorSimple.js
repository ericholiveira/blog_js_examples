var fs = require('fs');
var _Promise = require('bluebird');
var co = require('co');

var SEPARATOR = '\n-----------------\n';

_Promise.promisifyAll(fs);
co(function*() {
  var file1 =
    yield fs.readFileAsync('./file1.txt');
  var file2 =
    yield fs.readFileAsync('./file2.txt');
  console.log(file1 + SEPARATOR + file2);
}).catch(console.log);