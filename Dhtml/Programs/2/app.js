

var productD = {
    Product       : "Laptop",
    ProductPrice  : 40000,
    Manufacturer  : "Dell",
    Rating        : 4/5,
    Image :  'file:///C:/Users/Deepu-PC/Downloads/laptop-removebg-preview.png'
 

}

 var iteam = ()=> {

    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class" , "ul1");
   

    var li1 = document.createElement("li");
    li1.innerText = 'Product Name: ' + productD.Product;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Product Price : ' ;
   
    var span1 = document.createElement("span");
    span1.setAttribute("class" , " beforep");
    li2.append(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class" , " afterp");
    li2.append(span2);


    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = "Manufacturer" + productD.Manufacturer;
    ulTag.append(li3);


    var li4 = document.createElement("li");
    li4.inner = 'Rating' + productD.Rating;
    ulTag.append(li4);

    var li5 = document.createElement("li");
     
    var imgtag = document.createElement("img")
    imgtag.setAttribute("src" , productD.Image);
    li5.append(imgtag);

    ulTag.append(li5);


    console.log(ulTag);

    document.querySelector(".main").append(ulTag);

    console.log(ulTag)
 }

 iteam();