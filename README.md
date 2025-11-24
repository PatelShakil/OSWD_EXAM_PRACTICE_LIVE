# Shopping Cart Application (Node.js + Express + MongoDB + PHP Login with Custom Captcha)

---
## 📺 Introduction Video

[![NODE-EXPRESS-PHP](https://img.youtube.com/vi/mnEM8djKPCE/maxresdefault.jpg)](https://youtu.be/mnEM8djKPCE)

Watch the step-by-step video guide for Learning Node-Express and PHP with all basic fundamentals.

---

This project demonstrates a complete **Shopping Cart Management System** built using:

* **Node.js + Express** for backend API
* **MongoDB + Mongoose** for database
* **EJS** for server-side views template
* **Multer** for image upload handling
* **PHP (GD Library)** for custom CAPTCHA login system
* **JWT** for user authentication

This setup is practical, simple, and specifically designed for **college practical exams, viva, internal tests, and demo livestreams**.
The codebase is clean and easy to understand.

---

# 📌 Features

## ✔ **User Authentication (PHP + Captcha + Express API)**

* Custom CAPTCHA using **PHP GD Library**
* Secure login form
* Login request sent to **Node.js login API**
* JWT token returned after successful authentication
* Perfect for practical exam demonstration

---

## ✔ **Category Management (Node.js + EJS)**

* Add categories
* Display success messages
* Used while creating new products

---

## ✔ **Product Management (Node.js + EJS)**

* Add Product
* Upload product photo (Multer)
* Store image in `/uploads/`
* Show list of all products
* Delete product with image removal
* Category name populated via Mongoose relations (`populate`)

---

# 🛠️ Tech Stack

### **Backend (Node.js)**

* Express.js
* Mongoose
* Multer
* JWT
* Body parser
* CORS

### **Database**

* MongoDB

### **Frontend (Server-side rendering)**

* EJS Templates

### **Login (PHP)**

* PHP GD Library (custom CAPTCHA)
* cURL (API request to Express login route)

---

# 📂 Project Structure

```
project/
│
├── server.js
│
├── views/
│   ├── category.ejs
│   ├── add.ejs
│   └── product.ejs
│
├── uploads/          # product images stored here
│
└── exam/
    ├── login.php
    ├── captcha.php
    ├── register.php
    └── product.php
```

---

# ▶️ How to Run Node.js Backend

```
npm install
node server.js
```

Server starts at:

```
http://localhost:5000
```

---

# ▶️ How to Run PHP Captcha Login

Place the `exam/` folder in your **XAMPP/htdocs** or **WAMP/www**.
Then open in browser:

```
http://localhost/exam/login.php
```

Each login request calls:

```
POST http://localhost:5000/login
```

---

# 🧪 API Endpoints

### **POST /register**

Register user with hashed password.

### **POST /login**

Returns JWT token.

### **GET /**

Shows all products.

### **GET /product/add**

Product form.

### **POST /product/add**

Add new product.

### **POST /product/delete/:id**

Delete product + image.

---

# 🧰 Custom CAPTCHA (PHP GD Library)

* Generates random characters
* Adds lines + noise
* Stores captcha string in session
* Secure validation before login

This ensures strong security and good marks during practical evaluation.

---

# 🎥 Livestream Note

This codebase is the **same solution demonstrated by M. Shakil Patel during the livestream**, covering:

1. Building Node.js + Express API
2. Creating MongoDB collections
3. Developing EJS views
4. Handling file uploads with Multer
5. Setting up PHP login system with GD CAPTCHA
6. Full integration & testing

The livestream showcased step-by-step implementation to help students prepare for practicals and real-world development.

---

# 📚 Ideal For

* Practical exam programs
* Internal viva submissions
* Students learning Node.js + MongoDB
* Demonstrating PHP + Node integration
* Basic e-commerce mini projects

---

# 🙌 Author

**M. Shakil Patel**
Computer Science Enthusiast · Software Engineer · Android + Full Stack Developer

---

If you want, I can also add:

* Full ZIP folder
  a- Detailed installation guide
  a- Screenshots for documentation
* Database sample records
