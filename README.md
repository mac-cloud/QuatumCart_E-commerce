# 🛒 Quantum Cart

Quantum Cart is a full-stack e-commerce web application built using **React** for the frontend and **Django (Python)** for the backend. It provides a modern and scalable online shopping experience with features like user authentication, product browsing, cart management, order tracking, and admin control.

---

## 🚀 Features

### 👥 User Features
- User registration and login
- Product search, filtering, and detailed views
- Shopping cart and checkout process
- Order history and status tracking
- Responsive UI for mobile and desktop

### 🛠️ Admin Features
- Admin dashboard for managing products, categories, and orders
- Product CRUD operations
- Order status updates and customer management
- Dashboard analytics (optional)

---

## 🧰 Tech Stack

### 🔹 Frontend
- **React** (with Hooks & Context API)
- **Axios** for API requests
- **React Router** for navigation
- **TailwindCSS / Bootstrap** (depending on your styling)

### 🔹 Backend
- **Django** (Python)
- **Django REST Framework** for building RESTful APIs
- **SQLite** (dev) or **PostgreSQL** (prod-ready)
- **Django Admin** for backend management

### 🔹 Deployment
- Docker (optional for containerization)
- Hosted on [e.g. Heroku, AWS, Railway] *(update this if deployed)*

---

## 📦 Installation

### 🔧 Backend (Django)
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/quantum-cart.git
   cd quantum-cart/backend


Create a virtual environment and activate it:

  ```bash
    python -m venv env
    source env/bin/activate # on Windows: env\Scripts\activate

Install dependencies:

    ```bash
     pip install -r requirements.txt

Run Server 
   ``` python manage.py migrate
    python manage.py runserver




🙌 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or improve.
