# E-Commerce Product Catalog Management CMS
Sure! I'll organize all the API endpoints you just gave into a **professional and clean README API Reference section**, ready for your **E-Commerce Product Catalog Management CMS**.  
Here’s how you can put it into your `README.md` under the `## 📚 API Reference` section:

---

# 📚 API Reference

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
  **Request Body Example:**
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 199.99,
    "categoryId": "categoryId",
    "tags": ["tag1", "tag2"],
    "stock": 100,
    "imageUrls": ["url1", "url2"]
  }
  ```
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

## ⭐ Product Rating & Review Module

- **POST `/products/:id/reviews`**  
  Submit a review and rating for a product.  
  **Request Body:** `rating (1-5)`, `comment`  
  **Response:** Success message.

- **GET `/products/:id/reviews`**  
  Fetch all reviews and ratings for a product.  
  **Response:** List of reviews.

- **DELETE `/reviews/:reviewId`**  
  Delete a review (Admin or Review Owner).  
  **Response:** Success message.

---

## 🔍 Search & SEO

- **GET `/search/products`**  
  Search products by keyword with filters and pagination.  
  **Query Params:** `query`, `category`, `priceRange`, `tags`, `page`, `limit`  
  **Response:** Paginated, filtered products list.

---

## 🛒 (Optional) Cart Management Module

- **POST `/cart/add`**  
  Add a product to user's cart.  
  **Request Body:** `productId`, `quantity`  
  **Response:** Updated cart items.

- **GET `/cart`**  
  Fetch current user's cart items.  
  **Response:** List of cart products.

- **DELETE `/cart/remove/:productId`**  
  Remove a product from cart.  
  **Response:** Updated cart.

---

## 📦 (Optional) Order Management Module

- **POST `/orders`**  
  Place an order with cart items.  
  **Request Body:** `shippingAddress`, `paymentInfo`, `cartItems`  
  **Response:** Order confirmation.

- **GET `/orders`**  
  Fetch user’s past orders. (Admin can fetch all orders.)  
  **Response:** List of orders.

---

# ✅ This section can directly fit into your README under `API Reference`.

---

Would you also like me to help create a **full README file** including this, with:
- Project Title
- Overview
- Features
- Tech Stack
- Setup Instructions
- API Reference (this part)
- Contribution & License?

👉 I can compile everything nicely if you want it ready-to-upload on GitHub! 🚀  
Want me to do that too?
