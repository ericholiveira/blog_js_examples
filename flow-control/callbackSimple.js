var fs = require('fs');

var SEPARATOR = '\n-----------------\n';
fs.readFile('./file1.txt', function(err, file1) {
  if (err) {
    return console.log(err);
  } else {
    fs.readFile('./file2.txt', function(err, file2) {
      if (err) {
        return console.log(err);
      }
      console.log(file1 + SEPARATOR + file2);
    });
  }
});