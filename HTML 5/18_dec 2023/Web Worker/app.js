






var count = 1;
setInterval(() => {
    var divtag = document.createElement("div")


    divtag.innerHTML = "Block " + count;

    document.querySelector(".container").append(divtag);
    count++;

}, 1000)




// 

    
var webWorker = new Worker("webWorker.js")

webWorker.onmessage = function (event){
    document.querySelector("#storeTime").innerHTML = event.data;
}


