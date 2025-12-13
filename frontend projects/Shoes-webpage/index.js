const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsList.appendChild(li);

        total += item.price * item.quantity;
        count += item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

cartIcon.addEventListener('click', () => {
    cartModal.classList.toggle('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

