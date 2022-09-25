var ps = require('prompt-sync');
var prompt = ps();


var sträng;

sträng = prompt('skriv något för permutation');

let permutation = (sträng, result) => {
    if(sträng.length == 0) {
        console.log(result)
    }
    for(let i = 0; i< sträng.length; i++) {
    let rest= sträng.substring(0,i)+sträng.substring(i+1)
    permutation(rest, result +sträng[i])
    } 
}
permutation(sträng, '')