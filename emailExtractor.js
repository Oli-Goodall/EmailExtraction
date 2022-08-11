const fs = require('fs');
const { getMaxListeners } = require('process');
  

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

//RegEx for this: [^ \r\n]*@softwire\.com\b

let emailAddresses = data.match(/[^ \r\n]*@*\.*\b/g)

let dict = {};

let domainNames = []

for(i = 0; i < emailAddresses.length; i++){
  if (emailAddresses[i].match(/@.*\..*\b/g)){
    domainNames.push(emailAddresses[i].match(/@.*\..*\b/g))
  }
}

// dict["key"] = 1

// for(i = 0; i < domainNames.length; i++){
//   if (!dict[domainNames[i]]){
//     dict[domainNames[i]] = 1
//   }
// }

domainNames.forEach(domainName => {
  if (!dict[domainName]){
        dict[domainName] = 1
      } 
})



// console.log(dict["key"])


console.log(dict)
//console.log(emailAddresses.length)


// dict = {
//   @softwire.com : 1,
//   @techswitch.co.uk : 1,
//   @getmail.com : 1
// }