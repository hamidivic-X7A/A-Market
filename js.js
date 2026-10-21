
"use strict";

/* ==========================================
   A-MARKET — ONLAYN SUPERMARKET
   Narxlar namunaviy, valyuta: O'zbek so'mi
========================================== */

const PRODUCTS = [
  {
    id: 1, name: "Olma", category: "meva", categoryName: "Meva-sabzavot",
    price: 12000, unit: "1 kg", badge: "Mashhur",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2, name: "Banan", category: "meva", categoryName: "Meva-sabzavot",
    price: 22000, unit: "1 kg", badge: "",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3, name: "Pomidor", category: "meva", categoryName: "Meva-sabzavot",
    price: 16000, unit: "1 kg", badge: "",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4, name: "Kartoshka", category: "meva", categoryName: "Meva-sabzavot",
    price: 6500, unit: "1 kg", badge: "Qulay narx",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5, name: "Sut 2,5%", category: "sut", categoryName: "Sut mahsulotlari",
    price: 14000, unit: "1 litr", badge: "",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6, name: "Pishloq", category: "sut", categoryName: "Sut mahsulotlari",
    price: 48000, unit: "1 kg", badge: "",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7, name: "Sariyog'", category: "sut", categoryName: "Sut mahsulotlari",
    price: 18000, unit: "200 g", badge: "",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8, name: "Tuxum", category: "go‘sht", categoryName: "Go‘sht va tuxum",
    price: 18000, unit: "10 dona", badge: "Kundalik",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9, name: "Tovuq go‘shti", category: "go‘sht", categoryName: "Go‘sht va tuxum",
    price: 35000, unit: "1 kg", badge: "",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10, name: "Mol go‘shti", category: "go‘sht", categoryName: "Go‘sht va tuxum",
    price: 95000, unit: "1 kg", badge: "",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11, name: "Ichimlik suvi", category: "ichimlik", categoryName: "Ichimliklar",
    price: 4000, unit: "1,5 litr", badge: "",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12, name: "Apelsin sharbati", category: "ichimlik", categoryName: "Ichimliklar",
    price: 15000, unit: "1 litr", badge: "",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13, name: "Qora choy", category: "ichimlik", categoryName: "Ichimliklar",
    price: 12000, unit: "100 g", badge: "",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14, name: "Oq non", category: "non", categoryName: "Non va pishiriqlar",
    price: 4000, unit: "1 dona", badge: "Yangi",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15, name: "Kruassan", category: "non", categoryName: "Non va pishiriqlar",
    price: 9000, unit: "1 dona", badge: "",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16, name: "Shokolad", category: "shirinlik", categoryName: "Shirinliklar",
    price: 12000, unit: "100 g", badge: "",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17, name: "Pechenye", category: "shirinlik", categoryName: "Shirinliklar",
    price: 11000, unit: "300 g", badge: "",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18, name: "Guruch", category: "oziq", categoryName: "Oziq-ovqat",
    price: 18000, unit: "1 kg", badge: "",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19, name: "Makaron", category: "oziq", categoryName: "Oziq-ovqat",
    price: 10000, unit: "500 g", badge: "",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20, name: "Kungaboqar yog‘i", category: "oziq", categoryName: "Oziq-ovqat",
    price: 22000, unit: "1 litr", badge: "",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21, name: "Idish yuvish vositasi", category: "uy", categoryName: "Uy-ro‘zg‘or",
    price: 16000, unit: "500 ml", badge: "",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22, name: "Qog‘oz salfetka", category: "uy", categoryName: "Uy-ro‘zg‘or",
    price: 9000, unit: "1 qadoq", badge: "",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23, name: "Bodring", category: "meva", categoryName: "Meva-sabzavot",
    price: 10000, unit: "1 kg", badge: "",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24, name: "Qatiq", category: "sut", categoryName: "Sut mahsulotlari",
    price: 10000, unit: "500 ml", badge: "",
    image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=600&q=80"
  }
];

/* NARX VA YETKAZIB BERISH SOZLAMALARI */

const CONFIG = {
  deliveryFee: 15000,
  freeDeliveryFrom: 200000,
  maxQuantity: 99
};

/* MA'LUMOTLARNI SAQLASH */

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("Saqlangan ma'lumotni o'qib bo'lmadi:", error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Ma'lumotni saqlab bo'lmadi:", error);
    showToast("Brauzer ma'lumotni saqlay olmadi.");
  }
}

let cart = loadStorage("amarket_cart", []);
let favorites = loadStorage("amarket_favorites", []);
let orders = loadStorage("amarket_orders", []);

if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(favorites)) favorites = [];
if (!Array.isArray(orders)) orders = [];

