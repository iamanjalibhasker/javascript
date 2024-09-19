//1- a <p> with red text that says "hey i'm red".

let para1 = document.createElement("p");
 para1.innerText = "hey i'm red";
 document.querySelector("body").append(para1);

 para1.classList.add("red");
 

// 2-  an <h3> with blue text that says "hey i'm blue h3".

let h3 = document.createElement("h3");
 h3.innerText = "hey i'm blue";
 document.querySelector("body").append(h3);

 h3.classList.add("blue");

//  3 - a <div> with a black border and pink backgroung color with the following element inside of it: another <h1> thats says "i'm in a div", a <p> that says "ME TOO!".

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "i'm in a div";
para2.innerText = "MEE TOO";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);
 