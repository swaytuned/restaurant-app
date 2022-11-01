"use strict";

import { menuArray } from "./data.js";

// console.log(menuArray)

// pull menu from array
const getMenu = () => {
	let menuHtml = ``;

	menuArray.forEach((food) => {
		menuHtml += `
        <div class="main-menu">
            <div class="menu-item">
                <p class="menu-emoji">${food.emoji} </p>
                <h2>${food.name}</h2>
                <p>${food.ingredients}</p>
                <p>$${food.price}</p>
                <button class="${food.id}" id="add-button">+</button>
            </div>
        </div>

        <script>
            document.getElementById("main-menu").style.flexDirection = "row"
        </script>
    `;
	});

    return menuHtml;

    // temporary until I figure out how to connect the buttons
    document.getElementById("add-button").addEventListener("click", (food) => {
        
		console.log("click");
	});

    const totalHtml = document.getElementById("total");

	totalHtml.innerHTML += `
        <div class="order" id="order">
            <h2> Your Order </h2>
            <br>
            <br>
            <div id="your-order">
                <h2 class="item-name" id="item-name"> </h2>
                <button class="item-remove" id="item-remove">remove </button>
                <h4 class="item-price" id="item-price"> </h4>
            </div>
            <div class="total-handle" id="total-handle">
                <h2 class="total-price" id="total-price">Total price: </h2>
                <p class="total-cost" id="total-cost"> </p>
            </div>
        </div>
    `;
};


// -------------------------------
// Checkout Function
const checkout = () => {
	// once checkout is confirmed it pops up payment modal
	console.log(addItem);
};

// --------------------------
// payment Function
const payment = () => {
	// makes modal popup
	const payment = document.getElementById("payment-modal");

	payment.style.display = "inline".addEventListener("submit", function (event) {
		event.preventDefault();
		console.log("payment sent");
	});
};

// todo list:
// show array
// add in incremnetal counter
// math stuff
// create modal for payment details
// hide modal and display thanks

// -----------------------------------
// call render
const render = () => {
	const menu = document.getElementById("menu");
	menu.innerHTML = getMenu();
	console.log("stuff here");
};

render();

// comment just to test and update, Hi Silas.
