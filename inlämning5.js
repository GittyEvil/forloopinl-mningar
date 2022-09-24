var ps = require('prompt-sync');
var prompt = ps();


const lägsta_talet = parseInt(prompt('Enter lower number: '));
const största_talet = parseInt(prompt('Enter higher number: '));

console.log(`primtalen mellan ${lägsta_talet} och ${största_talet} är: `);


for (let i = lägsta_talet; i <= största_talet; i++) {
    let flag = 0;

    /*
    kollar ifall de finns tal som blir 0 mellan 2 inputs, de som får resultatet 0
    efter divisionen får flag = 1 och visar att de inte är primtal för nästa if sats
    */

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if numret är delbart med 1 och enbart sig själv = primtal
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}