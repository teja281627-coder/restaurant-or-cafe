// Menu Data Model
const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Succulent paneer cubes marinated in yogurt and spices, charred to perfection in tandoor.",
    price: 250,
    category: "Appetizers",
    image: "images/paneer_tikka.png",
    fallbackImage: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Samosa Chaat",
    description: "Crispy samosas crushed and topped with warm spiced chickpeas, sweet yogurt, chutneys, and sev.",
    price: 160,
    category: "Appetizers",
    image: "images/paneer_tikka.png",
    fallbackImage: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Butter Chicken",
    description: "Tender boneless chicken roasted in tandoor, simmered in a rich, creamy tomato butter gravy.",
    price: 380,
    category: "Main Course",
    image: "images/butter_chicken.png",
    fallbackImage: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    description: "Fresh cottage cheese cooked in a silky, creamy tomato sauce with traditional spices.",
    price: 340,
    category: "Main Course",
    image: "images/butter_chicken.png",
    fallbackImage: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Mango Lassi",
    description: "A traditional, creamy yogurt drink sweetened and blended with fresh, ripe mango pulp and saffron.",
    price: 120,
    category: "Beverages",
    image: "images/mango_lassi.png",
    fallbackImage: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Gulab Jamun",
    description: "Two warm, golden milk-solid dumplings soaked in aromatic cardamom and saffron sugar syrup.",
    price: 90,
    category: "Dessert",
    image: "images/gulab_jamun.png",
    fallbackImage: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
  }
];

// Master Tables Data Model
const masterTables = [
  { id: 1, number: "Table 1", seats: 2, type: "Cozy Window Booth", desc: "Intimate seating near window" },
  { id: 2, number: "Table 2", seats: 2, type: "Romantic Corner", desc: "Dimmed ambient lighting" },
  { id: 3, number: "Table 3", seats: 4, type: "Family Dining", desc: "Spacious central dining" },
  { id: 4, number: "Table 4", seats: 4, type: "Garden View", desc: "View of indoor greenery" },
  { id: 5, number: "Table 5", seats: 6, type: "Celebration Suite", desc: "Large round family table" },
  { id: 6, number: "Table 6", seats: 6, type: "Executive Lounge", desc: "Plush leather sofa seating" },
  { id: 7, number: "Table 7", seats: 8, type: "Royal Banquet", desc: "Grand group dining suite" },
  { id: 8, number: "Table 8", seats: 4, type: "Outdoor Terrace", desc: "Open air breezy dining" }
];

// Meal Schedules & Time Slots Definition
const schedulesData = {
  lunch: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
  dinner: ["6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM"]
};

// App State
let cart = [];
let activeCategory = 'all';
let searchTerm = '';
let currentRating = 0;

// Table Reservation State
let resDateType = 'today';
let resCustomDate = '';
let resMealType = 'dinner';
let resTimeSlot = '7:30 PM';
let resTableId = 3;
let resGuestCount = 2;

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const categoriesScroll = document.getElementById('categoriesScroll');
const currentCategoryTitle = document.getElementById('currentCategoryTitle');
const searchInput = document.getElementById('searchInput');

const cartTrigger = document.getElementById('cartTrigger');
const floatingCartBtn = document.getElementById('floatingCartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItemsList');

const cartSubtotal = document.getElementById('cartSubtotal');
const cartTax = document.getElementById('cartTax');
const cartTotal = document.getElementById('cartTotal');
const cartBadge = document.getElementById('cartBadge');
const floatingCartBadge = document.getElementById('floatingCartBadge');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
const waCustomerPhone = document.getElementById('waCustomerPhone');

const checkoutFormSection = document.getElementById('checkoutFormSection');
const customerNameInput = document.getElementById('customerName');
const customerAddressInput = document.getElementById('customerAddress');

const deliverySummaryCard = document.getElementById('deliverySummaryCard');
const confirmCustomerName = document.getElementById('confirmCustomerName');
const confirmCustomerAddress = document.getElementById('confirmCustomerAddress');
const confirmationTitle = document.getElementById('confirmationTitle');
const confirmationDesc = document.getElementById('confirmationDesc');
const confirmSummaryHeader = document.getElementById('confirmSummaryHeader');

const appNavTabs = document.getElementById('appNavTabs');
const tabMenuBtn = document.getElementById('tabMenuBtn');
const tabReservationBtn = document.getElementById('tabReservationBtn');

