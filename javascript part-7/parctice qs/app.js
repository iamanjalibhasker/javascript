//  Finding maximum in an array.

let arr = [2,3,4,5,6,7];
let max = arr.reduce((max,el) => {
    if(el > max){
        return el;
    }else{
        return max;
    }
});

console.log(max);