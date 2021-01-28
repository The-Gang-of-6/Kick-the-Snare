"use strict";

var d = document;



//items that user has chosen to add to cart
var added_products = [];
var ShowDetalisValue;
var products = []; //// array of obj
var productsArray = [['Violin', `The violin, sometimes known as a fiddle, is a wooden chordophone in the violin family. Most violins have a hollow wooden body. It is the smallest and thus highest-pitched instrument in the family in regular use.`
  , 'img/violin.png', '1400'],
['Drum', `Drum: The drum is a member of the percussion group of musical instruments.In the Hornbostel - Sachs classification system, it is a membranophone. Drums consist of at least one membrane, called a drumhead or drum skin, that is stretched over a shell and struck, either directly with the players hands, or with a percussion mallet, to produce sound.`, 'img/drum.jpg', 800],
['African Drum', `African Drum :a rope-tuned skin-covered goblet drum played with bare hands, originally from West Africa. According to the Bambara people in Mali, the name of the djembe comes from the saying Anke djé, anke bé which translates to everyone gather together in peace and defines the drums purpose.`, 'img/african-drum.png', 2000],
['Harp', `Harp: is a stringed musical instrument that has a number of individual strings running at an angle to its soundboard; the strings are plucked with the finger`, 'img/harp.png', 2500],
['Tamborine', `Tamborine: is a musical instrument in the percussion family consisting of a frame, often of wood or plastic, with pairs of small metal jingles, called "zills".Classically the term tambourine denotes an instrument with a drumhead, though some variants may not have a head at all.`, 'img/Tamborine.png', 750],
['Trumpet', ` Trumpet: is a brass instrument commonly used in classical and jazz ensembles.The trumpet group ranges from the piccolo trumpet with the highest register in the brass family, to the bass trumpet, which is pitched one octave below the standard B♭ or C Trumpet.`, 'img/Trumpet.jpg', 1750],
['Bongo', ` Bongo: pair of small single - headed Afro - Cuban drums.The two heads, which are respectively about 5 inches(13 cm) and about 7 inches(18 cm) across, are nailed or rod - tensioned to wooden, open - ended “shells” of the same height.Played with the hands and fingers`, 'img/bongo.png', 1500],
['Piano', `Piano: is an acoustic, stringed musical instrument invented in Italy by Bartolomeo Cristofori around the year 1700, in which the strings are struck by wooden hammers that are coated with a softer material It is played using a keyboard,`, 'img/piano.jpg', 3000],
['Accordion', ` Button Accordion: is a type of accordion on which the melody - side keyboard consists of a series of buttons.This differs from the piano accordion, which has piano style keys.Erich Von Hornbostel and Curt Sachs categorize it as a free reed aerophone in their classification of instruments,`, 'img/Button-accordion.jpg', 2500],
['Flute', `Flute : s a family of musical instruments in the woodwind group.Unlike woodwind instruments with reeds, a flute is an aerophone or reedless wind instrument that produces its sound from the flow of air across an opening`, 'img/flute.png', 950],
['Zither', `Zither: a class of stringed instruments.The word Zither is a German rendering of the Greek word cithara, from which the modern word "guitar" also derives`, 'img/zither.png', 2800],
['Reed Pipe', `Reed Pipe: is an organ pipe that is sounded by a vibrating brass strip known as a reed.Air under pressure  is directed towards the reed, which vibrates at a specific pitch.`, 'img/reed-pipe.jpg', 1350]];



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
  productAddToCart.id = 'addToCartButton' + item.id;
  productAddToCart.setAttribute('onclick', 'addItem(this.value)');
  //productAddToCart.addEventListener('click', addItem);
  productAddToCart.value = item.id;


  var productShowDetails = d.createElement("button");
  productShowDetails.setAttribute("class", "show-det");
  productShowDetails.textContent = "Show Details";

  productShowDetails.id = 'ShowDetalis' + item.id;
  productShowDetails.setAttribute('onclick', `showDetalis( ${item.id},'${item.imgUrl}','${item.name}','${item.price}','${item.description}'  )`);
  productShowDetails.value = item.id;

  prodcutCard.appendChild(productShowDetails);

  mainContainer.appendChild(prodcutCard);

}



Products.prototype.id = 0;

function Products(name, description, img, price) {
  this.id = Products.prototype.id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.imgUrl = img;
  products.push(this);
  Products.prototype.id += 1;
  createProduct(this);
}

//create the products objects
for (var item = 0; item < productsArray.length; item++) {
  new Products(productsArray[item][0], productsArray[item][1], productsArray[item][2], productsArray[item][3]);
}
localStorage.setItem('instruments', JSON.stringify(products));

function addItem(value) {
  if (localStorage.getItem('items') !== null) {
    added_products = JSON.parse(localStorage.getItem('items'));
  } else {
    added_products = [];
  }
  if (!added_products.includes(value)) {
    added_products.push(value);
  }
  localStorage.setItem('items', JSON.stringify(added_products));
}


function showDetalis(id, imgUrl, name, price, description) {

  if (localStorage.getItem('DetailedItem') !== null) {
    localStorage.removeItem("DetailedItem")
  }

  ShowDetalisValue = {
    "id": id,
    "imgurl": imgUrl,
    "name": name,
    "price": price,
    "description": description
  }

  localStorage.setItem("DetailedItem", JSON.stringify(ShowDetalisValue))

  d.getElementById("product").click();
}

