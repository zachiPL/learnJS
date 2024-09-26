/**
 * 1. read run arguments from input,
 * 2. try to convert them to integers
 * 3. write sum of all integers to stdOut
 * 
 * What i've learnt?
 * - args are easier than readLine
 * - arrays works like intended
 * - isNaN .. huh
 */

const process = require('node:process');
const argv = process.argv;

var sum = 0;
var sliced = argv.slice(2);
for(var i = 0; i < sliced.length; i++)
{
    var k = parseInt(sliced[i]);
    if(isNaN(k) == false)
        sum += k;
}
console.log(sum);