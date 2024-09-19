  //callback hall , promises//-->

//     function savetoDb(data,success, failure){
//       let internetSpeed = Math.floor(Math.random()*10)+1;
//       if(internetSpeed > 4){
//            success();
//       }else{
//         failure();
//       }
//  }
 
//  savetoDb("apna college", () => {
//      console.log("your data was saved :");
 
//      savetoDb("hello", () => {
 
//           console.log("data2 is saved");
          
//           savetoDb("anjali", () => {
 
//               console.log("anjali name saved");
//           }, () => {
 
//               console.log("anjlai name not save");
//           })
//      }, () => {
 
//           console.log("data2 is not saved");
//      })
//  },
 
//  () => {
//      console.log("weak connection");
//  });


//promises///

// let h1 = document.querySelector("h1");

// function changeColor(color, delay){
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let num = Math.floor(Math.random()*5)+1;
//             if(num > 3){
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//              console.log(`color changed to ${color}` );              
//               resolve("color changed");    
               
//          }, delay);
//      });
// }

// async function demo(){                     //async funtion //
//     try{
//         await changeColor("red", 1000);            //await//
//         await changeColor("orange", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("pink", 1000);
//          await changeColor("yellow", 1000);
//     }
//     catch (err){
//           console.log("error caught");
//           console.log(err);
//     }
    
// }


//promises to understand//


// function savetoDb(data){          
//   return new Promise((resolve, reject) => {
//       let internetSpeed = Math.floor(Math.random()*10)+1;
//        if(internetSpeed > 4){
//            resolve("success : data was saved");
//        }else{
//           reject("failure: data was weak");
//        }
//   }) 
// }

// savetoDb("apna college")    
// .then((result) => {                //then and catch method//
//    console.log("promise saved");
//     console.log(  "result of promises :", result);
//  return  savetoDb("hello...");    

// })
// .then((result)=> {
//    console.log("promise2 saved");
//    console.log( "result of promises :",result);
//    return savetoDb("anjali");
// })
// .then((result)=> {
//    console.log("promise3 saved");
//    console.log( "result of promises :",result);
// })
// .catch((error) => {
//    console.log("waek connnection");
//    console.log("error of promises :",error);
// })


//async function with promises and then,catch method//

    // async function greet(){
//     throw "weak connection";
//     return "hello";
// }

// greet()
// .then((result)=> {
//      console.log("promise was resolves");
//      console.log("result was : -", result);
// })
// .catch((error)=>{
//      console.log("promise was rejected with error");
//      console.log("erroe was : - ", error );
// })

        // async function  with await method other example//

        // let demo = async () => {
//     return 5;
// }

// function getNum(){
//     return new Promise((resolve, reject) => {
//          setTimeout(()=> {
//             let num = Math.floor(Math.random()*10) + 1;
//          console.log(num);
//          resolve();
//          },1000);
//     });
// }

//  async function demo(){
//      await  getNum();
//      await  getNum();
//      await  getNum();
//      await  getNum();
// }

// header  use --->

// let url = "https://icanhazdadjoke.com/";

//  async function getJocks(){
   
//      try{
//         const config = {headers : {Accept: "application/json"}};   //config normal var//
//          let res =  await axios.get(url, config);
//            console.log(res.data);       
         
//      }catch(e){
//           console.log("ERR :", e);
//      }
//  }


//form in js//

//  let form = document.querySelector("form"); 
     
    //   form.addEventListener("submit",function(event){
    //     event.preventDefault();
    //   })
  
    // let user = document.querySelector("#user");   
    
    // user.addEventListener("change", function(){
    //    console.log("change event")
    //      console.log("final value =", this.value);
    //  })  
 
    // user.addEventListener("input", function(){
    //    console.log("input event")
    //      console.log("final value =", this.value);
    //  })

    // let inp = document.querySelector("#text");
    // let p = document.querySelector("p");

    // inp.addEventListener("input", function(){
    //     console.log(inp.value);
    //     p.innerText = inp.value;
    // });