const menuView = document.getElementById('menuView');
const reservationView = document.getElementById('reservationView');
const confirmationView = document.getElementById('confirmationView');
const orderIdText = document.getElementById('orderIdText');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const starsRow = document.getElementById('starsRow');
const feedbackSuccessMsg = document.getElementById('feedbackSuccessMsg');
const toastContainer = document.getElementById('toastContainer');

const adminToggleBtn = document.getElementById('adminToggleBtn');
const adminView = document.getElementById('adminView');
const adminOrdersList = document.getElementById('adminOrdersList');
const adminOrdersTabBtn = document.getElementById('adminOrdersTabBtn');
const adminResTabBtn = document.getElementById('adminResTabBtn');
const adminOrdersSection = document.getElementById('adminOrdersSection');
const adminReservationsSection = document.getElementById('adminReservationsSection');
const adminReservationsList = document.getElementById('adminReservationsList');

// Table Reservation Elements
const datePillsRow = document.getElementById('datePillsRow');
const customDatePicker = document.getElementById('customDatePicker');
const mealToggleRow = document.getElementById('mealToggleRow');
const timeSlotsGrid = document.getElementById('timeSlotsGrid');
const tablesGrid = document.getElementById('tablesGrid');
const guestPillsRow = document.getElementById('guestPillsRow');
const resCustomerName = document.getElementById('resCustomerName');
const resCustomerPhone = document.getElementById('resCustomerPhone');
const resOccasion = document.getElementById('resOccasion');
const summaryDateTimeText = document.getElementById('summaryDateTimeText');
const summaryTableText = document.getElementById('summaryTableText');
const summaryGuestsText = document.getElementById('summaryGuestsText');
const confirmResBtn = document.getElementById('confirmResBtn');

// Initialize App
window.addEventListener('DOMContentLoaded', () => {
  initSampleReservations();
  renderMenu();
  renderReservationUI();
  setupEventListeners();
});

// Seed sample reservations if local storage empty
function initSampleReservations() {
  if (!localStorage.getItem('tableReservations')) {
    const todayStr = getFormattedDateStr('today');
    const sampleReservations = [
      {
        reservationId: "RES-981042",
        customerName: "Rahul Sharma",
        customerPhone: "9876543210",
        date: todayStr,
        dateType: "today",
        mealType: "dinner",
        timeSlot: "7:30 PM",
        tableId: 2,
        tableName: "Table 2 (Romantic Corner)",
        guests: 2,
        occasion: "Romantic Dinner",
        status: "Confirmed",
        timestamp: new Date().toISOString()
      },
      {
        reservationId: "RES-452109",
        customerName: "Ananya Patel",
        customerPhone: "9123456789",
        date: todayStr,
        dateType: "today",
        mealType: "dinner",
        timeSlot: "8:30 PM",
        tableId: 5,
        tableName: "Table 5 (Celebration Suite)",
        guests: 6,
        occasion: "Birthday Celebration",
        status: "Confirmed",
        timestamp: new Date().toISOString()
      }
    ];
    localStorage.setItem('tableReservations', JSON.stringify(sampleReservations));
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation Tabs
  tabMenuBtn.addEventListener('click', () => switchMainView('menuView'));
  tabReservationBtn.addEventListener('click', () => switchMainView('reservationView'));

  // Category Filtering
  categoriesScroll.addEventListener('click', (e) => {
    const pill = e.target.closest('.category-pill');
    if (!pill) return;

    document.querySelectorAll('.category-pill').forEach(btn => btn.classList.remove('active'));
    pill.classList.add('active');

    activeCategory = pill.dataset.category;
    currentCategoryTitle.textContent = pill.textContent;
    renderMenu();
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    renderMenu();
  });

  // Cart Drawer Toggle
  cartTrigger.addEventListener('click', openCart);
  floatingCartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
  });

  // Place Order CTA buttons
  if (placeOrderBtn) placeOrderBtn.addEventListener('click', () => processCheckout(false));
  if (sendWhatsAppBtn) sendWhatsAppBtn.addEventListener('click', () => processCheckout(true));

  // Back to Menu button
  backToMenuBtn.addEventListener('click', showMenuView);

  // Admin Panel Toggle
  adminToggleBtn.addEventListener('click', toggleAdminView);

  // Admin Panel Sub-Tabs
  if (adminOrdersTabBtn && adminResTabBtn) {
    adminOrdersTabBtn.addEventListener('click', () => switchAdminTab('orders'));
    adminResTabBtn.addEventListener('click', () => switchAdminTab('reservations'));
  }

  // Date Selection Pills
  datePillsRow.addEventListener('click', (e) => {
    const pill = e.target.closest('.date-pill');
    if (!pill) return;
    
    document.querySelectorAll('.date-pill').forEach(b => b.classList.remove('active'));
    pill.classList.add('active');
    resDateType = pill.dataset.date;
    customDatePicker.value = '';
    renderReservationUI();
  });

  // Custom Date Picker
  customDatePicker.addEventListener('change', (e) => {
    if (e.target.value) {
      document.querySelectorAll('.date-pill').forEach(b => b.classList.remove('active'));
      resDateType = 'custom';
      resCustomDate = e.target.value;
      renderReservationUI();
    }
  });

  // Meal Schedule Toggle
  mealToggleRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.meal-toggle-btn');
    if (!btn) return;

    document.querySelectorAll('.meal-toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    resMealType = btn.dataset.meal;
    resTimeSlot = schedulesData[resMealType][1] || schedulesData[resMealType][0];
    renderReservationUI();
  });

  // Guest Count Pills
  guestPillsRow.addEventListener('click', (e) => {
    const pill = e.target.closest('.guest-pill');
    if (!pill) return;

    document.querySelectorAll('.guest-pill').forEach(b => b.classList.remove('active'));
    pill.classList.add('active');
    
    resGuestCount = parseInt(pill.dataset.guests);
    updateResSummary();
  });

  // Confirm Table Reservation CTA
  confirmResBtn.addEventListener('click', confirmTableReservation);

  // Star Rating Interaction
  const starBtns = starsRow.querySelectorAll('.star-btn');
  starBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => highlightStars(parseInt(btn.dataset.value)));
    btn.addEventListener('mouseleave', () => highlightStars(currentRating));
    btn.addEventListener('click', () => {
      const val = parseInt(btn.dataset.value);
      currentRating = val;
      submitRating(val);
    });
  });
}

