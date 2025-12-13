// Toggle mobile menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// Cart Data
let cart = [];
let cartCount = document.getElementById("cart-count");
let cartSidebar = document.getElementById("cart-sidebar");
let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");

// Add to Cart
function addToCart(name, price) {
    cart.push({ name, price });
    cartCount.textContent = cart.length;
    updateCart();
    openCart();
}

// Update Cart UI
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} – ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}

// Open / Close Cart
document.getElementById("cart-btn").onclick = () => cartSidebar.classList.add("open");
document.getElementById("close-cart").onclick = () => cartSidebar.classList.remove("open");

function openCart() {
    cartSidebar.classList.add("open");
}
