function check() {
  var product_name = document.getElementById("product_name");
  var error_proname = document.getElementById("error_proname");
  if (product_name.value == "") {
    product_name.className = "error_alert";
    error_proname.innerHTML = "Please fill in the product name";
    error_proname.style.color = "red";
    return true;
  } else {
    product_name.className = "success_alert";
    error_proname.innerHTML = "Success";
    error_proname.style.color = "green";
  }

  var quantity = document.getElementById("quantity");
  var error_quatity = document.getElementById("error_quantity");
  if (quantity.value == "") {
    quantity.className = "error_alert";
    error_quatity.innerHTML = "Please enter the product quantity";
    error_quatity.style.color = "red";
    return true;
  } else {
    quantity.className = "success_alert";
    error_quatity.innerHTML = "Success";
    error_quatity.style.color = "green";
  }
  if (isNaN(quantity.value)) {
    quantity.className = "error_alert";
    error_quatity.innerHTML = "Please enter the number";
    error_quatity.style.color = "red";
    return true;
  } else if (quantity.value < 0) {
    quantity.className = "error_alert";
    error_quatity.innerHTML = "Please enter a positive number";
    error_quatity.style.color = "red";
    return true;
  }

  var price = document.getElementById("price");
  var error_price = document.getElementById("error_price");
  if (price.value == "") {
    price.className = "error_alert";
    error_price.innerHTML = "Please enter the product unit price";
    error_price.style.color = "red";
    return true;
  } else {
    price.className = "success_alert";
    error_price.innerHTML = "Success";
    error_price.style.color = "green";
  }
  if (isNaN(price.value)) {
    price.className = "error_alert";
    error_price.innerHTML = "Please enter the number";
    error_price.style.color = "red";
    return true;
  } else if (price.value < 0) {
    price.className = "error_alert";
    error_price.innerHTML = "Please enter a positive number";
    error_price.style.color = "red";
    return true;
  }
  return false;
}

function add() {
  if (!check()) {
    var product_name = document.getElementById("product_name").value;
    var quantity = parseFloat(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);
    var amount = quantity * price;
    var cart = document.getElementById("cart");
    var addRow = cart.insertRow(1);
    var cell1 = addRow.insertCell(0);
    var cell2 = addRow.insertCell(1);
    var cell3 = addRow.insertCell(2);
    var cell4 = addRow.insertCell(3);
    var cell5 = addRow.insertCell(4);
    cell1.innerHTML = product_name;
    cell2.innerHTML = price;
    cell3.innerHTML = quantity;
    cell4.innerHTML = amount;
    cell4.setAttribute("name", "into_money");
    cell5.innerHTML =
      "<button onclick='remove(this)' class='delete_button'>Delete</button>";
  }
  totalAmount();
}

function remove(btn) {
  var row = btn.parentElement.parentElement;
  document.getElementById("cart").deleteRow(row.rowIndex);
  totalAmount();
}

function totalAmount() {
  var arrMoney = document.getElementsByName("into_money");
  var sum = 0;
  for (var i = 0; i < arrMoney.length; i++) {
    var price = arrMoney[i].innerText;
    sum += Number(price);
  }
  document.getElementById("total").innerText = sum;
}
