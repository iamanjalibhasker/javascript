// assign- 1

let num = "10";

if(num/10){
  console.log("Good");
}else{
    console.log("Bad");
}

// assign - 2

let fullName = prompt("Enter Your fullName");
let age = prompt("Enter Your age");
alert(`${fullName} is ${age} year old`);

// assign - 3

let quarter = "1";

switch(quarter){
    case "1":
        console.log("january, febuary, march");
    break;
    case "2":
        console.log("april, may, june");
    break;
    case "3" :
        console.log("july,august, september");
    break;
    case "4":
        console.log("october, november, december");
    default:
        console.log("not a quarter");

}

// assign - 4 

let str = "apple";

if( (str[0] == "a" || str[0] == "A") && (str.length > 5) ) {
    console.log("golden string");
}else{
    console.log("not a golden string");
}


// assign - 5 

let a = 5;
let b = 18;
let c = 13;

if(a > b){
   if(a > c){
      console.log(a ,"is largest");
   }else{
      console.log(b , "is largest");
   }   
}
else{
    if(b > c){
        console.log( b , "is largest");
    }else {
        console.log(  c ,"is largest")
    }
}

// asign - 6  bonus 

let num1 = 42;
let num2 = 47842;

if( (num1%10) == (num2%10) ){
    console.log("number have the same last digit which is", num1%10 );
} else{
    console.log("numbar haven't the same digit");
}