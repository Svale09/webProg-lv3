// Get elements
const cartButton = document.querySelector('.cart-button');
const cartBadge = document.querySelector('.cart-badge');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close');
const buyButton = document.querySelector('.buy-btn');
const cartItemsList = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const itemsGrid = document.querySelector('.items-grid');
const toastMessage = document.getElementById('toastMessage');

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
        id: 7,
        name: 'AirPodsPro',
        price: 274.99,
        available: 5,
    },
];

let cart = [];

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

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function showToast(message) {
    toastMessage.textContent = message;
    toastMessage.style.display = 'block';
    setTimeout(() => {
        toastMessage.style.display = 'none';
    }, 3000);
}

function updateCartBadge() {
    cartBadge.textContent = cart.length;
}

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = `$${total.toFixed(2)}`;
    updateCartBadge();
}

function addItemToCart(itemId) {
    const item = items.find(item => item.id == itemId);
    if (item) {
        if (item.available > 0) {
            cart.push(item);
            item.available--;
            showToast(`${item.name} added to cart.`);
            updateCart();
        } else {
            showToast(`${item.name} is currently out of stock.`);
        }
    } else {
        showToast("Item not found.");
    }
}

fillItemsGrid();

cartButton.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        const itemId = button.getAttribute('data-id');
        button.addEventListener('click', () => addItemToCart(itemId));
    });
});

buyButton.addEventListener('click', () => {
    if (cart.length > 0) {
        showToast('Purchase completed!');
        cart = [];
        updateCart();
        toggleModal();
    } else {
        showToast('Your cart is empty.');
    }
});
