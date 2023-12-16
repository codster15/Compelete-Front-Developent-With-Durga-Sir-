var pdetails = [
  {
    product: "Laptop",
    price: 45000,
    discount: 10,
    rating: "4/5",
    manufacturer: "Sony",
    img: "https://assets.stickpng.com/images/588524d86f293bbfae451a31.png",
  },

  {
    product: "microwave",
    price: 25000,
    discount: 7,
    rating: "4.3/5",
    manufacturer: "LG",
    img: "https://e7.pngegg.com/pngimages/864/109/png-clipart-microwave-oven-induction-cooking-kitchen-stove-home-appliance-microwave-oven-kitchen-kitchen-appliance-thumbnail.png",
  },

  {
    product: "Washing Machine",
    price: 65000,
    discount: 25,
    rating: "4.2/5",
    manufacturer: "SAMSUNG",
    img: "https://w7.pngwing.com/pngs/532/684/png-transparent-washing-machines-samsung-washing-machine-full-automatic-pulsator-washing-machine-clothes-dryer-cleaning-home-appliance.png",
  },
];

var loadproductdata = (pdetails) => {
  var ultag = document.createElement("ul");
  ultag.setAttribute("class", "pdetails");

  var li1 = document.createElement("li");
  li1.innerText = "Product : " + pdetails.product;
  ultag.append(li1);

  var li2 = document.createElement("li");
  li2.innerText = "Price : ";

  var span1 = document.createElement("span");
  span1.setAttribute("class", "before");
  span1.innerText = pdetails.price;
  li2.append(span1);

  var span2 = document.createElement("span");
  span2.setAttribute("class", "after");
  span2.innerText =
    pdetails.price - (pdetails.price * pdetails.discount) / 100 + "/-";
  li2.append(span2);

  ultag.append(li2);

  var li3 = document.createElement("li");
  li3.innerText = "Rating : " + pdetails.rating;
  ultag.append(li3);

  var li4 = document.createElement("li");

  li4.innerText = "Manufacturer : ";

  var span3 = document.createElement("span");
  span3.setAttribute("class", "companycolor");
  span3.innerText = pdetails.manufacturer;
  li4.append(span3);
  ultag.append(li4);

  var li5 = document.createElement("li");
  ultag.append(li5);
  var imgtag = document.createElement("img");
  imgtag.setAttribute("src", pdetails.img);
  li5.append(imgtag);

  document.querySelector(".mainContainer").append(ultag);
};

for (var i = 0; i < pdetails.length; i++) {
  loadproductdata(pdetails[i]);
}
