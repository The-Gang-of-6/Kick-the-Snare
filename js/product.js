'use strict'

var d = document;
var added_products = []
var itemName = d.getElementById("itemName")
var itemDescription = d.getElementById("itemDescription")
var itemPrice = d.getElementById("itemPrice")
var itemImg = d.getElementById("itemImg")
var addToCart = d.getElementById("addToCart")



var detailedItem = JSON.parse(localStorage.getItem("DetailedItem"))

addToCart.setAttribute("onclick", `addItem('${detailedItem.id}')`)

itemName.textContent = ""
itemPrice.textContent = ""
itemDescription.textContent = ""
itemImg.src = ""

itemName.textContent = detailedItem.name
itemPrice.textContent = detailedItem.price
itemDescription.textContent = detailedItem.description
itemImg.src = detailedItem.imgurl



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
