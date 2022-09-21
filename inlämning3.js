var ps = require('prompt-sync');
var prompt = ps();


var siffra;
var i =0;

let string = "";
siffra = prompt('välj en siffra: ');

while( i < siffra) {
    i=100;
    for (let i = 0;i <= siffra; i++) {
        for (let j = 1; j <= siffra - i + 1; j++) {
          string += siffra - j - i + 2;
        }
        string += "\n";
      }
    
    console.log(string)
}



