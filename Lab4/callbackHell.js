const fs = require('fs');
const FILE_NAME = './data.txt';

// generate random string
function makeStr() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 200; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const randStr = makeStr();

/** fix CALLBACK HELL */
function WriteAndReadfile() {
  fs.writeFile(FILE_NAME, randStr, function(err) {
    if (err) {
      console.log(`Error occured during file write to file ${err}`);
    }
    console.log('-------------');
    console.log(`content written to file is ${randStr}`);
    console.log('-------------');
    fs.readFile(FILE_NAME, function(err, dataRead) {
      if (err) {
        console.log(`Error occured during file read File ${err}`);
      }
      console.log('-------------');
      console.log(`content of file read ${dataRead}`);
      console.log('-------------');

      console.log('we are done with CALLBACK');
    });
  });
}

console.log('starting');
WriteAndReadfile();

/** end */
