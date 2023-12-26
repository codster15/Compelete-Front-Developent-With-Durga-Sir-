


var circle = document.querySelector (".circle")
var main = document.querySelector (".main")



var whiteUI = ()=>{
    translate = 0;
   document.querySelector(".circle").style.transform = 'translate(' + translate + 'px)';
    main.style.backgroundColor = "white"
    main.style.borderColor = "black"
    circle.style.backgroundColor = "black"
    
    document.querySelector("body").style.backgroundColor = "white";
   console.log("white ui ");
            
}

    var blackUi = ()=>{
        translate = 70;
   document.querySelector(".circle").style.transform = 'translate(' + translate + 'px)';
    main.style.backgroundColor = "black"
    main.style.borderColor = "white"
    circle.style.backgroundColor = "white"                
    document.querySelector("body").style.backgroundColor = "Black";
   console.log("clicked happed" + translate);
    }

main.addEventListener("click" , ()=>{

    if (  main.style.backgroundColor ===  "black" ||  circle.style.backgroundColor === "white" ){
            whiteUI()
    }else{
        blackUi();
    }
   

   
})