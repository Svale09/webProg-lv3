// Get elements
const cartButton = document.querySelector('.cart-button');
const cartBadge = document.querySelector('.cart-badge');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close');
const buyButton = document.querySelector('.buy-btn');
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const itemsGrid = document.querySelector('.items-grid');

let items = [
    {
        id: 1,
        name: 'iPhone15',
        price: 929.99,
        available: 2,
    },
    {
        id: 2,
        name: 'GalaxyS24',
        price: 1019.99,
        available: 1,
    },
    {
        id: 3,
        name: 'iPad9',
        price: 599.99,
        available: 1,
    },
    {
        id: 4,
        name: 'WatchS9',
        price: 499.99, 
        available: 2, 
    },
    {
        id: 5,
        name: 'MxMaster3',
        price: 129.99,  
        available: 4,
    },
    {
        id: 6,
        name: 'LogiK380',
        price: 49.99, 
        available: 3,
    },
    {
        id: 6,
        name: 'AirPodsPro',
        price: 274.99,  
        available: 5,
      },
];

let cart = [];

// An example function that creates HTML elements using the DOM.
function fillItemsGrid() {
    for (const item of items) {
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <img src="https://picsum.photos/200/300?random=${item.id}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>$${item.price}</p>
            <button class="add-to-cart-btn" data-id="${item.id}">Add to cart</button>
        `;
        itemsGrid.appendChild(itemElement);
    }
}

// Adding the .show-modal class to an element will make it visible
// because it has the CSS property display: block; (which overrides display: none;)
// See the CSS file for more details.
function toggleModal() {
  modal.classList.toggle('show-modal');
}

// Call fillItemsGrid function when page loads
fillItemsGrid();

// Example of DOM methods for adding event handling
cartButton.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(function(button){
        const itemId = button.getAttribute('data-id');
        button.addEventListener("click", () => addItemToCart(itemId));
    });
});


function addItemToCart(itemId) {
    console.log(itemId)
    var item = items.find(item => item.id == itemId);
    if (item) {
        if (item.available > 0) {
            cart.push(item);
            item.available--;
            console.log(`${item.name} added to cart.`);
        } else {
            console.log(`${item.name} is currently out of stock.`);
        }
    } else {
        console.log("Item not found. Type the command view to see all available items");
    }
}