const fs = require('fs');
const FILE_NAME = './data.txt';

// generate random string
function makeStr() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 20000; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const randStr = makeStr();

/** fix callback hell */
function startParsingFile(callback) {
  callback();
}

// convert this function to not use callback as tought by class
startParsingFile(function() {
  fs.writeFile(FILE_NAME, randStr, function() {
    fs.readFile(FILE_NAME, function(error, dataRead) {
    });
  });
});

/** end */
