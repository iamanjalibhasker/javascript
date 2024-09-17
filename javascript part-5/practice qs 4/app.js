// create a function that returns the concatenation of  all the string in an array.

let str = ["hi","hello","bye","!"];

function conCat(str) {
     
   let result = "";

   for(let i=0; i<str.length; i++) {
       result += str[i];
   }  
     
    return result;
}