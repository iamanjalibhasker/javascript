// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.Change its color to purple.

let heading = document.createElement("h1");

heading.innerText = "DOM practice";

 
 document.querySelector("body").append(heading);
 heading.classList.add("purple");
