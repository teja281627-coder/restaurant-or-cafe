# Saffron & Spice - Restaurant Direct Ordering Platform

A premium, customer-facing mobile web application for a restaurant that allows users to browse a menu, add items to a cart, input delivery details, place an online order, and leave a star rating feedback. It also features a built-in Restaurant Admin Panel to track all orders, customer names, delivery addresses, and customer ratings.

## 🚀 Key Features

*   **Appetizing Digital Menu Card**: Browse structured food categories (Appetizers, Mains, Beverages, Desserts) with smooth pill filtering, instant search, and warm visual layouts.
*   **Frictionless Shopping Cart**: Slide-up bottom sheet drawer enabling users to adjust quantities, remove items, and view calculations in real-time (Subtotal, GST, and Grand Total in ₹).
*   **Customer Delivery details**: Mandates Full Name and exact Delivery Address before letting the user checkout, ensuring restaurant owners have exact delivery locations.
*   **Order Confirmation Screen**: Transitions to a kitchen order status page displaying the Order ID and delivery info for confirmation.
*   **Interactive Star Rating**: 5-star rating system prompts users for feedback, displays a thank-you success message, saves the data to the orders database, and auto-redirects.
*   **Built-in Restaurant Admin Panel**: Toggleable tab in the header showing restaurant owners a live feed of all active orders, names, delivery addresses, items list, totals, and star ratings.

---

## 📂 Project Structure

```text
├── images/
│   ├── hero_banner.png     # Restaurant hero background spread
│   ├── paneer_tikka.png    # Plated Paneer Tikka appetizer
│   ├── butter_chicken.png  # Traditional copper bowl Butter Chicken
│   ├── mango_lassi.png     # Clay cup Mango Lassi
│   └── gulab_jamun.png     # Spongy saffron-syrup Gulab Jamun
├── index.html              # Main HTML markup and view structures
├── styles.css              # Custom responsive stylesheet & animations
├── app.js                  # State logic, cart actions, validation, and dashboard toggle
└── README.md               # Project documentation
```

---

## 🛠️ How to Run Locally

Since this is a static single-page application built on pure HTML5, CSS3, and JavaScript, no complex build tools or compilers are required.

### Option 1: Double-click index.html
You can open `index.html` directly in any web browser by double-clicking the file in your explorer.

### Option 2: Run a Local HTTP Server (Recommended)
To prevent web browser resource loading restrictions and leverage proper cache updating, launch a lightweight web server:

1.  Open your terminal inside the project directory.
2.  Run the HTTP server using Node.js:
    ```bash
    npx http-server -p 8080
    ```
3.  Open [http://localhost:8080](http://localhost:8080) in your web browser.

*Note: If your browser caches local files, you can force-reload using `Ctrl + F5` or append a version parameter to bypass cache: `http://localhost:8080/?v=1.0`*
