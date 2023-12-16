




var pdetails = {
    product      : "Laptop",
    price        : 45000,
    discount     : 10,
    rating       : "4.5/5", 
    manufacturer : "Sony",
    img          : "https://assets.stickpng.com/images/588524d86f293bbfae451a31.png"

}

var loadproductdata = ()=>{

    var ultag = document.createElement("ul");
    ultag.setAttribute("class" , "pdetails");
    

    var li1 = document.createElement("li");
    li1.innerText = "Product : " + pdetails.product;
    ultag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = "Price : " 

    var span1 = document.createElement("span");
    span1.setAttribute("class", "before");
    span1.innerText = pdetails.price;
    li2.append(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class" , "after");
    span2.innerText = pdetails.price -  (pdetails.price * pdetails.discount) / 100;
    li2.append(span2);
    
    ultag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = "Rating : " + pdetails.rating;
    ultag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = "Manufacturer : " + pdetails.manufacturer;
    ultag.append(li4);

    var li5 = document.createElement("li");
    ultag.append(li5);
    var imgtag = document.createElement("img");
    imgtag.setAttribute("src" , pdetails.img);
    li5.append(imgtag);
    
    document.querySelector(".mainContainer").append(ultag);

   
    
}

loadproductdata();

