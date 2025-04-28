# E-Commerce Product Catalog Management CMS - API Routes Documentation

## Authentication Routes

### 1. POST /auth/register
**Description:** Register a new user account.
**Request Body:**
```json
{
  "username": "example_user",
  "email": "user@example.com",
  "password": "SecurePassword123",
  "role": "vendor" // Optional, default is "customer"
}
```
**Response:** User object with token.

### 2. POST /auth/login
**Description:** Log in an existing user.
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```
**Response:** User object with authentication token.

### 3. POST /auth/forgot-password
**Description:** Request a password reset.
**Request Body:**
```json
{
  "email": "user@example.com"
}
```
**Response:** Success message with instructions.

### 4. POST /auth/reset-password
**Description:** Reset password using token.
**Request Body:**
```json
{
  "token": "reset_token_here",
  "newPassword": "NewSecurePassword123"
}
```
**Response:** Success message.

### 5. POST /auth/verify-email
**Description:** Verify email address using token.
**Request Body:**
```json
{
  "token": "verification_token_here"
}
```
**Response:** Success message.

### 6. GET /auth/profile
**Description:** Get current user profile information.
**Headers:** Authorization: Bearer {token}
**Response:** User profile object.

### 7. PUT /auth/profile
**Description:** Update user profile information.
**Headers:** Authorization: Bearer {token}
**Request Body:**
```json
{
  "username": "updated_username",
  "profilePic": "url_to_image",
  "bio": "Seller of handmade crafts"
}
```
**Response:** Updated user profile.

## Product Management Routes

### 8. GET /products
**Description:** Fetch all products with filtering, sorting, and pagination.
**Query Parameters:**
- `page`: Page number
- `limit`: Number of items per page
- `category`: Filter by category ID
- `search`: Search term
- `sort`: Sort field (price, createdAt, etc.)
- `direction`: Sort direction (asc, desc)
- `minPrice`: Minimum price filter
- `maxPrice`: Maximum price filter
**Response:** List of products with pagination metadata.

### 9. GET /products/:id
**Description:** Fetch a specific product by its ID.
**Response:** The requested product with details.

### 10. POST /products
**Description:** Create a new product.
**Headers:** Authorization: Bearer {token}
**Request Body:**
```json
{
  "name": "Premium Bluetooth Headphones",
  "description": "High-quality wireless headphones with noise cancellation",
  "price": 149.99,
  "categoryId": "electronics123",
  "tags": ["electronics", "audio", "wireless"],
  "inventory": 50,
  "images": ["url1.jpg", "url2.jpg"],
  "specifications": {
    "color": "Black",
    "weight": "300g",
    "connectivity": "Bluetooth 5.0"
  },
  "visibility": "public"
}
```
**Response:** The created product.

### 11. PUT /products/:id
**Description:** Update a product completely.
**Headers:** Authorization: Bearer {token}
**Request Body:** Complete product object (similar to POST).
**Response:** The updated product.

### 12. PATCH /products/:id
**Description:** Update specific fields of a product.
**Headers:** Authorization: Bearer {token}
**Request Body:** Partial product object with fields to update.
**Response:** The updated product.

### 13. DELETE /products/:id
**Description:** Delete a product.
**Headers:** Authorization: Bearer {token}
**Response:** Success message.

## Category Management Routes

### 14. GET /categories
**Description:** Fetch all product categories.
**Response:** List of all categories.

### 15. GET /categories/:id
**Description:** Fetch a specific category by ID.
**Response:** The requested category with details.

### 16. GET /categories/:id/products
**Description:** Fetch all products in a specific category.
**Query Parameters:** Same as GET /products
**Response:** List of products in category with pagination metadata.

### 17. POST /categories
**Description:** Create a new category.
**Headers:** Authorization: Bearer {token} (admin role required)
**Request Body:**
```json
{
  "name": "Electronics",
  "description": "Electronic devices and accessories",
  "parentId": null,
  "image": "url_to_category_image.jpg"
}
```
**Response:** The created category.

### 18. PUT /categories/:id
**Description:** Update a category completely.
**Headers:** Authorization: Bearer {token} (admin role required)
**Request Body:** Complete category object.
**Response:** The updated category.

### 19. DELETE /categories/:id
**Description:** Delete a category.
**Headers:** Authorization: Bearer {token} (admin role required)
**Response:** Success message.

## Media Management Routes

### 20. POST /media/upload
**Description:** Upload media file(s).
**Headers:** Authorization: Bearer {token}
**Request Body:** Form data with file(s)
**Response:** URLs of uploaded media.

### 21. GET /media
**Description:** Get all media files for current user.
**Headers:** Authorization: Bearer {token}
**Query Parameters:** Pagination and filtering options
**Response:** List of media files with metadata.

### 22. DELETE /media/:id
**Description:** Delete a media file.
**Headers:** Authorization: Bearer {token}
**Response:** Success message.

## Review and Rating Routes

### 23. GET /products/:id/reviews
**Description:** Get all reviews for a specific product.
**Query Parameters:** Pagination options
**Response:** List of reviews with pagination metadata.

### 24. POST /products/:id/reviews
**Description:** Add a review to a product.
**Headers:** Authorization: Bearer {token}
**Request Body:**
```json
{
  "rating": 4.5,
  "comment": "Great product, highly recommended!",
  "images": ["url1.jpg", "url2.jpg"]
}
```
**Response:** The created review.

### 25. PUT /reviews/:id
**Description:** Update a review.
**Headers:** Authorization: Bearer {token}
**Request Body:** Updated review object.
**Response:** The updated review.

### 26. DELETE /reviews/:id
**Description:** Delete a review.
**Headers:** Authorization: Bearer {token}
**Response:** Success message.

## Comment System Routes

### 27. GET /products/:id/comments
**Description:** Get all comments for a product.
**Query Parameters:** Pagination options
**Response:** List of comments with pagination metadata.

### 28. POST /products/:id/comments
**Description:** Add a comment to a product.
**Headers:** Authorization: Bearer {token}
**Request Body:**
```json
{
  "content": "Does this come in blue color?",
  "parentId": null
}
```
**Response:** The created comment.

### 29. POST /comments/:id/replies
**Description:** Reply to a comment.
**Headers:** Authorization: Bearer {token}
**Request Body:**
```json
{
  "content": "Yes, it does come in blue!"
}
```
**Response:** The created reply.

### 30. PUT /comments/:id
**Description:** Update a comment.
**Headers:** Authorization: Bearer {token}
**Request Body:** Updated comment content.
**Response:** The updated comment.

### 31. DELETE /comments/:id
**Description:** Delete a comment.
**Headers:** Authorization: Bearer {token}
**Response:** Success message.

## Like/Reaction Routes

### 32. POST /products/:id/reactions
**Description:** Add a reaction to a product.
**Headers:** Authorization: Bearer {token}
**Request Body:**
```json
{
  "type": "like" // or other reaction types: love, helpful, etc.
}
```
**Response:** Updated reaction count.

### 33. DELETE /products/:id/reactions
**Description:** Remove a reaction from a product.
**Headers:** Authorization: Bearer {token}
**Response:** Updated reaction count.

### 34. GET /products/:id/reactions
**Description:** Get all reactions for a product.
**Response:** Reaction counts by type.

## Notification Routes

### 35. GET /notifications
**Description:** Get all notifications for the current user.
**Headers:** Authorization: Bearer {token}
**Query Parameters:** Pagination options
**Response:** List of notifications with pagination metadata.

### 36. PUT /notifications/:id/read
**Description:** Mark a notification as read.
**Headers:** Authorization: Bearer {token}
**Response:** Updated notification object.

### 37. PUT /notifications/read-all
**Description:** Mark all notifications as read.
**Headers:** Authorization: Bearer {token}
**Response:** Success message.

## Analytics Routes

### 38. GET /analytics/products
**Description:** Get product performance analytics.
**Headers:** Authorization: Bearer {token} (admin or vendor role required)
**Query Parameters:** Time period, product IDs
**Response:** Analytics data for products.

### 39. GET /analytics/categories
**Description:** Get category performance analytics.
**Headers:** Authorization: Bearer {token} (admin role required)
**Query Parameters:** Time period, category IDs
**Response:** Analytics data for categories.

### 40. GET /analytics/overview
**Description:** Get overview of store performance.
**Headers:** Authorization: Bearer {token} (admin role required)
**Query Parameters:** Time period
**Response:** Dashboard analytics data.

## Search Routes

### 41. GET /search
**Description:** Advanced search across products.
**Query Parameters:**
- `q`: Search query
- `filters`: JSON object with filtering criteria
- `page`: Page number
- `limit`: Results per page
**Response:** Search results with pagination metadata.

## SEO Routes

### 42. GET /seo/metadata/:productId
**Description:** Get SEO metadata for a specific product.
**Response:** SEO metadata for the product.

### 43. PUT /seo/metadata/:productId
**Description:** Update SEO metadata for a product.
**Headers:** Authorization: Bearer {token}
**Request Body:**
```json
{
  "metaTitle": "Premium Bluetooth Headphones - Best Deals Online",
  "metaDescription": "Shop the best noise-cancelling headphones with premium sound quality.",
  "keywords": "headphones, wireless, bluetooth, noise-cancelling",
  "customSlug": "premium-bluetooth-headphones"
}
```
**Response:** Updated SEO metadata.

## Subscription Routes

### 44. POST /subscriptions
**Description:** Subscribe to updates (newsletter, product stock alerts, etc.).
**Request Body:**
```json
{
  "email": "user@example.com",
  "type": "newsletter", // or "stock-alerts", "price-drops", etc.
  "productId": "product123" // Optional, for specific product subscriptions
}
```
**Response:** Subscription confirmation.

### 45. DELETE /subscriptions/:id
**Description:** Unsubscribe from updates.
**Response:** Success message.

## Follow Routes

### 46. POST /vendors/:id/follow
**Description:** Follow a vendor to get their private content.
**Headers:** Authorization: Bearer {token}
**Response:** Updated follow status.

### 47. DELETE /vendors/:id/follow
**Description:** Unfollow a vendor.
**Headers:** Authorization: Bearer {token}
**Response:** Updated follow status.

### 48. GET /vendors/:id/followers
**Description:** Get all followers of a vendor.
**Headers:** Authorization: Bearer {token} (vendor must be current user or admin)
**Response:** List of followers with pagination metadata.

### 49. GET /users/:id/following
**Description:** Get all vendors a user is following.
**Headers:** Authorization: Bearer {token}
**Response:** List of followed vendors with pagination metadata.

## Settings Routes

### 50. GET /settings
**Description:** Get system settings.
**Headers:** Authorization: Bearer {token} (admin role required)
**Response:** System settings object.

### 51. PUT /settings
**Description:** Update system settings.
**Headers:** Authorization: Bearer {token} (admin role required)
**Request Body:** Settings object with fields to update.
**Response:** Updated settings object.
