//  Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }

    return total/ arr.length;
}

let arr = [2,3,4,5,6];
console.log(arrayAverage(arr));
 