cart = cart.filter(item =>
  PRODUCTS.some(product => product.id === Number(item.id)) &&
  Number.isInteger(Number(item.qty)) &&
  Number(item.qty) > 0
).map(item => ({
  id: Number(item.id),
  qty: Math.min(Number(item.qty), CONFIG.maxQuantity)
}));

favorites = favorites.filter(id =>
  PRODUCTS.some(product => product.id === Number(id))
).map(Number);

/* HOLAT */

let activeCategory = "all";
let searchQuery = "";
let showFavoritesOnly = false;
let toastTimer = null;

/* ELEMENTLAR */

const $ = selector => document.querySelector(selector);

const productGrid = $("#productGrid");
const resultsCount = $("#resultsCount");
const emptyState = $("#emptyState");
const categoryList = $("#categoryList");
const sortSelect = $("#sortSelect");
const searchInput = $("#searchInput");

const overlay = $("#overlay");
const cartDrawer = $("#cartDrawer");
const checkoutModal = $("#checkoutModal");
const successModal = $("#successModal");

const cartItems = $("#cartItems");
const cartEmpty = $("#cartEmpty");
const cartSummary = $("#cartSummary");

const formatter = new Intl.NumberFormat("uz-UZ");

function money(value) {
  return formatter.format(value) + " so‘m";
}

function getProduct(id) {
  return PRODUCTS.find(product => product.id === Number(id));
}

function getCartQuantity(id) {
  const item = cart.find(row => row.id === Number(id));
  return item ? item.qty : 0;
}

function getSubtotal() {
  return cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function getDeliveryFee() {
  const subtotal = getSubtotal();

  if (subtotal === 0) return 0;
  if (subtotal >= CONFIG.freeDeliveryFrom) return 0;

  return CONFIG.deliveryFee;
}

function getGrandTotal() {
  return getSubtotal() + getDeliveryFee();
}

function getTotalQuantity() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

/* XAVFSIZ MATN CHIQARISH */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

/* XABAR */

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("visible");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

/* KATEGORIYA VA QIDIRUV */

function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (activeCategory !== "all") {
    list = list.filter(product => product.category === activeCategory);
  }

  if (searchQuery.trim()) {
    const query = searchQuery.trim().toLocaleLowerCase("uz-UZ");

    list = list.filter(product => {
      const searchable = (
        product.name + " " + product.categoryName + " " + product.unit
      ).toLocaleLowerCase("uz-UZ");

      return searchable.includes(query);
    });
  }

  if (showFavoritesOnly) {
    list = list.filter(product => favorites.includes(product.id));
  }

  switch (sortSelect.value) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;

    case "name":
      list.sort((a, b) =>
        a.name.localeCompare(b.name, "uz")
      );
      break;
  }

  return list;
}

/* MAHSULOT KARTALARI */

