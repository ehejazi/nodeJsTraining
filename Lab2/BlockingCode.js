const fs = require('fs');
const FILE_NAME = './data.txt';
const stringGenerator = require('./stringGenerator');


const randomStr = stringGenerator.makeStr();

/** Switch the below to unblocking! You will have to use readFile and writeFile */
// write random content to file
fs.writeFileSync(FILE_NAME, randomStr);

// success confirmation
console.log(`Wrote ${randomStr} to file.txt.`);

// read contents from file
const incomingBuf = fs.readFileSync(FILE_NAME);
const readStr = incomingBuf.toString();
console.log('done reading from file');

// success confirmation
if(readStr === randomStr) {
    console.log('success read the right file contents!');
} else {
    console.log(`failiure got the wrong content: ${readStr}`);
}
console.log('-------------');
console.log('I am finally done');
console.log('---------------');
/** end */
