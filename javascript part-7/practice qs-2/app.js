//  Create a function to find the min number in array.

let arr = [2,3,4,5,6];
let min = arr.reduce((min,el) => {
      if(min < el){
        return min;
      }else{
        return el;
      }

});

console.log(min);