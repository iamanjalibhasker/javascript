// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((el) => el * 2)];

 doubleAndReturnArgs([1,3,5],3,2);