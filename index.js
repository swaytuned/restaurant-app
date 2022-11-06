"use strict";

import { menuArray } from "./data.js";

// console.log(menuArray)

// pull menu from array
const getMenu = () => {
	let menuHtml = "";

	menuArray.forEach((food) => {
		menuHtml += `
        <div class="main-menu">
            <div class="menu-item">
                <p class="menu-emoji">${food.emoji} </p>
                <h2>${food.name}</h2>
                <p class="ingredients">${food.ingredients}</p>
                <p>$${food.price}</p>
                <div class="button">
                    <button class="add-button" id="add-button" data-add="${food.id}">+</button>
                </div>
            </div>
        </div>
    `;
	});

	return menuHtml;
};

// Listens for clicks on button press. currently not working.
const test = document.addEventListener("click", (event) => {
	event.preventDefault;
	if (event.target.dataset.add) {
		checkout();
		console.log(event.target.dataset.add);
		console.log("clicked");
	}
});
// does increment belong in a speparate function?

// -------------------------------
// Checkout Function
// incremental and addition operator should be used here.

const checkout = () => {
	let totalHtml = "";
	const totalPrice = document.getElementById("total-cost");
	const itemPrice = document.getElementById("item-price");
	const totalCount = document.getElementById("total-count");
	let itemCount = document.getElementById("item-count");
	const itemRemove = document.getElementById("item-remove");

	let count = 0;
	let price = 0;

	const handleIncrement = () => {
		if (test < count) {
			count++;
			totalCount.innerHTML = totalHtml;
		}
		if (test < price) {
			price++;
			totalPrice.innerHTML = price;
		}
	};
	console.log(handleIncrement());

	const handleDecrement = () => {
		itemRemove.addEventListener("click", (event) => {
			event.preventDefault;
			if (event.target.dataset.add) {
				console.log(event.target.dataset.add);
				console.log("removed");
			}
		});

		if (itemRemove) {
			count--;
			totalCount.innerHTML = count;
			 return total
		}
		if (itemRemove) {
			price--;
			totalPrice.innerHTML = price;
			total
		}
	};

	// -------------------------------------------------------------
	menuArray.forEach((food) => {
		totalHtml += `
        <div class="order" id="order">
            <h2> Your Order </h2>
            <br>
            <br>
            <div id="your-order">
                <h2 class="item-name" id="item-name"> ${food.name} </h2>
                <button class="item-remove" id="item-remove"> Remove </button>
                <h4 class="item-price" id="item-price">$ ${food.price} </h4>
                <h2 class="item-count" id="item-count">${count} </h2>
            </div>
            <div class="total-handle" id="total-handle">
                <h2 class="total-price">Total price: </h2>
                <p class="total-cost" id="total-cost">$ ${price} </p>
                <buttton class="pay-button" id="pay-button"> Complete Order </button>
            </div>
            
        </div>
    `;
	});
	return totalHtml;
	// once checkout is confirmed it pops up payment modal

	// if complete order button clicked
	// then opens/unhide modal in payemnt function

	const total = document.getElementById("total");
	total.innerHTML = checkout();
};

// --------------------------
// payment Function
const payment = () => {
	const total = document.getElementById("total");
	total.innerHTML = checkout();
	// if payment button is clicked
	// then make modal popup
	// change class to remove hidden
	const payment = document.getElementById("payment-modal");

	payment.style.display = "inline".addEventListener("submit", function (event) {
		event.preventDefault();
		console.log("payment sent");
	});
};

// todo list:

// math stuff
// create modal for payment details
// hide modal and display thanks

// -----------------------------------
// call render
const render = () => {
	const menu = document.getElementById("menu");

	menu.innerHTML = getMenu();

	
};

render();

// comment just to test and update, Hi Silas.
