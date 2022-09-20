var ps = require('prompt-sync');
var prompt = ps();

var heltal;
var sum = 0;

heltal = prompt('skriv ett heltal: ');

for(let i=1; i < heltal; i++ ) {
    sum=sum+i
    
}

console.log(sum)