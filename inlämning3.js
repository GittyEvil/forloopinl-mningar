var ps = require('prompt-sync');
var prompt = ps();


var siffra;
var i =0;
siffra = prompt('välj en siffra: ');

while( i < siffra) {
    i++
    console.log(siffra - i)
}



