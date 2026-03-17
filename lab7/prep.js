const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(function(a){
    rl.question(function(b){
        console.log(Number(a) + Number(b));
        rl.close();
    });
});