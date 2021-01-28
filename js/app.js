
window.addEventListener("load", function () {
  (function () {
    var d = document;
    var itemsLenght = JSON.parse(localStorage.getItem('items')).length;

    var cartsNumber = d.getElementById("cart-items-numbers")

    if (localStorage.getItem('DetailedItem') !== null) {
      cartsNumber.innerHTML = itemsLenght
      cartsNumber.style.display = "block"
    } else {
      cartsNumber.style.display = "none"
      cartsNumber.innerHTML = ""

    }


  })();

})