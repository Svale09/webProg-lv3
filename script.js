// Get elements
const cartButton = document.querySelector(".cart-button");
const cartBadge = document.querySelector(".cart-badge");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close");
const buyButton = document.querySelector(".buy-btn");
const cartItemsList = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const itemsGrid = document.querySelector(".items-grid");
const toastMessage = document.getElementById("toastMessage");

let items = [
  {
    id: 1,
    name: "iPhone15",
    price: 929.99,
    available: 2,
    category: "phones",
    imageUrl:
      "https://istyle.hr/media/catalog/product/i/p/iphone_15_pro_max_black_titanium_pdp_image_position-1__en-us_2.jpg",
  },
  {
    id: 2,
    name: "GalaxyS24",
    price: 1019.99,
    available: 1,
    category: "phones",
    imageUrl:
      "https://www.links.hr/content/images/thumbs/019/0198948_smartphone-samsung-galaxy-s24-6-2-8gb-256gb-android-14-sivi-010301814.jpg",
  },
  {
    id: 3,
    name: "iPad9",
    price: 599.99,
    available: 1,
    category: "computers&laptops",
    imageUrl: "https://aloalo.hr/upload/catalog/product/20242/1668177655_0250180_001.jpg",
  },
  {
    id: 4,
    name: "WatchS9",
    price: 499.99,
    available: 2,
    category: "phone_accesories",
    imageUrl: "https://istyle.hr/media/catalog/product/a/p/apple_watch_series_9_gps_41mm_midnight_aluminum_midnight_sport_loop_34fr_screen__usen_t-0.jpg",
  },
  {
    id: 5,
    name: "MxMaster3",
    price: 129.99,
    available: 4,
    category: "computer_accesories",
    imageUrl: "https://www.instar-informatika.hr/slike/velike/mis-logitech-mx-master-3s-bezicni-ergono-log-mx-master3s-bl_1.jpg",
  },
  {
    id: 6,
    name: "LogiK380",
    price: 49.99,
    available: 3,
    category: "computer_accesories",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4415/4415400_sd.jpg",
  },
  {
    id: 7,
    name: "AirPodsPro",
    price: 274.99,
    available: 5,
    category: "phone_accesories",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985",
  },
  {
    id: 8,
    name: "MacBook Pro 16",
    price: 2499.99,
    available: 2,
    category: "computers&laptops",
    imageUrl: "https://source.boomplaymusic.com/buzzgroup1/M00/27/BA/rBEeLGGcL3-ADnPtAAFmC1jjhHQ532.png",
  },
  {
    id: 9,
    name: "Surface Pro 9",
    price: 899.99,
    available: 3,
    category: "computers&laptops",
    imageUrl: "https://www.mall.hr/i/92458997",
  },
  {
    id: 10,
    name: "Pixel 7",
    price: 699.99,
    available: 4,
    category: "phones",
    imageUrl: "https://m.media-amazon.com/images/I/615rI0PoyOL.jpg",
  },
  {
    id: 11,
    name: "Sony WH-1000XM5",
    price: 349.99,
    available: 5,
    category: "phone_accesories",
    imageUrl: "https://lifemobile.lk/wp-content/uploads/2022/06/Sony-WH-1000XM5-Noise-Cancelling-Wireless-Headphones.jpg",
  },
  {
    id: 12,
    name: "Kindle Paperwhite",
    price: 139.99,
    available: 7,
    category: "computers&laptops",
    imageUrl: "https://m.media-amazon.com/images/G/01/kindle/journeys/5xlDnKG94P0ryVnD8MqFmnIhMKBXE2F2BxyzUQHa63Hhs3D/OWM3NzhlN2Ut._CB625115166_.jpg",
  },
  {
    id: 13,
    name: "Nintendo Switch OLED",
    price: 349.99,
    available: 3,
    category: "computers&laptops",
    imageUrl: "https://www.links.hr/content/images/thumbs/011/0114145_igraca-konzola-nintendo-switch-oled-red-blue-joy-con-650104084.jpg",
  },
  {
    id: 14,
    name: "Razer DeathAdder V2",
    price: 69.99,
    available: 6,
    category: "computer_accesories",
    imageUrl: "https://instar-informatika.hr/slike/velike/mis-razer-deathadder-v2-ergonomic-wired--rz01-03210100-r3m1_1.jpg",
  },
  {
    id: 15,
    name: "Samsung 980 Pro SSD 1TB",
    price: 149.99,
    available: 4,
    category: "computer_accesories",
    imageUrl: "https://csdam.net/digitalcontent/0/3459/34595907.jpg",
  },
  {
    id: 16,
    name: "Dell XPS 13",
    price: 999.99,
    available: 2,
    category: "computers&laptops",
    imageUrl: "https://images-cdn.ubuy.co.in/635f8ad9afed8b54834faff3-dell-xps-13-plus-9320-13-4.jpg",
  },
  {
    id: 17,
    name: "Google Nest Hub (2nd Gen)",
    price: 99.99,
    available: 3,
    category: "computer_accesories",
    imageUrl: "https://www.hgspot.hr/image/catalog/slike/189261-878.jpg?v=1.955059959",
  },
  {
    id: 18,
    name: "Samsung Galaxy Buds Pro",
    price: 179.99,
    available: 2,
    category: "phone_accesories",
    imageUrl: "https://www.mobiri.hr/wp-content/uploads/2022/03/Genuine-Samsung-Galaxy-Buds-Pro-SM-R190-Wireless-Earphones-Charging-Case-Phantom-Black-8806090984594-18012021-05-p.jpg",
  },
  {
    id: 19,
    name: "Apple AirTag",
    price: 29.99,
    available: 10,
    category: "phone_accesories",
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000",
  },
  {
    id: 20,
    name: "Sony PlayStation 5",
    price: 499.99,
    available: 1,
    category: "computers&laptops",
    imageUrl: "https://www.links.hr/content/images/thumbs/019/0196731_igraca-konzola-sony-playstation-5-slim-d-chassis-1tb-ssd-blu-ray-dualsense-kontroler-bijela-0111010.jpg",
  },
];

