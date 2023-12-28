



// explaination the code

      // first we pass use the function  display () in html element along with same parameter
      // then we catch the parameter  in javscript file and stored the ctached paramenter input display 

      // then we made the second fumction to calculte the stored result with the help of (eval) method and show back to the user on screen









let input = document.querySelector("#data")





let initialDisplay = true;

display = (numberPass) => {

  if(input.innerHTML.length == 12){
    alert("Number got exceeded !")
    return
}
// Inteligent code 
    // Check if it's the initial display
    if (initialDisplay) {
        input.innerHTML = numberPass; // Replace "0" with the new input
        initialDisplay = false; // Set initial display to false
    } else {
        input.innerHTML += numberPass; // Otherwise, append the new input
    }


    console.log(input.innerHTML.length);

}

function calculate (){

    if(input.innerHTML == "" ){

      alert("enter any number")
      return
    }
  var result = input.innerHTML;
  result = eval(result);       
  
  // evalmethod is responsible for doing the mathematical operation we gave the number --> eval     perfore the operation
  

  input.innerHTML = result;

}

 function AllClear (){   
  input.innerHTML = ""     //here we make the result 0 means not to show any thing on display
  
 }



 function DeleteLstNumber (){

 input.innerHTML =  input.innerHTML.slice(0,-1)
  
 }