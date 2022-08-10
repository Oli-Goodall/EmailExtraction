// Include fs module
const fs = require('fs');
  
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./test.txt',
            {encoding:'utf8', flag:'r'});
 
let wordArray = data.split(" ")

let counter = 0
 
for(i = 0; i < wordArray.length; i++) {
  if ((wordArray[i].includes('@softwire.com'))) { 
    counter += 1 
}
}

console.log(counter)