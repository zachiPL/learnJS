/**
 * Code for testing/learning if something is a number
 * 
 * What i've learnt?
 * - if string is convertible to a number - it's a number
 */

let arr = [12, 12.2, "32", "Hello world", ""];

arr.forEach(element => {
   console.log(element + (isNaN(element)?" is not a number":" is a number"));
   console.log(element + (isFinite(element)?" is finite":" is not finite"));
});