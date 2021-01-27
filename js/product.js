'use strict'

var d = document;

var itemName = d.getElementById("itemName")
var itemDescription = d.getElementById("itemDescription")
var itemPrice = d.getElementById("itemPrice")
var itemImg = d.getElementById("itemImg")


var detailedItem = JSON.parse(localStorage.getItem("DetailedItem"))

itemName.textContent = ""
itemPrice.textContent = ""
itemDescription.textContent = ""
itemImg.src = ""

itemName.textContent = detailedItem.name
itemPrice.textContent = detailedItem.price
itemDescription.textContent = detailedItem.description
itemImg.src = detailedItem.imgurl