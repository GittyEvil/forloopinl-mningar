var ps = require('prompt-sync');
var prompt = ps();

//pyramiden ska gå till max 5 så n = 5
let n = 5;
let string = "";

//översta halvan av pyramiden
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }

  //undre halvan av pyramiden
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      string += "*";
    }
    string += "\n";
  }


console.log(string);


//denna uppgift är felaktig, ingen while loop men jag hinner inte fixa