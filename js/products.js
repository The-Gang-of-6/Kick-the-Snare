"use strict";
var d = document;
var mainContainer = d.getElementById("products-container");

var products = []; //// array of obj
var productsArray = [
  ['Violin', '../img/violin.png', '1400'],
  ['Drum', '../img/drum.jpg', 800],
  ['Oud', '../img/oud.png', 2000],
  ['Harp', '../img/harp.png', 2500],
  ['Tamborine', '../img/Tamborine.png', 750],
  ['Trumpet', '../img/Trumpet.jpg', 1750]
];


function createProducts(item) {
  var prodcutCard = d.createElement("div");
  prodcutCard.setAttribute("class", "card");

  var prodcutImg = d.createElement("img");
  prodcutImg.setAttribute("class", "product-img");
  prodcutImg.src = item.imgUrl;
  prodcutCard.appendChild(prodcutImg);

  var productName = d.createElement("h3");
  productName.setAttribute("class", "card-head");
  productName.textContent = item.name;
  prodcutCard.appendChild(productName);

  var productPrice = d.createElement("p");
  productPrice.setAttribute("class", "price");
  productPrice.textContent = "$" + item.price;
  prodcutCard.appendChild(productPrice);

  var productAddToCart = d.createElement("button");
  productAddToCart.setAttribute("class", "add-to-cart");
  productAddToCart.value = item.id;
  productAddToCart.textContent = "Add To Cart";
  prodcutCard.appendChild(productAddToCart);

  var productShowDetails = d.createElement("button");
  productShowDetails.setAttribute("class", "show-det");
  productShowDetails.textContent = "Show Details";

  prodcutCard.appendChild(productShowDetails);

  mainContainer.appendChild(prodcutCard);
}

Products.prototype.id = 0;

function Products(name, img, price) {
  this.id = Products.prototype.id;
  this.name = name;
  this.price = price;
  this.imgUrl = img;
  products.push(this);
  Products.prototype.id += 1;
  createProducts(this);
}

for (var item = 0; item < productsArray.length; ++item) {
  // console.log(productsArray[item]);
  new Products(productsArray[item][0], productsArray[item][1], productsArray[item][2]);
}

