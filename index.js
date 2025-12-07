let currentProduct = {};
let cart = [];
let total = 0;

// Відкрити модальне вікно
function openQuantityModal(name, price) {
    currentProduct = { name, price };

    document.getElementById("modalProductName").textContent = name;
    document.getElementById("modalProductPrice").textContent = price;

    document.getElementById("quantityModal").style.display = "flex";
}

// Закрити модальне вікно
function closeModal() {
    document.getElementById("quantityModal").style.display = "none";
}

// Додати до кошика
function addToCart() {
    let quantity = Number(document.getElementById("quantityInput").value);

    let itemTotal = currentProduct.price * quantity;

    // Додаємо в масив
    cart.push({
        name: currentProduct.name,
        quantity: quantity,
        price: currentProduct.price,
        total: itemTotal
    });

    // Оновлюємо підсумок
    total += itemTotal;

    updateCart();

    closeModal();
}

// Оновити відображення кошика
function updateCart() {
    let list = document.getElementById("cartList");
    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} — ${item.quantity} шт. = ${item.total} грн`;
        list.appendChild(li);
    });

    document.getElementById("totalPrice").textContent = total;
}
