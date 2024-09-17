// Write a JavaScript function to generate a random number within a range(start,end).

 let start = 200;
 let end = 300;

 function generateRandom(start,end) {
     let diff = end - start;
     return Math.floor(Math.random() * diff) + diff;

 }

 generateRandom(start,end);

 