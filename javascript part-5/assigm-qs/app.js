// Write a JavaScript function that returns array elements larger than a number.

let arr = [2,3,4,7,8,9,4,3];
let num = 4;

function getElement(arr, num) {
     for(let i=0; i<arr.length; i++){
        if(arr[i] > num) {
            console.log(arr[i]);
        }
     }
        
    }

    getElement(arr,num);