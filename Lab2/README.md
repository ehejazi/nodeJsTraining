# Read and Write File

## 1. Open BlockingCode.js
## 2. Note the functionality of the program.
The program will:
* stringGenerator.js is a file that has randomized content.
* Log success message of writing
* Read content from the same file
* Log success message of reading and print out content

*Note: all of this happens syncronously at this time.*

## 3. Switch functionality to async.

You will have to change ```writeFileSync``` to ```writeFile``` and ```readFileSync``` to ```readFile```.
You will have to use Callback
  * Create a ```Callback``` function to read from file
  * Switch writeFileSync to writeFile
  * call the Callback 
