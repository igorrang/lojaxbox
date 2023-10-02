// script.js

document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");
    
    buyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Produto adicionado ao carrinho!");
        });
    });
});
// script.js

// script.js

document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const cartIcon = document.querySelector(".cart-icon");
    const cartItemCount = document.getElementById("cart-item-count");

    const cart = [];

    buyButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            const product = {
                name: `Produto ${index + 1}`,
                price: parseFloat(button.parentElement.querySelector(".price").textContent.slice(3))
            };

            cart.push(product);

            // Atualizar o carrinho
            updateCart();
        });
    });

    checkoutButton.addEventListener("click", function () {
        alert("Compra finalizada! Total: R$ " + cartTotal.textContent);
    });

    // Adicione um evento de clique para os botões de remoção
    cartItems.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-button")) {
            const indexToRemove = parseInt(event.target.getAttribute("data-index"));
            cart.splice(indexToRemove, 1);

            // Atualizar o carrinho após a remoção do item
            updateCart();
        }
    });

    function updateCart() {
        cartItemCount.textContent = cart.length;
        cartItems.innerHTML = ""; // Limpa os itens anteriores

        let total = 0;

        cart.forEach(function (item, index) {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.classList.add("remove-button");
            removeButton.setAttribute("data-index", index);

            listItem.appendChild(removeButton);
            cartItems.appendChild(listItem);

            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);

        // Exibe o carrinho se houver itens nele
        if (cart.length > 0) {
            document.querySelector(".cart").style.display = "block";
        } else {
            document.querySelector(".cart").style.display = "none";
        }
    }
});

