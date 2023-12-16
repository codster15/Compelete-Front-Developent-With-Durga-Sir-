

var doOperation = function (actiontype){

    var storeobj = {};

    storeobj.firstvalue = document.querySelector(".fvalue").value;
    storeobj.secondvalue = document.querySelector(".svalue").value;

    storeobj.firstvalue = parseInt(storeobj.firstvalue)
    storeobj.secondvalue = parseInt(storeobj.secondvalue)
    storeobj.result;

    switch (actiontype){

            case "add":
            storeobj.result = doAddition (storeobj.firstvalue, storeobj.secondvalue);
            break;
        
            case "sub":
            storeobj.result = dosubstraction (storeobj.firstvalue, storeobj.secondvalue);
            break;
        
            case "mul":
            storeobj.result = doMultiplication (storeobj.firstvalue, storeobj.secondvalue);
            break;
        
            case "div":
            storeobj.result = dodivision(storeobj.firstvalue, storeobj.secondvalue);
            break;
            
    }

   


    document.querySelector(".res").innerText = storeobj.result;
    document.querySelector(".showOpr").innerText = actiontype; 
    document.querySelector(".hideresult").style.display = "block";
}