 
 
 var product = [ 
   
         {

         productname     : "laptop",
         actualprice  : 45000,
         discount     : 10,
         manufacturer : "Dell",
         rating       : '4.5/5',
         Image        : 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-sl.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3782&hei=2988&qlt=100,1&resMode=sharp2&size=3782,2988&chrss=full&imwidth=5000' 
      },

      {
         productname     : "Pendrive",
         actualprice  : 700,
         discount     : 30,
         manufacturer : "sandisk",
         rating       : '4.4/5',
         Image        : 'https://isteam.wsimg.com/ip/a8efe83b-6857-477d-9d0f-f13ca0229a20/ols/1778_original/:/rs=w:600,h:600'     
      },

      {
         productname     : "Tv",
         actualprice  : 75000,
         discount     : 30,
         manufacturer : "samsung",
         rating       : '4.2/5',
         Image        : 'https://rukminim2.flixcart.com/image/850/1000/xif0q/television/u/d/t/-original-imaghgphymnvxnaf.jpeg?q=90'  
      }




]

 var productdetails = (product) => {

    var ultag = document.createElement("ul");
    ultag.setAttribute("class", "pdetails");


    var li1 = document.createElement("li")
    li1.innerText = "product name : " +  product.productname;
    ultag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Product Price : ';
    

    var span1 = document.createElement("span");
    span1.setAttribute("class", "actual")
    span1.innerText = product.actualprice;
    li2.append(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class", "discount")
    span2.innerText = product.actualprice - (product.actualprice * product.discount) / 100;
    li2.append(span2);

    ultag.append(li2);  

    var li3 = document.createElement("li");
    li3.innerHTML = "manufacturer : " + product.manufacturer;
    ultag.append(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = 'Rating : ' + product.rating;
    ultag.append(li4);

    var li5 = document.createElement("li");
    ultag.append(li5);
     
    var imgtag = document.createElement("img");
    imgtag.setAttribute("src" , product.Image);
    li5.append(imgtag);

   

     
    document.querySelector(".productcontainer").append(ultag);

 }

 for(var i = 0; i < product.length ; i++ ){


   productdetails(product[i]);
}

 

 


 