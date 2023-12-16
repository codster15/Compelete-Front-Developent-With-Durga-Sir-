




import * as math from "./MathUtil.js";

console.log(math.count);
var sumOfNumber = ()=>{
    var fvalue = document.querySelector(".fval").value;
    var svalue = document.querySelector(".sval").value;
    var result = 0;

    result =  math.doAddition(fvalue , svalue)

    document.querySelector(".showresult").innerText =  "Sum of two numbers is - " + result;
    console.log("Sum of two numbers is  - "+result);
  
}

document.querySelector("#clickbutton").addEventListener("click" , ()=>{

    sumOfNumber();
})




