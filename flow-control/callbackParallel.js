var fs = require('fs');

var SEPARATOR = '\n-----------------\n';
var count = 0;
var content1, content2;

count++;
fs.readFile('./file1.txt', function(err, data) {
  count--;
  if (err) {
    return console.log(err);
  } else {
    content1 = data;
    if (count === 0) {
      console.log(content1 + SEPARATOR + content2);
    }
  }
});

count++;
fs.readFile('./file2.txt', function(err, data) {
  count--;
  if (err) {
    return console.log(err);
  } else {
    content2 = data;
    if (count === 0) {
      console.log(content1 + SEPARATOR + content2);
    }
  }
});