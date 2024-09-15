// Qs-1 write the javascript program to get the last n element of an array. [n can be any positive number.] for exp:-[7,9,0,-2]and n=3, print[9,0,-2]

let arr = ["7","9","0","-2"];
let n = 3;

let ans =  arr.slice(arr.length-n);
console.log(ans);
