# E-Commerce Product Catalog Management CMS - API Routes Documentation

## Authentication Routes

### 1. POST /auth/register
**Description:** 
Register a new user account.

**Request Body:**
```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "SecurePassword123",
  "role": "vendor" // Optional, default is "customer"
}
```

**Response:** 
User object with token.

### 2. POST /auth/login
**Description:** 
Log in an existing user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

**Response:** 
User object with authentication token.

### 3. POST /auth/forgot-password
**Description:** 
Request a password reset.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:** 
Success message with instructions.

### 4. POST /auth/reset-password
**Description:** 
Reset password using token.

**Request Body:**
```json
{
  "token": "reset_token_here",
  "newPassword": "NewSecurePassword123"
}
```

**Response:** 
Success message.

### 5. POST /auth/verify-email
**Description:** 
Verify email address using token.

**Request Body:**
```json
{
  "token": "verification_token_here"
}
```

**Response:** 
Success message.

### 6. GET /auth/profile
**Description:** 
Get current user profile information.

**Headers:** 
Authorization: Bearer {token}

**Response:** 
User profile object.

### 7. PUT /auth/profile
**Description:** 
Update user profile information.

**Headers:** 
Authorization: Bearer {token}

**Request Body:**
```json
{
  "username": "updated_username",
  "profilePic": "url_to_image",
  "bio": "Seller of handmade crafts"
}
```

**Response:** 
Updated user profile.

## Product Management Routes

### 8. GET /products
**Description:** 
Fetch all products with filtering, sorting, and pagination.

**Response:** 
List of products with pagination metadata.

### 9. GET /products/:id
**Description:** 
Fetch a specific product by its ID.

**Response:** 
The requested product with details.

### 10. POST /products
**Description:** 
Create a new product.

**Headers:** 
Authorization: Bearer {token}

**Response:** 
The created product.

### 11. PUT /products/:id
**Description:** 
Update a product completely.

**Headers:** 
Authorization: Bearer {token}

**Request Body:** 
Complete product object (similar to POST).

**Response:** 
The updated product.

### 12. PATCH /products/:id
**Description:** 
Update specific fields of a product.

**Headers:** 
Authorization: Bearer {token}

**Request Body:** 
Partial product object with fields to update.

**Response:** 
The updated product.

### 13. DELETE /products/:id
**Description:** 
Delete a product.

**Headers:** 
Authorization: Bearer {token}

**Response:** 
Success message.

## Category Management Routes

### 14. GET /categories
**Description:** 
Fetch all product categories.

**Response:** 
List of all categories.

### 15. GET /categories/:id
**Description:** 
Fetch a specific category by ID.

**Response:** 
The requested category with details.

### 16. GET /categories/:id/products
**Description:** 
Fetch all products in a specific category.

**Query Parameters:** 
Same as GET /products

**Response:** 
List of products in category with pagination metadata.

### 17. POST /categories
**Description:** 
Create a new category.

**Headers:** 
Authorization: Bearer {token} (admin role required)

**Response:** 
The created category.

### 18. PUT /categories/:id
**Description:** 
Update a category completely.

**Headers:** 
Authorization: Bearer {token} (admin role required)

**Request Body:** 
Complete category object.

**Response:** 
The updated category.

### 19. DELETE /categories/:id
**Description:** 
Delete a category.

**Headers:** 
Authorization: Bearer {token} (admin role required)

**Response:** 
Success message.

## Media Management Routes

### 20. POST /media/upload
**Description:** 
Upload media file(s).

**Headers:** 
Authorization: Bearer {token}

**Request Body:** 
Form data with file(s)

**Response:** 
URLs of uploaded media.

### 21. GET /media
**Description:** 
Get all media files for current user.

**Headers:** 
Authorization: Bearer {token}

**Query Parameters:** 
Pagination and filtering options

**Response:** 
List of media files with metadata.

### 22. DELETE /media/:id
**Description:** 
Delete a media file.

**Headers:** 
Authorization: Bearer {token}

**Response:** 
Success message.

## Search Routes

### 23. GET /search
**Description:** 
Advanced search across products.

**Query Parameters:**
- `q`: Search query
- `filters`: JSON object with filtering criteria
- `page`: Page number
- `limit`: Results per page

**Response:** 
Search results with pagination metadata.

## SEO Routes

### 24. GET /seo/metadata/:productId
**Description:** 
Get SEO metadata for a specific product.

**Response:** 
SEO metadata for the product.

### 25. PUT /seo/metadata/:productId
**Description:** 
Update SEO metadata for a product.

**Headers:** 
Authorization: Bearer {token}

**Response:** 
Updated SEO metadata.
