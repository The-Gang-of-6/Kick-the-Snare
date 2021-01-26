"use strict";
var d = document;
//this function will delete the item from the local storage
//window.addEventListener("load", function () {


//})

var cartContainer = d.getElementById("cart-items-container");
var arrayOfObjects = JSON.parse(localStorage.getItem('instruments'));
var currentArrayOfObjects = [];
console.log(arrayOfObjects);
var theadNames = ["Item Name", 'Item Image', "Price", "Quantity", "Operation"];
//check if theres is any items that user added to cart
if (localStorage.getItem('items') === null) {
  cartContainer.innerHTML = "Nothing to show";
}
else {
  var items = JSON.parse(localStorage.getItem('items'));
  for (var i = 0; i < items.length; i++) {
    //arrayOfObjects.push(JSON.parse(localStorage.getItem(items[i] + '')));
    currentArrayOfObjects.push(arrayOfObjects[items[i]]);
  }
  cartRender();
}//else







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

  for (i = 0; i < currentArrayOfObjects.length; i++) {
    var tableRow = d.createElement("tr");
    tableRow.setAttribute("class", "cart-row");
    //create the image and name column
    var tableColumn = d.createElement("td");
    var tableColumn5 = d.createElement("td");
    //set the coulmn styling
    tableColumn.setAttribute("class", "cart-data");
    tableColumn5.setAttribute("class", "cart-data");

    //create headerr to be added to the column as the name of the instrument
    var header4 = d.createElement("h4");
    header4.textContent = currentArrayOfObjects[i].name;
    //create an image that holds the instrument image
    var img1 = d.createElement("img");
    //add the path to source to get the image

    // edited the width and height for imges////////////////////////////////////////////////////////////////
    img1.setAttribute("class", "img-style");

    ////////////////////////////////////////////////////////////////////////////////
    img1.src = currentArrayOfObjects[i].imgUrl;
    //add the header to the column
    tableColumn.appendChild(header4);
    //add the image to the column
    tableColumn5.appendChild(img1);
    //add the column to the row
    tableRow.appendChild(tableColumn);
    tableRow.appendChild(tableColumn5);

    //create the second column that holds the price
    //create the price column
    var tableColumn2 = d.createElement("td");
    //set the coulmn styling
    tableColumn2.setAttribute("class", "cart-data");

    //add the price as textContent
    tableColumn2.textContent = "$" + currentArrayOfObjects[i].price;
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
    //set default value of quantity to be 1
    inputFiled.value = 1;
    //add the input filed to the coulmn
    tableColumn3.appendChild(inputFiled);

    //crate the button the holds the buy operation
    var updateButton = d.createElement("button");
    updateButton.textContent = "Update";
    updateButton.setAttribute("class", "button-style");
    updateButton.id = 'updateItem' + i;
    updateButton.value = i;
    updateButton.setAttribute('onclick', 'updateStorage(this.value, quantity)');
    //add it to its column parent
    // tableColumn4.appendChild(updateButton);
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
    removeButton.setAttribute("class", "button2-style");
    removeButton.setAttribute('onclick', 'removeStorage(this.value)');
    removeButton.id = 'removeItem' + i;
    removeButton.value = i;
    //add the button to its column
    //tableColumn4.appendChild(updateButton);
    tableColumn4.appendChild(removeButton);
    //add the column to the row
    tableRow.appendChild(tableColumn4);

    productCartTable.appendChild(tableRow);
  }

  cartContainer.appendChild(productCartTable);
}

//this function will upadte the quantity in the local storage
// function updateStorage(value, quantity){
//   localStorage.setItem(currentArrayOfObjects[value], JSON.stringify(quantity));
// }

function removeStorage(value) {
  var arr = [];
  if (items.length == 1) {
    localStorage.removeItem('items');
  } else {


    for (var i = 0; i < items.length; i++) {
      if (i == value) {
        continue;
      }
      arr.push(i+'');
      localStorage.setItem('items', JSON.stringify(arr));
    }
  }
}
