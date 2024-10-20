// Function to handle adding items to the cart
let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} has been added to your cart!`);
    updateCartTotal();
}

// Function to update and display the total
function updateCartTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Cart total: $${total.toFixed(2)}`);
}

// Function to handle the 'Shop Now' button
function shopNow() {
    window.location.href = "#products";
}

// Function to handle contact form submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received.\nWe'll get back to you at ${email}.`);
    
    document.getElementById('contactForm').reset();
}


