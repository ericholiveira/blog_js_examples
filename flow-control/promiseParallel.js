var fs = require('fs');
var _Promise = require('bluebird');

var SEPARATOR = '\n-----------------\n';

_Promise.promisifyAll(fs);
_Promise.join(fs.readFileAsync('./file1.txt'), fs.readFileAsync('./file2.txt'))
  .then(function(result) {
    console.log(result[0] + SEPARATOR + result[1]);
  }).catch(console.log);