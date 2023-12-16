



var studentDetails = {
    result : " ",
    total : 0,
    avg : 0,
    getTotalAndAvg : function(){
        
        for(var i = 0 ; i < studentDetails.marks.length; i++){
             this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;

        if(this.avg >= 60){
            this.result = "passed"
        }else{
            this.result = "work hard"
        }


        
    },
    



    showStudentdata  () {


        studentDetails.sname = document.querySelector("#Showname").value;
        studentDetails.sage = document.querySelector("#age").value;
        studentDetails.gender = document.querySelector("input[name=gender]:checked").value;
        studentDetails.class = document.querySelector("#sclass").value;
        studentDetails.marks = [];

        

     
    
        for(var i = 0; i < 5; i++ ){
    
                var value = document.querySelector("#m" + (i+1)).value;
                studentDetails.marks.push(parseInt(value));
        }
    
       this.getTotalAndAvg();

        
       
        this.displaydetails()
    },
    
    displaydetails (){
       

         document.querySelector(".problock").style.display = "block";
        document.querySelector(".showname").innerText = this.sname;
        document.querySelector(".showage").innerText = this.sage;
      document.querySelector(".showgender").innerText = this.gender;
      document.querySelector(".showclass").innerText = this.class;
      
      document.querySelector(".totalmarks").innerText = this.total;
      document.querySelector(".averagem").innerText = this.avg;
      document.querySelector(".results").innerText = this.result;


      console.log(this.avg);
      console.log(this.total);
      console.log(this.result);

    }
}






