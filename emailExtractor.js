const fs = require('fs');
  

const data = fs.readFileSync('./test.txt',
            {encoding:'utf8', flag:'r'});
 
let wordArray = data.split(" ")

let counter = 0
 
for(i = 0; i < wordArray.length; i++) {
  if ((wordArray[i].includes('@softwire.com'))) { 
    counter += 1 
}
}
//This is now my testing ground for RegExes
console.log(counter)