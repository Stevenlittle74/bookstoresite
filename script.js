// ------------------------------
// ADD ITEM TO CART (sessionStorage)
// ------------------------------
function addToCart(itemName) {
    let cart = JSON.parse(sessionStorage.getItem('bookHavenCart')) || [];
    cart.push(itemName);
    sessionStorage.setItem('bookHavenCart', JSON.stringify(cart));
    alert(itemName + " has been added to your cart.");
}

// ------------------------------
// VIEW CART (modal)
// ------------------------------
function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem('bookHavenCart')) || [];
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
    } else {
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            cartList.appendChild(li);
        });
    }

    document.getElementById("cartModal").style.display = "block";
}

// ------------------------------
// CLOSE MODAL
// ------------------------------
function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}

// ------------------------------
// CLEAR CART
// ------------------------------
function clearCart() {
    sessionStorage.removeItem('bookHavenCart');
    alert("Your cart has been cleared.");
}

// ------------------------------
// PROCESS ORDER
// ------------------------------
function processOrder() {
    sessionStorage.removeItem('bookHavenCart');
    alert("Thank you for your order! Your cart has been cleared.");
    closeModal();
}
function saveCustomOrder(event) {
    event.preventDefault();

    const orderData = {
        name: document.getElementById("customerName").value,
        email: document.getElementById("customerEmail").value,
        phone: document.getElementById("customerPhone").value,
        address: document.getElementById("customerAddress").value,
        details: document.getElementById("orderDetails").value
    };

    localStorage.setItem("customOrder", JSON.stringify(orderData));

    window.location.href = "confirmation.html";
}
