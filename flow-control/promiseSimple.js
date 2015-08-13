var fs = require('fs');
var _Promise = require('bluebird');

var SEPARATOR = '\n-----------------\n';

_Promise.promisifyAll(fs);
var _file1;
fs.readFileAsync('./file1.txt').then(function(file1) {
  _file1 = file1;
  return fs.readFileAsync('./file2.txt');
}).then(function(file2) {
  return _file1 + SEPARATOR + file2;
}).then(console.log).catch(console.log);