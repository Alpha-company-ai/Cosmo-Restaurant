"use strict";

const WHATSAPP_NUMBER = "962797666513";
const CART_KEY = "cozmo-cart-static-v1";
const CATEGORY_LABELS = {
  all: "كل المنيو",
  chicken: "تشيكن",
  beef: "بيف",
  snacks: "سناكس",
};

const MENU = [
  {
    id: "chicken-blazer",
    name: "بليزر تشيكن برغر",
    price: 2.5,
    desc: "صدر دجاج مشوي، تيركي مدخّن، جبنة وصوص سوبر رانش.",
    category: "chicken",
  },
  {
    id: "chicken-raptor",
    name: "رابتر تشيكن",
    price: 2.5,
    desc: "دجاج مقرمش بحرارة خفيفة، جبنة، مخلل وصوص سوبر رانش.",
    category: "chicken",
    spicy: true,
    signature: true,
  },
  {
    id: "chicken-double-raptor",
    name: "دبل رابتر تشيكن",
    price: 4,
    desc: "قطعتان دجاج مقرمش، جبنة، خس، مخلل وصوص سوبر رانش.",
    category: "chicken",
    spicy: true,
  },
  {
    id: "chicken-buffalo-supreme",
    name: "بافالو تشيكن سوبريم",
    price: 2.5,
    desc: "خبز سوبريم، دجاج مقرمش، تيركي مدخّن وجبنة.",
    category: "chicken",
    spicy: true,
  },
  {
    id: "chicken-super-twister",
    name: "سوبر تشيكن تويستر",
    price: 2.5,
    desc: "تورتيلا، دجاج مقرمش، تيركي مدخّن، خس وجبنة.",
    category: "chicken",
    spicy: true,
  },
  {
    id: "chicken-honey-mustard",
    name: "هني ماسترد رابتر",
    price: 2.5,
    desc: "دجاج مقرمش، هني ماسترد، سوبر رانش وتشيدر.",
    category: "chicken",
    spicy: true,
  },
  {
    id: "chicken-nashville",
    name: "ناشفل رابتر تشيكن",
    price: 2.5,
    desc: "دجاج مقرمش مع صوص ناشفل الحلو الحار وجبنة تشيدر.",
    category: "chicken",
    spicy: true,
  },
  {
    id: "chicken-alfredo",
    name: "تشيكن ألفريدو برغر",
    price: 2.5,
    desc: "دجاج مشوي، موزاريلا، فطر وكريمة إيطالية.",
    category: "chicken",
  },
  {
    id: "beef-smoke-red-150",
    name: "سموك ريد ميكس",
    price: 2.5,
    desc: "لحم 150غ، روست بيف، بصل مكرمل، جبنة وباربيكيو.",
    category: "beef",
    signature: true,
  },
  {
    id: "beef-smoke-red-300",
    name: "سموك ريد ميكس 300غ",
    price: 4,
    desc: "قطعتا لحم، روست بيف مدخّن، بصل مشوي وجبنة.",
    category: "beef",
  },
  {
    id: "beef-classic-150",
    name: "كلاسيك بيف",
    price: 2.5,
    desc: "لحم 150غ، خضار طازجة، جبنة وصوص سموك ماستر.",
    category: "beef",
  },
  {
    id: "beef-classic-300",
    name: "كلاسيك بيف 300غ",
    price: 4,
    desc: "قطعتا لحم، أربع شرائح تشيدر وصوص سموك ماستر.",
    category: "beef",
  },
  {
    id: "beef-ram-150",
    name: "رام بيف",
    price: 2.5,
    desc: "لحم 150غ، موزاريلا، فطر وكريمة إيطالية.",
    category: "beef",
  },
  {
    id: "beef-ram-300",
    name: "رام بيف 300غ",
    price: 4,
    desc: "قطعتا لحم، موزاريلا، فطر وكريمة إيطالية.",
    category: "beef",
  },
  {
    id: "beef-black-list",
    name: "بلاك لِست بيف",
    price: 2.5,
    desc: "لحم، روست بيف، فليفلة وفطر مع جبنة مدخّنة.",
    category: "beef",
    spicy: true,
    signature: true,
  },
  {
    id: "snack-smoke-hotdog",
    name: "سموك هوت دوغ",
    price: 2,
    desc: "هوت دوغ جامبو، هلابينو، بطاطا ستيكس وجبنة.",
    category: "snacks",
    spicy: true,
  },
  {
    id: "snack-chili-fries",
    name: "تشيلي فرايز",
    price: 1.5,
    desc: "بطاطا، جبنة مدخّنة، قطع دجاج حارة وهلابينو.",
    category: "snacks",
    spicy: true,
  },
  {
    id: "snack-fries",
    name: "بطاطا كوزمو",
    price: 1,
    desc: "بطاطا مقرمشة مع تشيدر مدخّن وصوصاتنا.",
    category: "snacks",
  },
];

