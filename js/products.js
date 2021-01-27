"use strict";

var d = document;



//items that user has chosen to add to cart
var added_products = [];
var products = []; //// array of obj
var productsArray = [['Violin', '../img/violin.png', '1400'], ['Drum', '../img/drum.jpg', 800], ['Oud', '../img/oud.png', 2000], ['Harp', '../img/harp.png', 2500], ['Tamborine', '../img/Tamborine.png', 750], ['Trumpet', '../img/Trumpet.jpg', 1750]];
var mainContainer = d.getElementById("products-container");
var productAddToCart;


function createProduct(item) {

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

  productAddToCart = d.createElement("button");
  productAddToCart.setAttribute("class", "add-to-cart");
  productAddToCart.id = 'addToCartButton' + item.id;
  productAddToCart.setAttribute('onclick', 'addItem(this.value)');
  //productAddToCart.addEventListener('click', addItem);
  productAddToCart.value = item.id;
  //console.log(productAddToCart.value);
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
  createProduct(this);
}

//create the products objects
for (var item = 0; item < productsArray.length; item++) {
  new Products(productsArray[item][0], productsArray[item][1], productsArray[item][2]);
}
localStorage.setItem('instruments', JSON.stringify(products));

function addItem(value) {
  if (localStorage.getItem('items') !== null) {
    added_products = JSON.parse(localStorage.getItem('items'));
  }else{
    added_products =[];
  }
  if (!added_products.includes(value)) {
    added_products.push(value);
  }
  localStorage.setItem('items', JSON.stringify(added_products));
}

