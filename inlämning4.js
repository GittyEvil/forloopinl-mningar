var ps = require('prompt-sync');
var prompt = ps();


var palindrom;

palindrom = prompt('skriv en sträng: ');

var i = 0;

const längd = palindrom.length;

var ingen_palindrom = 'Ingen palindrom';
var är_palindrom = 'är en palindrom';

while(i < längd/2) {
    i++
    if(palindrom[i] != palindrom[längd -1 -i]) {
        console.log(ingen_palindrom)
    }

    if(palindrom[i] == palindrom[längd -1 -i]) {
        console.log (är_palindrom)
    }
    break
} 