const ITEM_BY_ID = new Map(MENU.map((item) => [item.id, item]));
const signatureGrid = document.getElementById("signatureGrid");
const menuGrid = document.getElementById("menuGrid");
const menuCount = document.getElementById("menuCount");
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const floatingCart = document.getElementById("floatingCart");
const floatingCount = document.getElementById("floatingCount");
const floatingTotal = document.getElementById("floatingTotal");
const cartLayer = document.getElementById("cartLayer");
const cartLines = document.getElementById("cartLines");
const cartPanel = document.getElementById("cartPanel");
const checkoutPanel = document.getElementById("checkoutPanel");
const reviewPanel = document.getElementById("reviewPanel");
const invoiceContent = document.getElementById("invoiceContent");
const drawerSummary = document.getElementById("drawerSummary");
const cartTotal = document.getElementById("cartTotal");
const checkoutTotal = document.getElementById("checkoutTotal");
const drawerTitle = document.getElementById("drawerTitle");
const checkoutButton = document.getElementById("checkoutButton");
const backToCart = document.getElementById("backToCart");
const editOrderButton = document.getElementById("editOrderButton");
const sendWhatsappButton = document.getElementById("sendWhatsappButton");
const checkoutForm = document.getElementById("checkoutForm");
const addressField = document.getElementById("addressField");
const toast = document.getElementById("toast");

let selectedCategory = "all";
let cart = loadCart();
let pendingOrder = null;
let toastTimer;

function money(value) {
  return `${Number(value).toFixed(2)} د.أ`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_KEY) || "{}");
    return Object.fromEntries(
      Object.entries(stored).filter(([id, quantity]) => (
        ITEM_BY_ID.has(id) &&
        Number.isInteger(quantity) &&
        quantity > 0 &&
        quantity <= 20
      )),
    );
  } catch {
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // The cart remains available during the current visit.
  }
}

function getCartLines() {
  return MENU
    .filter((item) => cart[item.id])
    .map((item) => ({ item, quantity: cart[item.id] }));
}

function getCartTotals() {
  return getCartLines().reduce(
    (totals, line) => ({
      count: totals.count + line.quantity,
      total: totals.total + line.item.price * line.quantity,
    }),
    { count: 0, total: 0 },
  );
}

function signatureCard(item, index) {
  return `
    <article class="signature-card">
      <div class="signature-number">0${index + 1}</div>
      <div class="signature-top">
        <span>${CATEGORY_LABELS[item.category]}</span>
        ${item.spicy ? "<b>حار 🌶</b>" : ""}
      </div>
      <h3>${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.desc)}</p>
      <div class="signature-bottom">
        <strong>${money(item.price)}</strong>
        <button type="button" data-add="${item.id}">
          أضف للطلب <span>＋</span>
        </button>
      </div>
    </article>`;
}

function menuCard(item, index) {
  return `
    <article class="menu-card">
      <div class="menu-card-copy">
        <div class="menu-card-meta">
          <span>${CATEGORY_LABELS[item.category]}</span>
          <div>
            ${item.spicy ? '<b title="صنف حار">حار 🌶</b>' : ""}
            <span class="menu-card-number">${String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </div>
      <div class="menu-card-action">
        <strong>${money(item.price)}</strong>
        <button type="button" data-add="${item.id}" aria-label="أضف ${escapeHtml(item.name)} للطلب">
          <span>أضف للطلب</span><b aria-hidden="true">＋</b>
        </button>
      </div>
    </article>`;
}

function renderSignatures() {
  signatureGrid.innerHTML = MENU
    .filter((item) => item.signature)
    .map(signatureCard)
    .join("");
}

function renderMenu() {
  const visibleItems = MENU
    .filter((item) => selectedCategory === "all" || item.category === selectedCategory);
  menuCount.textContent = visibleItems.length;
  menuGrid.innerHTML = visibleItems.map(menuCard).join("");
}

