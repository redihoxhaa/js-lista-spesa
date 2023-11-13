"use strict";

const shoppingList = ["Pane", "Acqua", "Cipolle", "Ketchup", "Pasta", "Ricotta", "Grana", "Melanzane", "Latte", "Brioschi"];
const divShoppingList = document.querySelector(".list");
let contatore = 0;

while (contatore < shoppingList.length) {
    const product = document.createElement("li");
    product.classList.add("product");
    product.append(shoppingList[contatore]);
    divShoppingList.append(product);
    contatore++;
}