# E-Commerce Product Catalog Management CMS

## 🛒 User Authentication Module

- **POST `/auth/register`**  
  Register a new user account (customer or admin).  
  **Request Body:** `name`, `email`, `password`, `role` (optional)  
  **Response:** Success message and JWT token.

- **POST `/auth/login`**  
  Authenticate user credentials and return JWT token.  
  **Request Body:** `email`, `password`  
  **Response:** JWT token with user data.

- **POST `/auth/forgot-password`**  
  Request a password reset link to the registered email.  
  **Response:** Success message.

- **POST `/auth/reset-password/:token`**  
  Reset password using a valid reset token.  
  **Request Body:** `newPassword`  
  **Response:** Success message.

---

## 📦 Product Management Module

- **POST `/products`** *(Admin Only)*  
  Create a new product.  
  **Response:** Created product details.

- **GET `/products`**  
  Fetch all products with filters (search, category, tags) and pagination.  
  **Query Params:** `page`, `limit`, `search`, `category`, `tags`  
  **Response:** Paginated list of products.

- **GET `/products/:id`**  
  Fetch a specific product by its ID.  
  **Response:** Detailed product information.

- **PUT `/products/:id`** *(Admin Only)*  
  Fully update product details.  
  **Request Body:** Updated product fields.  
  **Response:** Updated product details.

- **PATCH `/products/:id`**  
  Partially update specific fields of a product (like `stock`, `price`).  
  **Response:** Updated product details.

- **DELETE `/products/:id`** *(Admin Only)*  
  Delete a product by ID.  
  **Response:** Success message.

---

## 🏷️ Category Management Module

- **POST `/categories`** *(Admin Only)*  
  Create a new category.  
  **Request Body:** `name`, `description`  
  **Response:** Created category details.

- **GET `/categories`**  
  Fetch all categories.  
  **Response:** List of categories.

- **GET `/categories/:id`**  
  Fetch a single category by ID.  
  **Response:** Category details.

- **DELETE `/categories/:id`** *(Admin Only)*  
  Delete a category by ID.  
  **Response:** Success message.

---

## 🖼️ Media Management Module

- **POST `/media/upload`**  
  Upload product images or videos.  
  **Request Body:** File upload (image/video)  
  **Response:** Uploaded media URL.

- **GET `/media`**  
  Fetch uploaded media files (Admin Panel).  
  **Response:** List of media files.

---

## 🔍 Search & SEO

- **GET `/search/products`**  
  Search products by keyword with filters and pagination.  
  **Query Params:** `query`, `category`, `priceRange`, `tags`, `page`, `limit`  
  **Response:** Paginated, filtered products list.

---
