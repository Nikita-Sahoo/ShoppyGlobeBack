# ShoppyGlobe Backend API

Backend API for the ShoppyGlobe E-commerce application.
This project implements product management, user authentication, and cart management using Node.js and MongoDB.

# Tech Stack
    Backend: Node.js
    Framework: Express.js
    Database: MongoDB
    ODM: Mongoose
    Authentication: JSON Web Token
    Password Hashing: bcryptjs
    API Testing: Thunder Client

# Project Features
    1. User Authentication
        Register new users
        Login users
        Password hashing using bcrypt
        JWT token authentication

    2. Product Management
        Add product
        Get all products
        Get product by ID
        Update product
        Delete product

    3. Cart Management
        Add product to cart
        Update cart quantity
        Remove item from cart
        Protected routes using JWT authentication

# Installation & Setup
    1️⃣ Clone Repository
        git clone https://github.com/yourusername/shoppyglobe-backend.git
        cd shoppyglobe-backend
    2️⃣ Install Dependencies
        npm install

# Packages installed:
    npm install express mongoose dotenv bcryptjs jsonwebtoken cors
    npm install nodemon --save-dev

# Environment Variables

    Create .env file in root directory:

    PORT=5000
    MONGO_URI="mongodb url"
    JWT_SECRET=your_secret_key

# Run the Project

    Development mode:
        npm run dev

    Production mode:
        npm start
        Server will start on: http://localhost:5000