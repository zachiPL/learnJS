/**
 * Original idea: https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md
 * 
 * 1. read binary number as argument from input 
 * 2. prints as decimal
 * 
 * Example usage:
 * > node bin2dec.js 101
 * < 100[bin] = 5[dec]
 */

const process = require('node:process');

var arg = process.argv[2];

var sum = 0;
var mul = 1;
for(var i = arg.length - 1; i >= 0; i--)
{
    if(arg[i] != "0" && arg[i] != "1")
    {
        console.warn("wrong input. only '0'-es and '1'-es expected!")
        return;
    }
    if(arg[i] == "1")
        sum += mul;
    mul *= 2;
}
console.log(arg + "[bin] = " + sum + "[dec]");