// Switch between views
function switchMainView(targetView) {
  menuView.classList.remove('active');
  reservationView.classList.remove('active');
  confirmationView.classList.remove('active');
  adminView.classList.remove('active');

  tabMenuBtn.classList.remove('active');
  tabReservationBtn.classList.remove('active');
  adminToggleBtn.textContent = 'ADMIN';
  adminToggleBtn.style.background = 'rgba(255, 255, 255, 0.05)';
  adminToggleBtn.style.color = 'var(--text-muted)';

  if (targetView === 'menuView') {
    menuView.classList.add('active');
    tabMenuBtn.classList.add('active');
  } else if (targetView === 'reservationView') {
    reservationView.classList.add('active');
    tabReservationBtn.classList.add('active');
    renderReservationUI();
  }
  document.getElementById('appContainer').scrollTo({ top: 0, behavior: 'smooth' });
}

// Helper: Formatted date string
function getFormattedDateStr(type) {
  const d = new Date();
  if (type === 'tomorrow') {
    d.setDate(d.getDate() + 1);
  } else if (type === 'custom' && resCustomDate) {
    const parts = resCustomDate.split('-');
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
}

// Render Reservation UI
function renderReservationUI() {
  renderTimeSlots();
  renderTablesGrid();
  updateResSummary();
}

// Render Time Slot Chips
function renderTimeSlots() {
  timeSlotsGrid.innerHTML = '';
  const slots = schedulesData[resMealType] || [];

  slots.forEach(slot => {
    const chip = document.createElement('button');
    chip.className = `time-slot-chip ${slot === resTimeSlot ? 'selected' : ''}`;
    chip.textContent = slot;

    chip.addEventListener('click', () => {
      resTimeSlot = slot;
      renderReservationUI();
    });

    timeSlotsGrid.appendChild(chip);
  });
}

// Render Table Layout Grid
function renderTablesGrid() {
  tablesGrid.innerHTML = '';
  const existingReservations = JSON.parse(localStorage.getItem('tableReservations')) || [];
  const currentDateStr = getFormattedDateStr(resDateType);

  masterTables.forEach(table => {
    const isBooked = existingReservations.some(r => 
      r.status === 'Confirmed' &&
      r.tableId === table.id && 
      r.date === currentDateStr && 
      r.timeSlot === resTimeSlot
    );

    const isSelected = !isBooked && resTableId === table.id;

    let statusClass = 'available';
    let statusText = 'Available';

    if (isBooked) {
      statusClass = 'booked';
      statusText = 'Booked';
    } else if (isSelected) {
      statusClass = 'selected';
      statusText = 'Selected';
    }

    const card = document.createElement('div');
    card.className = `table-card ${statusClass}`;
    card.innerHTML = `
      <div class="table-card-top">
        <span class="table-number">${table.number}</span>
        <span class="table-status-badge">${statusText}</span>
      </div>
      <span class="table-type">${table.type}</span>
      <div class="table-seats-row">
        <span>${table.seats} Seats</span>
      </div>
    `;

    if (!isBooked) {
      card.addEventListener('click', () => {
        resTableId = table.id;
        renderTablesGrid();
        updateResSummary();
      });
    }

    tablesGrid.appendChild(card);
  });
}

// Update Reservation Summary text
function updateResSummary() {
  const dateStr = getFormattedDateStr(resDateType);
  summaryDateTimeText.textContent = `${dateStr} • ${resTimeSlot}`;

  const selectedTable = masterTables.find(t => t.id === resTableId);
  if (selectedTable) {
    summaryTableText.textContent = `${selectedTable.number} (${selectedTable.seats}-Seater ${selectedTable.type})`;
  } else {
    summaryTableText.textContent = 'Select a table';
  }

  summaryGuestsText.textContent = `${resGuestCount} Guest${resGuestCount > 1 ? 's' : ''}`;
}

// Confirm Table Reservation
function confirmTableReservation() {
  const name = resCustomerName.value.trim();
  const phone = resCustomerPhone.value.trim();
  const occasionVal = resOccasion.value;

  if (!name || !phone) {
    showToast('Please enter your name and phone number.', 'error');
    resCustomerName.focus();
    return;
  }

  const selectedTable = masterTables.find(t => t.id === resTableId);
  if (!selectedTable) {
    showToast('Please select a table to proceed.', 'error');
    return;
  }

  const dateStr = getFormattedDateStr(resDateType);
  const existingReservations = JSON.parse(localStorage.getItem('tableReservations')) || [];

  const isCollision = existingReservations.some(r => 
    r.status === 'Confirmed' &&
    r.tableId === resTableId && 
    r.date === dateStr && 
    r.timeSlot === resTimeSlot
  );

  if (isCollision) {
    showToast('This table has just been booked for this slot.', 'error');
    renderTablesGrid();
    return;
  }

  const reservationId = `RES-${Math.floor(100000 + Math.random() * 900000)}`;

  const newReservation = {
    reservationId,
    customerName: name,
    customerPhone: phone,
    date: dateStr,
    dateType: resDateType,
    mealType: resMealType,
    timeSlot: resTimeSlot,
    tableId: selectedTable.id,
    tableName: `${selectedTable.number} (${selectedTable.type})`,
    guests: resGuestCount,
    occasion: occasionVal,
    status: 'Confirmed',
    timestamp: new Date().toISOString()
  };

  existingReservations.unshift(newReservation);
  localStorage.setItem('tableReservations', JSON.stringify(existingReservations));

  resCustomerName.value = '';
  resCustomerPhone.value = '';

  reservationView.classList.remove('active');
  menuView.classList.remove('active');
  confirmationView.classList.add('active');

  confirmationTitle.textContent = 'Table Reservation Confirmed';
  confirmationDesc.textContent = `Your dining space has been reserved at ANTIGRAVITY POS.`;
  orderIdText.textContent = `Booking ID: #${reservationId}`;

  confirmSummaryHeader.textContent = 'Reservation Summary';
  confirmCustomerName.textContent = `Guest: ${name} (${phone})`;
  confirmCustomerAddress.textContent = `Schedule: ${dateStr} at ${resTimeSlot} | ${selectedTable.number} (${resGuestCount} Guests, ${occasionVal})`;
  deliverySummaryCard.style.display = 'flex';

  document.getElementById('appContainer').scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Table successfully reserved!', 'success');
}

// Render Menu items
function renderMenu() {
  menuGrid.innerHTML = '';
  
  const filtered = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                          item.description.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div class="empty-cart-state" style="grid-column: 1/-1; padding: 40px 0;">
        <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        <p class="empty-cart-text">No dishes match your query</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const cartItem = cart.find(c => c.itemId === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="menu-card-img-wrapper">
        <img src="${item.image}" onerror="this.onerror=null; this.src='${item.fallbackImage}';" alt="${item.name}">
      </div>
      <div class="menu-card-info">
        <div class="menu-card-header">
          <span class="menu-card-title">${item.name}</span>
          <p class="menu-card-desc">${item.description}</p>
        </div>
        <div class="menu-card-bottom">
          <span class="menu-card-price">₹${item.price}</span>
          
          <button class="add-btn" id="addBtn-${item.id}" style="display: ${quantity > 0 ? 'none' : 'flex'}" onclick="addToCart(${item.id})">
            <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            Add
          </button>
          
          <div class="qty-control ${quantity > 0 ? 'active' : ''}" id="qtyControl-${item.id}">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span class="qty-val" id="qtyVal-${item.id}">${quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// Add item to cart
window.addToCart = function(itemId) {
  const item = menuItems.find(m => m.id === itemId);
  if (!item) return;

  cart.push({ itemId, quantity: 1 });
  updateUI();
  showToast(`Added ${item.name} to cart`, 'info');
};

// Update Quantity
window.updateQuantity = function(itemId, change) {
  const cartIndex = cart.findIndex(c => c.itemId === itemId);
  if (cartIndex === -1) return;

  cart[cartIndex].quantity += change;

  if (cart[cartIndex].quantity <= 0) {
    const item = menuItems.find(m => m.id === itemId);
    cart.splice(cartIndex, 1);
    showToast(`Removed ${item ? item.name : 'item'} from cart`, 'info');
  }

  updateUI();
};

// Update UI States
function updateUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  if (totalQty > 0) {
    cartBadge.textContent = totalQty;
    cartBadge.style.display = 'flex';
    floatingCartBadge.textContent = totalQty;
    floatingCartBtn.classList.add('active');
    cartTrigger.classList.add('has-items');
  } else {
    cartBadge.style.display = 'none';
    floatingCartBtn.classList.remove('active');
    cartTrigger.classList.remove('has-items');
  }

  renderMenu();
  renderCart();
}

// Open and Close Cart
function openCart() {
  cartOverlay.style.display = 'flex';
  cartOverlay.offsetHeight;
  cartOverlay.classList.add('active');
}

function closeCart() {
  cartOverlay.classList.remove('active');
  setTimeout(() => {
    cartOverlay.style.display = 'none';
  }, 350);
}

// Render Cart inside drawer
function renderCart() {
  cartItemsList.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-state">
        <svg viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
        <p class="empty-cart-text">Cart is empty.<br>Add items from the menu to build digital receipt.</p>
      </div>
    `;
    cartSubtotal.textContent = '₹0';
    cartTax.textContent = '₹0';
    cartTotal.textContent = '₹0';
    placeOrderBtn.disabled = true;
    sendWhatsAppBtn.disabled = true;
    placeOrderBtn.style.opacity = '0.5';
    sendWhatsAppBtn.style.opacity = '0.5';
    return;
  }

  placeOrderBtn.disabled = false;
  sendWhatsAppBtn.disabled = false;
  placeOrderBtn.style.opacity = '1';
  sendWhatsAppBtn.style.opacity = '1';

  let subtotal = 0;

  cart.forEach(cItem => {
    const item = menuItems.find(m => m.id === cItem.itemId);
    if (!item) return;

    const itemTotal = item.price * cItem.quantity;
    subtotal += itemTotal;

    const itemRow = document.createElement('div');
    itemRow.className = 'cart-item';
    itemRow.innerHTML = `
      <div class="cart-item-details">
        <img class="cart-item-img" src="${item.image}" onerror="this.onerror=null; this.src='${item.fallbackImage}';" alt="${item.name}">
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price} × ${cItem.quantity} = ₹${itemTotal}</div>
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-control active" style="display: flex;">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span class="qty-val">${cItem.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
    `;
    cartItemsList.appendChild(itemRow);
  });

  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  cartSubtotal.textContent = `₹${subtotal}`;
  cartTax.textContent = `₹${tax}`;
  cartTotal.textContent = `₹${total}`;
}

// Process Checkout & Optional WhatsApp Receipt Delivery
function processCheckout(isWhatsApp = false) {
  if (cart.length === 0) return;

  let phone = waCustomerPhone ? waCustomerPhone.value.trim() : '';
  let name = customerNameInput ? customerNameInput.value.trim() : 'Valued Guest';
  let address = customerAddressInput ? customerAddressInput.value.trim() : 'Dine-In / Direct POS';

  if (isWhatsApp) {
    if (!phone || phone.length < 10) {
      showToast('Please enter a valid 10-digit WhatsApp number.', 'error');
      waCustomerPhone.focus();
      return;
    }
  }

  const orderId = `SS-${Math.floor(100000 + Math.random() * 900000)}`;
  const subtotalVal = cartSubtotal.textContent;
  const taxVal = cartTax.textContent;
  const totalVal = cartTotal.textContent;

  const itemizedList = cart.map(cItem => {
    const mItem = menuItems.find(m => m.id === cItem.itemId);
    return {
      name: mItem ? mItem.name : 'Unknown Item',
      quantity: cItem.quantity,
      price: mItem ? mItem.price : 0,
      total: (mItem ? mItem.price : 0) * cItem.quantity
    };
  });

  const orderDetails = {
    orderId,
    customerName: name || 'Valued Guest',
    customerPhone: phone,
    customerAddress: address,
    items: itemizedList,
    subtotal: subtotalVal,
    tax: taxVal,
    total: totalVal,
    isWhatsAppSent: isWhatsApp,
    timestamp: new Date().toISOString()
  };

  const ordersList = JSON.parse(localStorage.getItem('orders')) || [];
  ordersList.unshift(orderDetails);
  localStorage.setItem('orders', JSON.stringify(ordersList));
  localStorage.setItem('lastOrderId', orderId);

  // Send via WhatsApp API URL if requested
  if (isWhatsApp) {
    sendWhatsAppReceiptMessage(phone, orderDetails);
  }

  // Clear Cart
  cart = [];
  updateUI();
  closeCart();

  // Show Confirmation View
  menuView.classList.remove('active');
  reservationView.classList.remove('active');
  confirmationView.classList.add('active');

  confirmationTitle.textContent = isWhatsApp ? 'Digital Receipt Dispatched!' : 'Order Processed!';
  confirmationDesc.textContent = isWhatsApp 
    ? `An itemized bill has been dispatched via WhatsApp to +91 ${phone}.`
    : 'Your order has been recorded at Saffron & Spice.';
  orderIdText.textContent = `Order ID: #${orderId}`;

  confirmSummaryHeader.textContent = 'Digital Receipt Details';
  confirmCustomerName.textContent = `Customer: ${name} ${phone ? '(+91 ' + phone + ')' : ''}`;
  confirmCustomerAddress.textContent = `Items: ${itemizedList.map(i => i.quantity + 'x ' + i.name).join(', ')} | Grand Total: ${totalVal}`;
  deliverySummaryCard.style.display = 'flex';

  if (waCustomerPhone) waCustomerPhone.value = '';
  document.getElementById('appContainer').scrollTo({ top: 0, behavior: 'smooth' });
  showToast(isWhatsApp ? 'WhatsApp receipt dispatched!' : 'Order successfully placed!', 'success');
}

// Generate & Format WhatsApp Bill Message
function sendWhatsAppReceiptMessage(phone, order) {
  const cleanPhone = phone.replace(/\D/g, '');
  const dateStr = new Date(order.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  let itemsFormatted = order.items.map(i => `• ${i.quantity}x ${i.name} — ₹${i.total}`).join('\n');

  const messageText = 
`✨ *SAFFRON & SPICE - DIGITAL RECEIPT* ✨
----------------------------------------
*Order ID:* #${order.orderId}
*Date:* ${dateStr}

*ITEMIZED ORDER SUMMARY:*
${itemsFormatted}

----------------------------------------
*Subtotal:* ${order.subtotal}
*GST & Taxes (5%):* ${order.tax}
*GRAND TOTAL:* ${order.total}
----------------------------------------
*Guest:* ${order.customerName}
*Status:* Confirmed & Preparing

Thank you for dining with Saffron & Spice! 🌶️`;

  const waUrl = `https://api.whatsapp.com/send?phone=91${cleanPhone}&text=${encodeURIComponent(messageText)}`;
  window.open(waUrl, '_blank');
}

// Show menu view
function showMenuView() {
  switchMainView('menuView');
}

// Highlight Star ratings
function highlightStars(rating) {
  const stars = starsRow.querySelectorAll('.star-btn');
  stars.forEach(star => {
    const val = parseInt(star.dataset.value);
    if (val <= rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// Submit Ratings
function submitRating(rating) {
  const lastOrderId = localStorage.getItem('lastOrderId') || 'N/A';
  const ordersList = JSON.parse(localStorage.getItem('orders')) || [];
  const orderIndex = ordersList.findIndex(o => o.orderId === lastOrderId);
  if (orderIndex !== -1) {
    ordersList[orderIndex].rating = rating;
    localStorage.setItem('orders', JSON.stringify(ordersList));
  }

  highlightStars(rating);
  setTimeout(() => {
    starsRow.style.display = 'none';
    document.querySelector('.feedback-prompt').style.display = 'none';
    feedbackSuccessMsg.style.display = 'block';
    showToast('Thank you for your rating!', 'success');
  }, 200);

  setTimeout(() => {
    showMenuView();
  }, 2500);
}

// Toast Notification Helper
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
    </span>
    <span>${message}</span>
  `;
  
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

// Admin Panel Security & Authentication Functions
const ADMIN_USERNAME = 'arjun';
const ADMIN_PASSWORD = 'arjun321@';
let isAdminAuthenticated = sessionStorage.getItem('adminLoggedIn') === 'true';

const adminLoginModal = document.getElementById('adminLoginModal');
const closeAdminLoginModalBtn = document.getElementById('closeAdminLoginModalBtn');
const adminUsernameInput = document.getElementById('adminUsernameInput');
const adminPasswordInput = document.getElementById('adminPasswordInput');
const adminLoginError = document.getElementById('adminLoginError');
const adminLoginSubmitBtn = document.getElementById('adminLoginSubmitBtn');
const adminLoginForm = document.getElementById('adminLoginForm');

if (closeAdminLoginModalBtn) {
  closeAdminLoginModalBtn.addEventListener('click', closeAdminLoginModal);
}
if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', validateAdminLogin);
}
if (adminLoginSubmitBtn) {
  adminLoginSubmitBtn.addEventListener('click', validateAdminLogin);
}

function openAdminLoginModal() {
  if (adminUsernameInput) adminUsernameInput.value = '';
  if (adminPasswordInput) adminPasswordInput.value = '';
  if (adminLoginError) adminLoginError.style.display = 'none';
  if (adminLoginModal) adminLoginModal.style.display = 'flex';
  setTimeout(() => {
    if (adminUsernameInput) adminUsernameInput.focus();
  }, 100);
}

function closeAdminLoginModal() {
  if (adminLoginModal) adminLoginModal.style.display = 'none';
}

function validateAdminLogin(e) {
  if (e) e.preventDefault();
  const username = adminUsernameInput ? adminUsernameInput.value.trim().toLowerCase() : '';
  const password = adminPasswordInput ? adminPasswordInput.value : '';

  if (username === ADMIN_USERNAME.toLowerCase() && password === ADMIN_PASSWORD) {
    isAdminAuthenticated = true;
    sessionStorage.setItem('adminLoggedIn', 'true');
    closeAdminLoginModal();
    
    menuView.classList.remove('active');
    reservationView.classList.remove('active');
    confirmationView.classList.remove('active');
    adminView.classList.add('active');
    
    tabMenuBtn.classList.remove('active');
    tabReservationBtn.classList.remove('active');
    adminToggleBtn.textContent = 'LOGOUT (ARJUN)';
    adminToggleBtn.style.background = 'var(--whatsapp-green)';
    adminToggleBtn.style.color = '#fff';
    
    closeCart();
    renderAdminPanel();
    showToast('Authorized access as Admin (arjun)', 'success');
  } else {
    if (adminLoginError) adminLoginError.style.display = 'flex';
    if (adminPasswordInput) adminPasswordInput.value = '';
    const card = document.getElementById('adminLoginCard');
    if (card) {
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
    }
  }
}

function adminLogout() {
  isAdminAuthenticated = false;
  sessionStorage.removeItem('adminLoggedIn');
  switchMainView('menuView');
  adminToggleBtn.textContent = 'ADMIN';
  adminToggleBtn.style.background = 'rgba(255, 255, 255, 0.05)';
  adminToggleBtn.style.color = 'var(--text-muted)';
  showToast('Admin logged out.', 'info');
}

// Toggle between Customer View and Admin Panel Dashboard (Protected)
function toggleAdminView() {
  if (adminView.classList.contains('active')) {
    if (isAdminAuthenticated) {
      adminLogout();
    } else {
      switchMainView('menuView');
    }
  } else {
    if (isAdminAuthenticated) {
      menuView.classList.remove('active');
      reservationView.classList.remove('active');
      confirmationView.classList.remove('active');
      adminView.classList.add('active');
      
      tabMenuBtn.classList.remove('active');
      tabReservationBtn.classList.remove('active');
      adminToggleBtn.textContent = 'LOGOUT (ARJUN)';
      adminToggleBtn.style.background = 'var(--whatsapp-green)';
      adminToggleBtn.style.color = '#fff';
      
      closeCart();
      renderAdminPanel();
    } else {
      openAdminLoginModal();
    }
  }
}

function switchAdminTab(tab) {
  if (tab === 'orders') {
    adminOrdersTabBtn.classList.add('active');
    adminResTabBtn.classList.remove('active');
    adminOrdersSection.style.display = 'block';
    adminReservationsSection.style.display = 'none';
  } else {
    adminOrdersTabBtn.classList.remove('active');
    adminResTabBtn.classList.add('active');
    adminOrdersSection.style.display = 'none';
    adminReservationsSection.style.display = 'block';
  }
  renderAdminPanel();
}

function renderAdminPanel() {
  renderAdminOrders();
  renderAdminReservations();
}

function renderAdminOrders() {
  adminOrdersList.innerHTML = '';
  const ordersList = JSON.parse(localStorage.getItem('orders')) || [];
  
  if (ordersList.length === 0) {
    adminOrdersList.innerHTML = `
      <div class="empty-cart-state" style="padding: 30px 0;">
        <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
        <p class="empty-cart-text">No orders recorded yet.</p>
      </div>
    `;
    return;
  }
  
  ordersList.forEach(order => {
    const timeStr = new Date(order.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const itemsStr = order.items.map(i => `${i.quantity}x ${i.name}`).join(', ');
    const waBadge = order.isWhatsAppSent ? '<span style="color: var(--whatsapp-green); font-size: 11px; font-weight: 600;"> (WhatsApp Bill Sent)</span>' : '';

    const card = document.createElement('div');
    card.className = 'admin-order-card';
    card.innerHTML = `
      <div class="admin-order-header">
        <span class="admin-order-id">Order #${order.orderId} ${waBadge}</span>
        <span class="admin-order-time">${timeStr}</span>
      </div>
      <div class="admin-customer-details">
        <p><strong>Customer Name:</strong> ${order.customerName}</p>
        ${order.customerPhone ? `<p><strong>WhatsApp Mobile:</strong> +91 ${order.customerPhone}</p>` : ''}
        <p><strong>Address / Location:</strong> ${order.customerAddress}</p>
      </div>
      <div class="admin-order-items">
        <p><strong>Items Ordered:</strong> ${itemsStr}</p>
        <p class="admin-order-total"><strong>Grand Total:</strong> ${order.total}</p>
      </div>
    `;
    adminOrdersList.appendChild(card);
  });
}

function renderAdminReservations() {
  adminReservationsList.innerHTML = '';
  const reservations = JSON.parse(localStorage.getItem('tableReservations')) || [];

  if (reservations.length === 0) {
    adminReservationsList.innerHTML = `
      <div class="empty-cart-state" style="padding: 30px 0;">
        <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
        <p class="empty-cart-text">No table reservations made yet.</p>
      </div>
    `;
    return;
  }

  reservations.forEach(res => {
    const isCancelled = res.status === 'Cancelled';
    const statusTagClass = isCancelled ? 'cancelled' : 'confirmed';

    const card = document.createElement('div');
    card.className = 'admin-res-card';
    card.innerHTML = `
      <div class="admin-res-card-header">
        <span class="res-id-badge">#${res.reservationId}</span>
        <span class="res-status-tag ${statusTagClass}">${res.status}</span>
      </div>
      <div class="res-card-details">
        <p><strong>Guest Name:</strong> ${res.customerName} (${res.customerPhone})</p>
        <p><strong>Schedule:</strong> ${res.date} at ${res.timeSlot}</p>
        <p><strong>Reserved Table:</strong> ${res.tableName} (${res.guests} Guests)</p>
        <p><strong>Occasion:</strong> ${res.occasion || 'Casual Dining'}</p>
      </div>
      <div class="admin-card-actions">
        ${!isCancelled ? `<button class="admin-action-btn cancel" onclick="toggleReservationStatus('${res.reservationId}', 'Cancelled')">Cancel Booking</button>` : ''}
        ${isCancelled ? `<button class="admin-action-btn confirm" onclick="toggleReservationStatus('${res.reservationId}', 'Confirmed')">Re-Confirm</button>` : ''}
      </div>
    `;
    adminReservationsList.appendChild(card);
  });
}

window.toggleReservationStatus = function(resId, newStatus) {
  const reservations = JSON.parse(localStorage.getItem('tableReservations')) || [];
  const idx = reservations.findIndex(r => r.reservationId === resId);
  if (idx !== -1) {
    reservations[idx].status = newStatus;
    localStorage.setItem('tableReservations', JSON.stringify(reservations));
    renderAdminReservations();
    renderTablesGrid();
    showToast(`Reservation #${resId} updated to ${newStatus}`, 'info');
  }
};
