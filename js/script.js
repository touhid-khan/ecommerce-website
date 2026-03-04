// ============================
// CART LOGIC
// ============================

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCartCount();

// Add to cart functionality
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");

        const existingProduct = cart.find(item => item.id === id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                id,
                name,
                price: Number(price),
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();

        alert(name + " added to cart!");
    });
});