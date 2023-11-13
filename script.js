"use strict";

const shoppingList = ["Pane", "Acqua", "Cipolle", "Ketchup", "Pasta", "Ricotta", "Grana", "Melanzane", "Latte", "Brioschi"];
const divShoppingList = document.querySelector(".list");
let contatore = 0;

while (contatore < shoppingList.length) {
    const product = document.createElement("li");
    product.classList.add("product");
    product.innerHTML = `<input class="form - check - input me - 1" type="checkbox" value="" id="firstCheckboxStretched"><label class="form-check-label" for="firstRadio">${shoppingList[contatore]}</label>`;
    divShoppingList.append(product);
    contatore++;
}