//  Print the factorial of a number n.[Factorial of a number n  is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.

let n = 7;
let factorial = 1;

for(let i=1; i<=n; i++) {
    factorial *= i;
}
  
 console.log(`foctorial of ${n} is all ${factorial}`) ;