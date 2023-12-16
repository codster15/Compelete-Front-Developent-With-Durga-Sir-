






var schooldetails = {
  schoolname: "Education hub",
  board: "Up.board",
  location: "Hydrabad",
};

var readStudentData = () => {
  var sdetails = Object.create(schooldetails);  // this will point towards  the shooldetails object and inherit the property of it in his object  

  sdetails.showdata = function () {
    console.log("Stuent - " + this.name);
    console.log("Age - " + this.age);
    console.log("Gender - " + this.gender);
    console.log("class - " + this.class);
    console.log("Schoolname - " + this.schoolname);
    console.log("board - " + this.board);
    console.log(" location - " + this.location);
  };

  sdetails.name = document.querySelector(".studentname").value;

  sdetails.age = document.querySelector(".studentage").value;

  sdetails.gender = document.querySelector("input[name=gender]:checked").value;

  sdetails.class = document.querySelector("#admission").value;

  sdetails.showdata();
};
