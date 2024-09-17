// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.


 let country= ["Australia","Germany","United States of America"];

 function longestName(country) {
     let ansIdx = 0;
     for(let i=0; i<country.length; i++) {
        let ansLis = country[ansIdx].length;
        let currLen = country[i].length;

        if(currLen > ansLis) {
            ansIdx = i;
        }
     }
         
     return country[ansIdx];
 }

  console.log(longestName(country));
