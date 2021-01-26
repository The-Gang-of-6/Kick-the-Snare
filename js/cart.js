"use strict";

var d = document;
var cartContainer = d.getElementById("cart-container");
//cartContainer.innerHTML = "Nothing to show";
var theadNames = ["Item Name", "Price", "Quantity", "Remove"];
var instrumentsNames = [
  "Violin",
  "Drum",
  "Oud",
  "Harp",
  "Tambourine",
  "Trumpet",
];
var instrumentsPrices = [1400, 800, 2000, 2500, 750, 1750];
var instrumentsImages = [
  "violin.png",
  "drum.jpg",
  "oud.png",
  "harp.png",
  "Tamborine.png",
  "trumpet.jpg",
];

function cartRender() {
  var productCartTable = d.createElement("table");
  // productCartTable.setAttribute("class", "cart-container");
  var tableHeader = d.createElement("th");
  tableHeader.setAttribute("class", "cart-header");

  //create the main header of the table

  var tableRow = d.createElement("tr");
  for (var i = 0; i < theadNames.length; i++) {
    var tableData = d.createElement("td");
    tableData.textContent = theadNames[i];
    tableData.setAttribute("class", "cart-data");
    tableRow.appendChild(tableData);
  }

  // productCartTable.appendChild(tableData);
  productCartTable.appendChild(tableRow);

  for (i = 0; i < instrumentsNames.length; i++) {
    var tableRow = d.createElement("tr");
    tableRow.setAttribute("class", "cart-row");
    //create the image and name column
    var tableColumn = d.createElement("td");
    //set the coulmn styling
    tableColumn.setAttribute("class", "cart-data");
    //create headerr to be added to the column as the name of the instrument
    var header4 = d.createElement("h4");
    header4.textContent = instrumentsNames[i];
    //create an image that holds the instrument image
    var img1 = d.createElement("img");
    //add the path to source to get the image

    // edited the width and height for imges////////////////////////////////////////////////////////////////
    img1.setAttribute("width", "150px");
    img1.setAttribute("height", "100px");
    ////////////////////////////////////////////////////////////////////////////////
    img1.src = "../img/" + instrumentsImages[i];
    //add the header to the column
    tableColumn.appendChild(header4);
    //add the image to the column
    tableColumn.appendChild(img1);
    //add the column to the row
    tableRow.appendChild(tableColumn);

    //create the second column that holds the price
    //create the price column
    var tableColumn2 = d.createElement("td");
    //set the coulmn styling
    tableColumn2.setAttribute("class", "cart-data");

    //add the price as textContent
    tableColumn2.textContent = "$" + instrumentsPrices[i];
    //add the price colun the row
    tableRow.appendChild(tableColumn2);

    //create the third column that holds the quantity
    //create the input quantity field and the buy button column
    var tableColumn3 = d.createElement("td");
    //set the coulmn styling
    tableColumn3.setAttribute("class", "cart-data");
    //create te quantity input field
    var inputFiled = d.createElement("input");
    //set the type to be numbers only
    inputFiled.setAttribute("type", "number");
    //set the minimum value to be 0
    inputFiled.setAttribute("min", "0");
    //add the input filed to the coulmn
    tableColumn3.appendChild(inputFiled);

    //crate the button the holds the buy operation
    var buyNowButton = d.createElement("button");
    buyNowButton.textContent = "Update";
    buyNowButton.setAttribute("class", "button-style");
    //add it to its column parent
    // tableColumn4.appendChild(buyNowButton);
    //add the third column to the row
    tableRow.appendChild(tableColumn3);

    //create the fourth column that holds the removal functionality
    //create the removal button column
    var tableColumn4 = d.createElement("td");
    //set the coulmn styling
    tableColumn4.setAttribute("class", "cart-data");
    //create te quantity input field
    var removeButton = d.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "button-style");
    //add teh button to its column
    tableColumn4.appendChild(buyNowButton);
    tableColumn4.appendChild(removeButton);
    //add the column to the row
    tableRow.appendChild(tableColumn4);

    productCartTable.appendChild(tableRow);
  }

  cartContainer.appendChild(productCartTable);
}
cartRender();


/// creating payment details function

