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
        category: 'phones'
    },
    {
        id: 2,
        name: 'GalaxyS24',
        price: 1019.99,
        available: 1,
        category: 'phones'
    },
    {
        id: 3,
        name: 'iPad9',
        price: 599.99,
        available: 1,
        category: 'computers&laptops'
    },
    {
        id: 4,
        name: 'WatchS9',
        price: 499.99,
        available: 2,
        category: 'phone_accesories'
    },
    {
        id: 5,
        name: 'MxMaster3',
        price: 129.99,
        available: 4,
        category: 'computer_accesories'
    },
    {
        id: 6,
        name: 'LogiK380',
        price: 49.99,
        available: 3,
        category: 'computer_accesories'
    },
    {
        id: 7,
        name: 'AirPodsPro',
        price: 274.99,
        available: 5,
        category: 'phone_accesories'
    },
    {
        id: 8,
        name: 'MacBook Pro 16',
        price: 2499.99,
        available: 2,
        category: 'computers&laptops'
    },
    {
        id: 9,
        name: 'Surface Pro 9',
        price: 899.99,
        available: 3,
        category: 'computers&laptops'
    },
    {
        id: 10,
        name: 'Pixel 7',
        price: 699.99,
        available: 4,
        category: 'phones'
    },
    {
        id: 11,
        name: 'Sony WH-1000XM5',
        price: 349.99,
        available: 5,
        category: 'phone_accesories'
    },
    {
        id: 12,
        name: 'Kindle Paperwhite',
        price: 139.99,
        available: 7,
        category: 'computers&laptops'
    },
    {
        id: 13,
        name: 'Nintendo Switch OLED',
        price: 349.99,
        available: 3,
        category: 'computers&laptops'
    },
    {
        id: 14,
        name: 'Razer DeathAdder V2',
        price: 69.99,
        available: 6,
        category: 'computer_accesories'
    },
    {
        id: 15,
        name: 'Samsung 980 Pro SSD 1TB',
        price: 149.99,
        available: 4,
        category: 'computer_accesories'
    },
    {
        id: 16,
        name: 'Dell XPS 13',
        price: 999.99,
        available: 2,
        category: 'computers&laptops'
    },
    {
        id: 17,
        name: 'Google Nest Hub (2nd Gen)',
        price: 99.99,
        available: 3,
        category: 'computer_accesories'
    },
    {
        id: 18,
        name: 'Samsung Galaxy Buds Pro',
        price: 179.99,
        available: 2,
        category: 'phone_accesories'
    },
    {
        id: 19,
        name: 'Apple AirTag',
        price: 29.99,
        available: 10,
        category: 'phone_accesories'
    },
    {
        id: 20,
        name: 'Sony PlayStation 5',
        price: 499.99,
        available: 1,
        category: 'computers&laptops'
    }
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
    cartBadge.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach((cartItem, index) => {
        let cartItemElement = document.createElement('li');
        cartItemElement.innerHTML = `
            <div class="cart-item-details">
                <span>${cartItem.name}</span>
                <div class="quantity-controls">
                    <button class="decrease-quantity-btn" data-index="${index}">-</button>
                    <span>${cartItem.quantity}</span>
                    <button class="increase-quantity-btn" data-index="${index}">+</button>
                </div>
            </div>
            <span class="cart-item-total">$${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
        `;
        cartItemsList.appendChild(cartItemElement);
        total += cartItem.price * cartItem.quantity;
    });
    cartTotal.textContent = `$${total.toFixed(2)}`;
    updateCartBadge();

    // Add event listeners to increase and decrease buttons
    const decreaseButtons = document.querySelectorAll('.decrease-quantity-btn');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            decreaseItemQuantity(index);
        });
    });

    const increaseButtons = document.querySelectorAll('.increase-quantity-btn');
    increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            increaseItemQuantity(index);
        });
    });
}

function addItemToCart(itemId) {
    const item = items.find(item => item.id == itemId);
    if (item) {
        if (item.available > 0) {
            const cartItem = cart.find(cartItem => cartItem.id == itemId);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
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

function decreaseItemQuantity(index) {
    const cartItem = cart[index];
    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        cart.splice(index, 1);
    }
    const item = items.find(item => item.id == cartItem.id);
    item.available++;
    showToast(`${cartItem.name} quantity decreased.`);
    updateCart();
}

function increaseItemQuantity(index) {
    const cartItem = cart[index];
    const item = items.find(item => item.id == cartItem.id);
    if (item.available > 0) {
        cartItem.quantity++;
        item.available--;
        showToast(`${cartItem.name} quantity increased.`);
        updateCart();
    } else {
        showToast(`${cartItem.name} is currently out of stock.`);
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
        cart.forEach(cartItem => {
            const item = items.find(item => item.id === cartItem.id);
            if (item) {
                item.available -= cartItem.quantity;
            }
        });
        cart = [];
        updateCart();
        toggleModal();
    } else {
        showToast('Your cart is empty. Add some items to your cart and try again');
    }
});

//Added funtionality: sort items

document.getElementById('sortSelect').addEventListener('change', () => {
    const sortValue = document.getElementById('sortSelect').value;
    sortItems(sortValue);
});

function sortItems(sortValue) {
    switch (sortValue) {
        case 'priceLowToHigh':
            items.sort((a, b) => a.price - b.price);
            break;
        case 'priceHighToLow':
            items.sort((a, b) => b.price - a.price);
            break;
        case 'nameAToZ':
            items.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nameZToA':
            items.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }
    // Clear existing items grid and refill with sorted items
    itemsGrid.innerHTML = '';
    fillItemsGrid();
}
