// Write a arrow function that returns the square of a number 'n'.


const square = (n) => (n*n);

 console.log(square(4));


//  write a function that print "hello world" 5 times at intervals of 2s each.

 let id = setInterval(() => {
     console.log("Hello World");
 },2000);

 setTimeout(() => {
     clearInterval(id);
     console.log("clear interval");
 },10000);