



var showdata = () => {
    document.querySelector("#alertname").style.display = "none";
    document.querySelector("#alertRoll").style.display = "none";
    document.querySelector("#alertemail").style.display = "none";

    //  fetching the data
    var showname1 = document.querySelector("#name").value;
    var showrollnumber2 = document.querySelector("#RollNo").value;
    var showEmail = document.querySelector("#Email").value;



    if (showname1 != 0) {
      
       
    } else {
        document.querySelector(".namemust").style.display = "block";
        return false;
    }





    if ( showrollnumber2 != 0) {
        document.querySelector(".namemust").style.display = "none"
        
    } else {
        document.querySelector(".rollnomust").style.display = "block";
        return false;
    }





    if (showEmail != 0) {
        document.querySelector(".rollnomust").style.display = "none"
       
    } else {
        document.querySelector(".emailmust").style.display = "block";
        return false;
    }


    if( showname1 != 0 && showrollnumber2 != 0 && showEmail != 0 ){

        document.querySelector (".emailmust").style.display = "none";

        document.querySelector(".showname").innerHTML = showname1;
        document.querySelector(".showrollnumber").innerHTML = showrollnumber2;
        document.querySelector(".showEmail").innerHTML = showEmail;
        document.querySelector (".showul").style.display = "block";
    }
    


};














//for name validatiion

var validate = (event, ElementId) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        document.querySelector(ElementId).style.display = "none";
        return true;
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
        document.querySelector(ElementId).style.display = "none";
        return true;
    } else if (event.keyCode == 32) {
        document.querySelector(ElementId).style.display = "none";
        return true;
    } else {
        document.querySelector(ElementId).style.display = "block";
        return false;
    }
};
















//for Roll Number validatiion

var validateRollno = (event) => {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        document.querySelector("#alertRoll").style.display = "none";
        return true;
    } else {
        document.querySelector("#alertRoll").style.display = "block";
        return false;
    }
};

//for Email -  validatiion

var validateEmail = (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        //A to Z

        document.querySelector("#alertemail").style.display = "none";
        return true;
    } else if (event.keyCode >= 97 && event.keyCode <= 122) {
        // a to z

        document.querySelector("#alertemail").style.display = "none";
        return true;
    } else if (event.keyCode == 64 || event.keyCode == 46) {
        // @

        document.querySelector("#alertemail").style.display = "none";
        return true;
    } else if (event.keyCode >= 48 && event.keyCode <= 57) {
        // 0 to 9

        document.querySelector("#alertemail").style.display = "none";
        return true;
    } else {
        document.querySelector("#alertemail").style.display = "block";
        return false; // return false
    }
};