function cartLineTemplate({ item, quantity }) {
  return `
    <article class="cart-line">
      <div>
        <h3>${escapeHtml(item.name)}</h3>
        <span>${money(item.price * quantity)}</span>
      </div>
      <div class="quantity">
        <button type="button" data-quantity="1" data-id="${item.id}" aria-label="زيادة ${escapeHtml(item.name)}">＋</button>
        <b>${quantity}</b>
        <button type="button" data-quantity="-1" data-id="${item.id}" aria-label="إنقاص ${escapeHtml(item.name)}">−</button>
      </div>
    </article>`;
}

function renderCart() {
  const lines = getCartLines();
  const totals = getCartTotals();

  cartCount.textContent = totals.count;
  floatingCount.textContent = totals.count;
  floatingTotal.textContent = money(totals.total);
  cartTotal.textContent = money(totals.total);
  checkoutTotal.textContent = money(totals.total);
  floatingCart.hidden = totals.count === 0;
  drawerSummary.hidden = totals.count === 0;

  if (lines.length) {
    cartLines.innerHTML = lines.map(cartLineTemplate).join("");
  } else {
    cartLines.innerHTML = `
      <div class="empty-cart">
        <span>◎</span>
        <h3>لسّه ما اخترت</h3>
        <p>جرّب واحد من تواقيع كوزمو وارجع هون.</p>
        <button type="button" data-close-cart>استعرض المنيو</button>
      </div>`;
    showCartPanel();
  }
}

function flash(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function addItem(id) {
  if (!ITEM_BY_ID.has(id)) return;
  cart[id] = Math.min((cart[id] || 0) + 1, 20);
  saveCart();
  renderCart();
  flash("انضاف لطلبك ✓");
}

function changeQuantity(id, delta) {
  if (!ITEM_BY_ID.has(id) || !cart[id]) return;
  const quantity = cart[id] + delta;
  if (quantity <= 0) delete cart[id];
  else cart[id] = Math.min(quantity, 20);
  saveCart();
  renderCart();
}

function openCart() {
  cartLayer.classList.add("show");
  cartLayer.setAttribute("aria-hidden", "false");
  cartButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("drawer-visible");
}

function closeCart() {
  cartLayer.classList.remove("show");
  cartLayer.setAttribute("aria-hidden", "true");
  cartButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("drawer-visible");
  window.setTimeout(showCartPanel, 250);
}

function showCheckoutPanel() {
  if (!getCartLines().length) return;
  cartPanel.hidden = true;
  checkoutPanel.hidden = false;
  reviewPanel.hidden = true;
  drawerTitle.textContent = "بيانات الطلب";
}

function showCartPanel() {
  cartPanel.hidden = false;
  checkoutPanel.hidden = true;
  reviewPanel.hidden = true;
  drawerTitle.textContent = "طلبك";
}

function showReviewPanel() {
  cartPanel.hidden = true;
  checkoutPanel.hidden = true;
  reviewPanel.hidden = false;
  drawerTitle.textContent = "مراجعة الفاتورة";
}

function updateOrderType() {
  const isDelivery = checkoutForm.elements.orderType.value === "delivery";
  addressField.hidden = !isDelivery;
  checkoutForm.elements.address.required = isDelivery;
}

function updateStatus() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Amman",
    hour: "numeric",
    hour12: false,
    weekday: "short",
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === "hour")?.value || 0) % 24;
  const day = parts.find((part) => part.type === "weekday")?.value;
  const isFriday = day === "Fri";
  const isOpen = !isFriday && hour >= 16;
  const label = isFriday
    ? "مغلق اليوم — الجمعة"
    : isOpen
      ? "مفتوح الآن حتى 12 ليلاً"
      : "نفتح اليوم الساعة 4 عصراً";

  document.getElementById("statusText").textContent = label;
  document.getElementById("statusDot").classList.toggle("is-open", isOpen);
}

