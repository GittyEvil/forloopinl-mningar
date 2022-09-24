var ps = require('prompt-sync');
var prompt = ps();


var siffra;
var i =0;

let string = "";
siffra = prompt('välj en siffra: ');


/*denna uppgift skapade massa problem för mig, fattar inte hur du kan göra den simpel med while loop så 
jag löste det sort of med en for loop, funkar som den ska men om du ändrar i till ett litet tal eller i++ kommer den gå i oändligheten
*/
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



