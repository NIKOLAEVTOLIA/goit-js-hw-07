"use strict";

const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const categoryItems = item.querySelectorAll("ul li");
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems.length}`);
});