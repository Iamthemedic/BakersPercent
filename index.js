console.log("Add Ingredients: ")

const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

rl.question("What is your name?", function(name){
    rl.question("where do you live?", function(country) {
        console.log(`${name} is a citizen of ${country}`);
        rl.close();
    })
});

rl.on("close",function() {
    console.log("BYE BYE!!!");
    process.exit(0);
});



// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });
