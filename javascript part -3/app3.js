// Find the largest number in an array with only positive numbers.

let arr = [2,3,4,25,8,9] ;

let large = 0;
 
  for(let i=0; i<arr.length; i++) {
     if(arr[i] > large) {
        large = arr[i];
     }
  }
  return large;



//   condition 1- arr[i] >large
//     condition 2 - large = arr[i]


  

 