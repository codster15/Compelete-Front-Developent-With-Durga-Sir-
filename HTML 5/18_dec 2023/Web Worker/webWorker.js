





var getDateAndTime = () => {
    var mydate = new Date()
  var datewithtime = mydate.getDate() + "/"+ (mydate.getMonth() + 1) + "/" +  mydate.getFullYear() +  "  &  " + 
    mydate.getHours() + ":" + mydate.getMinutes() + ":" + mydate.getSeconds();
    console.log(datewithtime);
 
    postMessage(datewithtime);
    
}

setInterval(()=>{
    getDateAndTime();


} , 1000)

