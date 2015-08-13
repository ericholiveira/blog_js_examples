var fs = require('fs');
var _Promise = require('bluebird');
var co = require('co');

var SEPARATOR = '\n-----------------\n';

_Promise.promisifyAll(fs);
co(function*() {
  var result =
    yield _Promise.join(fs.readFileAsync('./file1.txt'), fs.readFileAsync(
      './file2.txt'));
  console.log(result[0] + SEPARATOR + result[1]);
}).catch(console.log);