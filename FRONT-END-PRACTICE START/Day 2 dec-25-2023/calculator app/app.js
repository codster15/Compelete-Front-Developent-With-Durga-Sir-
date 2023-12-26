
var dataStore = document.querySelector("#data")
var value_1 = document.querySelector("#one")
var value_add = document.querySelector("#add")
var value_clear = document.querySelector("#clear")

const Zero = 0;
const one = "1";
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
const doubleZero = "00";


var no1 = one

    var number1 = ()=>{
            
        if( no1 == "1111111"){
            alert("Number Exceeded");
            return
            
          }
        console.log(typeof(no1) );
      dataStore.innerHTML = no1;
      console.log( no1);
      no1 = no1 + one;

      

    }


value_1.addEventListener("click" , ()=>{
    number1();
    })


value_add.addEventListener("click" , ()=>{
        const one = "+"; 
        console.log(one);
        document.querySelector("#data").innerHTML = one;
        console.log(dataStore);
        no1 = 1
    })

    value_clear.addEventListener("click" , ()=>{
    
        document.querySelector("#data").innerHTML = "";
        console.log("a")
        no1 = 1
    })