let cart = [];

function fillItemsGrid() {
  for (const item of items) {
    let itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
              <div class="image-container">
                  <img src="${item.imageUrl}" alt="${item.name}" class="item-image">
              </div>
              <h2>${item.name}</h2>
              <p>$${item.price}</p>
              <button class="add-to-cart-btn" data-id="${item.id}">Add to cart</button>
          `;
    itemsGrid.appendChild(itemElement);
  }
}

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function showToast(message) {
  toastMessage.textContent = message;
  toastMessage.style.display = "block";
  setTimeout(() => {
    toastMessage.style.display = "none";
  }, 3000);
}

function updateCartBadge() {
  cartBadge.textContent = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;
  cart.forEach((cartItem, index) => {
    let cartItemElement = document.createElement("li");
    cartItemElement.innerHTML = `
            <div class="cart-item-details">
                <span>${cartItem.name}</span>
                <div class="quantity-controls">
                    <button class="decrease-quantity-btn" data-index="${index}">-</button>
                    <span>${cartItem.quantity}</span>
                    <button class="increase-quantity-btn" data-index="${index}">+</button>
                </div>
            </div>
            <span class="cart-item-total">$${(
              cartItem.price * cartItem.quantity
            ).toFixed(2)}</span>
        `;
    cartItemsList.appendChild(cartItemElement);
    total += cartItem.price * cartItem.quantity;
  });
  cartTotal.textContent = `$${total.toFixed(2)}`;
  updateCartBadge();

  // Add event listeners to increase and decrease buttons
  const decreaseButtons = document.querySelectorAll(".decrease-quantity-btn");
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      decreaseItemQuantity(index);
    });
  });

  const increaseButtons = document.querySelectorAll(".increase-quantity-btn");
  increaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      increaseItemQuantity(index);
    });
  });
}

function addItemToCart(itemId) {
  const item = items.find((item) => item.id == itemId);
  if (item) {
    if (item.available > 0) {
      const cartItem = cart.find((cartItem) => cartItem.id == itemId);
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
  const item = items.find((item) => item.id == cartItem.id);
  item.available++;
  showToast(`${cartItem.name} quantity decreased.`);
  updateCart();
}

function increaseItemQuantity(index) {
  const cartItem = cart[index];
  const item = items.find((item) => item.id == cartItem.id);
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

cartButton.addEventListener("click", toggleModal);
modalClose.addEventListener("click", toggleModal);

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id");
    button.addEventListener("click", () => addItemToCart(itemId));
  });
});

buyButton.addEventListener("click", () => {
  if (cart.length > 0) {
    showToast("Purchase completed!");
    cart.forEach((cartItem) => {
      const item = items.find((item) => item.id === cartItem.id);
      if (item) {
        item.available -= cartItem.quantity;
      }
    });
    cart = [];
    updateCart();
    toggleModal();
  } else {
    showToast("Your cart is empty. Add some items to your cart and try again");
  }
});

//Added funtionality: sort items

document.getElementById("sortSelect").addEventListener("change", () => {
  const sortValue = document.getElementById("sortSelect").value;
  sortItems(sortValue);
});

function sortItems(sortValue) {
  switch (sortValue) {
    case "priceLowToHigh":
      items.sort((a, b) => a.price - b.price);
      break;
    case "priceHighToLow":
      items.sort((a, b) => b.price - a.price);
      break;
    case "nameAToZ":
      items.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "nameZToA":
      items.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  itemsGrid.innerHTML = "";
  fillItemsGrid();
}

//Filter items
function filterItemsByCategory(category) {
  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;
  itemsGrid.innerHTML = "";
  filteredItems.forEach((item) => {
    let itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
            <img src="https://picsum.photos/200/300?random=${item.id}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>$${item.price}</p>
            <button class="add-to-cart-btn" data-id="${item.id}">Add to cart</button>
        `;
    itemsGrid.appendChild(itemElement);
  });
}

document
  .getElementById("category-filter")
  .addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "all") {
      fillItemsGrid(); // Display all items
    } else {
      filterItemsByCategory(selectedCategory);
    }
  });
