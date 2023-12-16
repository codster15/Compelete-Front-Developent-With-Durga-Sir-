








import * as test from "./Math.Util.js"

(()=>{

var doOperation = ()=>{
   var fvalue = document.querySelector(".fval").value
   var svalue = document.querySelector(".sval").value 

   var total ;

   total = test.SumOfNumber.doAddition(fvalue, svalue)

   console.log(total);

   document.querySelector(".showdata").innerHTML = "Sum of number is = " + total;

}


document.querySelector("#submitbtan").addEventListener("click" , ()=>{
    doOperation();
})

})()