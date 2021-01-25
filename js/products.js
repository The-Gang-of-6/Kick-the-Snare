"use strict";
var d = document;
var products = []; //// array of obj
var productsArray = [['Violin', '../img/violin.png','1400'],['Drum', '../img/drum.jpg', 800],['Oud', '../img/oud.png', 2000],['Harp','https://www.eskchat.com/wp-content/uploads/2018/01/%D8%A7%D9%84%D9%87%D8%A7%D8%B1%D8%A8.jpg',2500],['Tamborine','https://www.eskchat.com/wp-content/uploads/2018/01/%D8%A7%D9%84%D8%AF%D9%81-%D9%88%D8%A7%D9%84%D8%B1%D9%82-300x215.jpg' , 750],['Trumpet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA1oBJ5_ygxqkk0Y1_0XsK2dxHBGab2j6uWg&usqp=CAU', 1750]];
var mainContainer = d.getElementById("Products-container");

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

  var productAddToCart = d.createElement("button");
  productAddToCart.setAttribute("class", "add-to-cart");
  productAddToCart.value = item.id;
  productAddToCart.textContent = "Add To Cart";
  prodcutCard.appendChild(productAddToCart);

  var productShowDetails = d.createElement("button");
  productShowDetails.setAttribute("class", "show-det");
  productShowDetails.textContent = "Add To Cart";

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

// var pro1 = new Products(
//   "test",
//   "https://www.eskchat.com/wp-content/uploads/2018/01/%D8%A7%D9%84%D9%87%D8%A7%D8%B1%D8%A8.jpg",
//   100
// );

for(var item=0; item<productsArray.length; item++){
    console.log(productsArray[item]);
    new Products(productsArray[item][0], productsArray[item][1], productsArray[item][2]);
}

