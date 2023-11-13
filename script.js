"use strict";

const shoppingList = ["Pane", "Acqua", "Cipolle", "Ketchup", "Pasta", "Ricotta", "Biscotti", "Melanzane", "Latte", "Brioschi"];
const divShoppingList = document.querySelector(".list");
let contatore = 0;

while (contatore < shoppingList.length) {
    const product = document.createElement("li");
    product.classList.add("product");
    product.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="radio${contatore}"><label class="form-check-label" for="radio${contatore}">${shoppingList[contatore]}</label>`;
    divShoppingList.append(product);
    contatore++;
}