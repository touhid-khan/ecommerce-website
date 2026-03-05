const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("checkout-items");
const totalElement = document.getElementById("checkout-total");

let total = 0;

cart.forEach(item => {

  const div = document.createElement("div");

  div.innerHTML = `
    <p>${item.name} x ${item.quantity} - $${item.price * item.quantity}</p>
  `;

  container.appendChild(div);

  total += item.price * item.quantity;

});

totalElement.textContent = total;

document.querySelector(".checkout-form")
.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Order placed successfully!");

  localStorage.removeItem("cart");

  window.location.href = "index.html";

});