function renderInvoice(order) {
  const orderTypeLabel = order.orderType === "delivery" ? "توصيل" : "استلام مباشر";
  const details = [
    ["الاسم", order.name],
    ["الهاتف", order.phone],
    ["الاستلام", orderTypeLabel],
    ...(order.orderType === "delivery" ? [["العنوان", order.address]] : []),
    ...(order.notes ? [["ملاحظات", order.notes]] : []),
  ];
  const rows = getCartLines().map(({ item, quantity }) => `
    <div class="invoice-row">
      <strong>${escapeHtml(item.name)}</strong>
      <span>${quantity}</span>
      <span>${money(item.price)}</span>
      <b>${money(item.price * quantity)}</b>
    </div>
  `).join("");

  invoiceContent.innerHTML = `
    <div class="invoice-intro">
      <small>الخطوة الأخيرة</small>
      <h3>راجع طلبك قبل الإرسال</h3>
    </div>
    <div class="invoice-card">
      <div class="invoice-brand">
        <strong>COZMO</strong>
        <span>SMOKEMASTER.JO</span>
      </div>
      <div class="invoice-customer">
        ${details.map(([label, value]) => `
          <p><span>${label}</span><strong>${escapeHtml(value)}</strong></p>
        `).join("")}
      </div>
      <div class="invoice-table" role="table" aria-label="تفاصيل الطلب">
        <div class="invoice-row invoice-head" role="row">
          <strong>الصنف</strong><span>الكمية</span><span>السعر</span><b>المجموع</b>
        </div>
        ${rows}
      </div>
      <div class="invoice-delivery">
        <span>رسوم التوصيل</span>
        <strong>${order.orderType === "delivery" ? "تُحدّد حسب المنطقة" : "بدون رسوم"}</strong>
      </div>
      <div class="invoice-total">
        <span>إجمالي الأصناف</span>
        <strong>${money(getCartTotals().total)}</strong>
      </div>
      <p class="invoice-note">سيتم إرسال الطلب إلى كوزمو عبر واتساب بعد موافقتك.</p>
    </div>
  `;
}

function reviewOrder(event) {
  event.preventDefault();
  const form = new FormData(checkoutForm);
  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const orderType = String(form.get("orderType") || "delivery");
  const address = String(form.get("address") || "").trim();
  const notes = String(form.get("notes") || "").trim();

  if (!name || !phone || (orderType === "delivery" && !address)) {
    flash("كمّل البيانات المطلوبة");
    return;
  }

  pendingOrder = { name, phone, orderType, address, notes };
  renderInvoice(pendingOrder);
  showReviewPanel();
}

function sendOrder() {
  if (!pendingOrder) {
    showCheckoutPanel();
    return;
  }

  const lines = getCartLines();
  if (!lines.length) {
    showCartPanel();
    flash("أضف صنفاً واحداً على الأقل");
    return;
  }

  const items = lines
    .map(({ item, quantity }, index) => (
      `${index + 1}. ${item.name}\n   ${quantity} × ${money(item.price)} = ${money(item.price * quantity)}`
    ))
    .join("\n\n");

  const message = [
    "مرحباً كوزمو 👋",
    "أرغب بتأكيد الطلب التالي:",
    "",
    items,
    "",
    `الإجمالي: ${money(getCartTotals().total)}`,
    `الاسم: ${pendingOrder.name}`,
    `الهاتف: ${pendingOrder.phone}`,
    `الاستلام: ${pendingOrder.orderType === "delivery" ? "توصيل" : "استلام من الفرع"}`,
    pendingOrder.orderType === "delivery" ? `العنوان: ${pendingOrder.address}` : "",
    pendingOrder.notes ? `ملاحظات: ${pendingOrder.notes}` : "",
  ].filter(Boolean).join("\n");

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addItem(addButton.dataset.add);

  const closeButton = event.target.closest("[data-close-cart]");
  if (closeButton) closeCart();
});

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach((categoryButton) => {
      const active = categoryButton === button;
      categoryButton.classList.toggle("active", active);
      categoryButton.setAttribute("aria-selected", String(active));
    });
    renderMenu();
  });
});

cartLines.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (!button) return;
  changeQuantity(button.dataset.id, Number(button.dataset.quantity));
});

cartButton.addEventListener("click", openCart);
floatingCart.addEventListener("click", openCart);
checkoutButton.addEventListener("click", showCheckoutPanel);
backToCart.addEventListener("click", showCartPanel);
editOrderButton.addEventListener("click", showCheckoutPanel);
sendWhatsappButton.addEventListener("click", sendOrder);
checkoutForm.addEventListener("submit", reviewOrder);
checkoutForm.addEventListener("change", (event) => {
  if (event.target.name === "orderType") updateOrderType();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartLayer.classList.contains("show")) closeCart();
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
renderSignatures();
renderMenu();
renderCart();
updateOrderType();
updateStatus();
window.setInterval(updateStatus, 60_000);
