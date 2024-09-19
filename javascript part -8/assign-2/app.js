// Qs2. Add following attributes to the element :--Change placeholder value of input to “username” - Change the id of button to “btn". Qs 3-  Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.


let input = document.createElement("input");
  let button = document.createElement("button");

   button.innerText = "click me";    

   document.querySelector("body").append(input); 
   document.querySelector("body").append(button);
  
   button.setAttribute("id","btn");
   input.setAttribute("placeholder","username");

    // Qs- 3 //
   document.querySelector("btn");
   button.classList.add("btn");