function renderProducts() {
  const products = getFilteredProducts();

  resultsCount.textContent =
    `${products.length} ta mahsulot topildi`;

  emptyState.classList.toggle("hidden", products.length > 0);
  productGrid.classList.toggle("hidden", products.length === 0);

  $("#clearFilters").classList.toggle(
    "hidden",
    activeCategory === "all" &&
    !searchQuery &&
    !showFavoritesOnly
  );

  productGrid.innerHTML = products.map(product => {
    const qty = getCartQuantity(product.id);
    const favorite = favorites.includes(product.id);

    const badge = product.badge
      ? `<span class="product-badge">${escapeHTML(product.badge)}</span>`
      : "";

    const action = qty > 0
      ? `<div class="quantity-control">
           <button data-action="decrease" data-id="${product.id}" aria-label="Kamaytirish">−</button>
           <span>${qty}</span>
           <button data-action="increase" data-id="${product.id}" aria-label="Ko‘paytirish">+</button>
         </div>`
      : `<button class="add-btn" data-action="add" data-id="${product.id}" aria-label="Savatga qo‘shish">+</button>`;

    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img
            class="product-image"
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
            data-fallback="true"
          >
          ${badge}
          <button
            class="favorite-btn ${favorite ? "active" : ""}"
            data-action="favorite"
            data-id="${product.id}"
            aria-label="${favorite ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo‘shish"}"
            aria-pressed="${favorite}"
          >${favorite ? "♥" : "♡"}</button>
        </div>
        <div class="product-info">
          <span class="product-category">${escapeHTML(product.categoryName)}</span>
          <h3 class="product-name">${escapeHTML(product.name)}</h3>
          <span class="product-unit">${escapeHTML(product.unit)}</span>
          <div class="product-bottom">
            <span class="product-price">${money(product.price)}</span>
            ${action}
          </div>
        </div>
      </article>
    `;
  }).join("");

  updateHeader();
}

function setCategory(category) {
  activeCategory = category;
  showFavoritesOnly = false;

  $("#favoritesBtn").classList.remove("selected");

  categoryList.querySelectorAll("[data-category]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === category
    );
  });

  renderProducts();
}

function resetFilters() {
  activeCategory = "all";
  searchQuery = "";
  showFavoritesOnly = false;

  searchInput.value = "";
  sortSelect.value = "default";

  $("#favoritesBtn").classList.remove("selected");

  categoryList.querySelectorAll("[data-category]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === "all"
    );
  });

  renderProducts();
}

/* SEVIMLILAR */

function toggleFavorite(id) {
  id = Number(id);

  if (favorites.includes(id)) {
    favorites = favorites.filter(favoriteId => favoriteId !== id);
    showToast("Sevimlilardan olib tashlandi.");
  } else {
    favorites.push(id);
    showToast("Sevimlilarga qo‘shildi ♥");
  }

  saveStorage("amarket_favorites", favorites);
  renderProducts();
  updateHeader();
}

function toggleFavoritesView() {
  showFavoritesOnly = !showFavoritesOnly;

  if (showFavoritesOnly) {
    activeCategory = "all";
    $("#favoritesBtn").classList.add("selected");
  } else {
    $("#favoritesBtn").classList.remove("selected");
  }

  categoryList.querySelectorAll("[data-category]").forEach(button => {
    button.classList.toggle(
      "active",
      !showFavoritesOnly && button.dataset.category === activeCategory
    );
  });

  renderProducts();

  if (showFavoritesOnly && favorites.length === 0) {
    showToast("Hozircha sevimli mahsulotingiz yo‘q.");
  }

  $("#products").scrollIntoView({ behavior: "smooth" });
}

/* SAVAT */

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;

  const item = cart.find(row => row.id === product.id);

  if (item) {
    if (item.qty >= CONFIG.maxQuantity) {
      showToast(`Bir mahsulotdan ko‘pi bilan ${CONFIG.maxQuantity} ta olish mumkin.`);
      return;
    }

    item.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  persistCart();
  renderProducts();
  renderCart();
  showToast(`${product.name} savatga qo‘shildi.`);
}

function changeQuantity(id, change) {
  id = Number(id);

  const item = cart.find(row => row.id === id);
  if (!item) return;

  const newQty = item.qty + change;

  if (newQty > CONFIG.maxQuantity) {
    showToast(`Maksimal miqdor ${CONFIG.maxQuantity} ta.`);
    return;
  }

  if (newQty <= 0) {
    cart = cart.filter(row => row.id !== id);
  } else {
    item.qty = newQty;
  }

  persistCart();
  renderProducts();
  renderCart();
}

function removeFromCart(id) {
  const product = getProduct(id);

  cart = cart.filter(item => item.id !== Number(id));

  persistCart();
  renderProducts();
  renderCart();

  showToast(
    product
      ? `${product.name} savatdan olib tashlandi.`
      : "Mahsulot olib tashlandi."
  );
}

function persistCart() {
  saveStorage("amarket_cart", cart);
  updateHeader();
}

function updateHeader() {
  const count = getTotalQuantity();

  $("#cartCount").textContent = count;
  $("#mobileCartCount").textContent = count;
  $("#favoriteCount").textContent = favorites.length;
  $("#mobileCartTotal").textContent = money(getGrandTotal());

  $("#mobileCart").classList.toggle("hidden", count === 0);
}

/* SAVATNI CHIZISH */

function renderCart() {
  const count = getTotalQuantity();
  const subtotal = getSubtotal();
  const delivery = getDeliveryFee();

  $("#drawerSubtitle").textContent = `${count} ta mahsulot`;
  $("#subtotal").textContent = money(subtotal);
  $("#deliveryPrice").textContent =
    delivery === 0 && subtotal > 0 ? "Bepul" : money(delivery);
  $("#grandTotal").textContent = money(subtotal + delivery);
  $("#checkoutTotal").textContent = money(subtotal + delivery);

  $("#deliveryNote").textContent = subtotal === 0
    ? "Xaridni boshlash uchun mahsulot tanlang."
    : subtotal >= CONFIG.freeDeliveryFrom
      ? "Tabriklaymiz! Yetkazib berish bepul."
      : `${money(CONFIG.freeDeliveryFrom - subtotal)} ko‘proq xarid qilsangiz, yetkazib berish bepul bo‘ladi.`;

  cartEmpty.classList.toggle("hidden", count > 0);
  cartItems.classList.toggle("hidden", count === 0);
  cartSummary.classList.toggle("hidden", count === 0);

  cartItems.innerHTML = cart.map(item => {
    const product = getProduct(item.id);
    if (!product) return "";

    return `
      <article class="cart-item">
        <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" data-fallback="true">
        <div>
          <h3>${escapeHTML(product.name)}</h3>
          <small>${money(product.price)} / ${escapeHTML(product.unit)}</small>
          <div class="quantity-control">
            <button data-action="decrease" data-id="${product.id}" aria-label="Kamaytirish">−</button>
            <span>${item.qty}</span>
            <button data-action="increase" data-id="${product.id}" aria-label="Ko‘paytirish">+</button>
          </div>
          <button class="remove-item" data-action="remove" data-id="${product.id}">Olib tashlash</button>
        </div>
        <div class="cart-item-price">${money(product.price * item.qty)}</div>
      </article>
    `;
  }).join("");

  updateHeader();
}

/* OYNALAR */

function syncOverlay() {
  const isOpen =
    cartDrawer.classList.contains("open") ||
    checkoutModal.classList.contains("open") ||
    successModal.classList.contains("open");

  overlay.classList.toggle("visible", isOpen);
  document.body.classList.toggle("locked", isOpen);

  cartDrawer.setAttribute(
    "aria-hidden",
    String(!cartDrawer.classList.contains("open"))
  );

  checkoutModal.setAttribute(
    "aria-hidden",
    String(!checkoutModal.classList.contains("open"))
  );

  successModal.setAttribute(
    "aria-hidden",
    String(!successModal.classList.contains("open"))
  );
}

function openCart() {
  checkoutModal.classList.remove("open");
  successModal.classList.remove("open");
  cartDrawer.classList.add("open");
  syncOverlay();
  renderCart();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  syncOverlay();
}

function openCheckout() {
  if (cart.length === 0) {
    showToast("Avval savatga mahsulot qo‘shing.");
    return;
  }

  cartDrawer.classList.remove("open");
  successModal.classList.remove("open");
  checkoutModal.classList.add("open");
  syncOverlay();
}

function closeCheckout() {
  checkoutModal.classList.remove("open");
  syncOverlay();
}

function closeSuccess() {
  successModal.classList.remove("open");
  syncOverlay();
}

function closeAllOverlays() {
  cartDrawer.classList.remove("open");
  checkoutModal.classList.remove("open");
  successModal.classList.remove("open");
  syncOverlay();
}

/* BUYURTMA RAQAMI */

function createOrderNumber() {
  const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
  return "AM-" + Date.now().toString().slice(-7) + "-" + randomPart;
}

/* BUYURTMA FORMASI */

function normalizePhone(phone) {
  return phone.replace(/[\s()-]/g, "");
}

function isValidUzbekPhone(phone) {
  const normalized = normalizePhone(phone);

  return /^\+998\d{9}$/.test(normalized) ||
         /^998\d{9}$/.test(normalized) ||
         /^\d{9}$/.test(normalized);
}

function handleCheckout(event) {
  event.preventDefault();

  if (cart.length === 0) {
    closeCheckout();
    showToast("Savatingiz bo‘sh.");
    return;
  }

  const form = event.currentTarget;

  if (!form.reportValidity()) return;

  const formData = new FormData(form);

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const time = String(formData.get("time") || "");
  const payment = String(formData.get("payment") || "");
  const comment = String(formData.get("comment") || "").trim();

  if (name.length < 2) {
    showToast("Ism va familiyangizni to‘liq kiriting.");
    $("#customerName").focus();
    return;
  }

  if (!isValidUzbekPhone(phone)) {
    showToast("Telefonni +998 90 123 45 67 shaklida kiriting.");
    $("#customerPhone").focus();
    return;
  }

  if (address.length < 5) {
    showToast("Yetkazib berish manzilini to‘liq kiriting.");
    $("#customerAddress").focus();
    return;
  }

  const order = {
    orderNumber: createOrderNumber(),
    createdAt: new Date().toISOString(),
    status: "Demo — do‘konga yuborilmagan",
    customer: { name, phone, address },
    deliveryTime: time,
    paymentMethod: payment,
    comment,
    items: cart.map(item => {
      const product = getProduct(item.id);

      return {
        id: product.id,
        name: product.name,
        unit: product.unit,
        price: product.price,
        quantity: item.qty,
        total: product.price * item.qty
      };
    }),
    subtotal: getSubtotal(),
    deliveryFee: getDeliveryFee(),
    total: getGrandTotal()
  };

  orders.unshift(order);

  if (orders.length > 50) {
    orders = orders.slice(0, 50);
  }

  saveStorage("amarket_orders", orders);

  cart = [];
  persistCart();
  renderProducts();
  renderCart();

  form.reset();

  checkoutModal.classList.remove("open");
  cartDrawer.classList.remove("open");

  $("#successMessage").textContent =
    "Buyurtma ma'lumotlari ushbu brauzerda saqlandi.";

  $("#successDetails").innerHTML = `
    <div><strong>Buyurtma:</strong> ${escapeHTML(order.orderNumber)}</div>
    <div><strong>Xaridor:</strong> ${escapeHTML(order.customer.name)}</div>
    <div><strong>Mahsulotlar:</strong> ${order.items.reduce((sum, item) => sum + item.quantity, 0)} ta</div>
    <div><strong>Yetkazib berish:</strong> ${money(order.deliveryFee)}</div>
    <div><strong>Jami:</strong> ${money(order.total)}</div>
    <div><strong>Holati:</strong> Demo buyurtma</div>
  `;

  successModal.classList.add("open");
  syncOverlay();
}

/* RASM YUKLANMAGANDA */

document.addEventListener("error", event => {
  const image = event.target;

  if (
    image instanceof HTMLImageElement &&
    image.dataset.fallback === "true" &&
    !image.dataset.fallbackUsed
  ) {
    image.dataset.fallbackUsed = "true";
    image.removeAttribute("src");
    image.alt = image.alt + " (rasm yuklanmadi)";
    image.style.objectFit = "contain";
  }
}, true);

/* MAHSULOTLAR USTIDAGI TUGMALAR */

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "add") addToCart(id);
  if (action === "increase") changeQuantity(id, 1);
  if (action === "decrease") changeQuantity(id, -1);
  if (action === "favorite") toggleFavorite(id);
});

/* SAVAT TUGMALARI */

cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);

  if (button.dataset.action === "increase") changeQuantity(id, 1);
  if (button.dataset.action === "decrease") changeQuantity(id, -1);
  if (button.dataset.action === "remove") removeFromCart(id);
});

/* KATEGORIYALAR */

categoryList.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  setCategory(button.dataset.category);
});

document.querySelectorAll("[data-nav-category]").forEach(link => {
  link.addEventListener("click", () => {
    setCategory(link.dataset.navCategory);
  });
});

document.querySelectorAll("[data-footer-category]").forEach(link => {
  link.addEventListener("click", () => {
    setCategory(link.dataset.footerCategory);
  });
});

/* QIDIRUV */

$("#searchForm").addEventListener("submit", event => {
  event.preventDefault();

  searchQuery = searchInput.value.trim();
  showFavoritesOnly = false;

  $("#favoritesBtn").classList.remove("selected");
  renderProducts();

  $("#products").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value.trim();
  showFavoritesOnly = false;

  $("#favoritesBtn").classList.remove("selected");
  renderProducts();
});

sortSelect.addEventListener("change", renderProducts);

$("#clearFilters").addEventListener("click", resetFilters);
$("#resetSearch").addEventListener("click", resetFilters);

/* SEVIMLILAR TUGMASI */

$("#favoritesBtn").addEventListener("click", toggleFavoritesView);

/* SAVAT VA BUYURTMA TUGMALARI */

$("#openCart").addEventListener("click", openCart);
$("#footerCart").addEventListener("click", openCart);
$("#mobileCart").addEventListener("click", openCart);

$("#closeCart").addEventListener("click", closeCart);
$("#continueShopping").addEventListener("click", closeCart);

$("#goCheckout").addEventListener("click", openCheckout);
$("#closeCheckout").addEventListener("click", closeCheckout);

$("#checkoutForm").addEventListener("submit", handleCheckout);

$("#closeSuccess").addEventListener("click", () => {
  closeSuccess();
});

$("#finishOrder").addEventListener("click", () => {
  closeAllOverlays();
  $("#products").scrollIntoView({ behavior: "smooth" });
});

overlay.addEventListener("click", closeAllOverlays);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeAllOverlays();
  }
});

/* TELEFON RAQAMI UCHUN QULAY FORMAT */

$("#customerPhone").addEventListener("input", event => {
  const input = event.currentTarget;
  const digits = input.value.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("998")) {
    const local = digits.slice(3);

    input.value = `+998 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5, 7)} ${local.slice(7, 9)}`;
  }
});

/* SAYTNI ISHGA TUSHIRISH */

function init() {
  $("#currentYear").textContent = new Date().getFullYear();

  renderProducts();
  renderCart();
  updateHeader();

  console.log("A-Market tayyor.");
  console.log("Mahsulotlar:", PRODUCTS.length);
}

init();
