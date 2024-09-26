/**
 * Reads two ints from strInput, adds them and prints result
 * I learnt that:
 * - js was not made for reading from strIn ;)
 */

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('First number: ', (num1) => {
    rl.close();
    const rl2 = readline.createInterface({ input, output });

    rl2.question('Second number: ', (num2)=>
    {
        console.log("resuslt is " + (parseInt(num1) + parseInt(num2)));
        rl2.close();
    });
    
});
