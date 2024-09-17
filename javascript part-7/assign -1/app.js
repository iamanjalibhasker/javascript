// Square and sum the array elements using the arrow function and then find the average of the array.

 let nums  = [1,2,3,4,5];

 const square = nums.map((num) => (num ** 2) );
       console.log(square);

let sum = square.reduce((acc,el) => (acc + el, 0) );

 let avg = sum / nums.length;

  console.log(avg);



       
 
