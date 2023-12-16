
(()=>{

    document.querySelector("#but1").addEventListener("click" , ()=>{
        doOperation('add');
    })

    document.querySelector("#but2").addEventListener("click" , ()=>{
        doOperation('sub');
    })

    document.querySelector("#but3").addEventListener("click" , ()=>{
        doOperation('mul');
    })

    document.querySelector(".but4").addEventListener("click" , ()=>{
        doOperation('div');
    })

var doOperation = function (actiontype){

    var storeobj = {};

    storeobj.firstvalue = document.querySelector(".fvalue").value;
    storeobj.secondvalue = document.querySelector(".svalue").value;

    storeobj.firstvalue = parseInt(storeobj.firstvalue)
    storeobj.secondvalue = parseInt(storeobj.secondvalue)
    storeobj.result;

    switch (actiontype){

            case "add":
            storeobj.result = collection.doAddition (storeobj.firstvalue, storeobj.secondvalue);
            break;
        
            case "sub":
            storeobj.result =collection.dosubstraction (storeobj.firstvalue, storeobj.secondvalue);
            break;
        
            case "mul":
            storeobj.result = collection.doMultiplication (storeobj.firstvalue, storeobj.secondvalue);
            break;
        
            case "div":
            storeobj.result = collection.dodivision(storeobj.firstvalue, storeobj.secondvalue);
            break;
            
    }

   


    document.querySelector(".res").innerText = storeobj.result;
    document.querySelector(".showOpr").innerText = actiontype; 
    document.querySelector(".hideresult").style.display = "block";
}


})()