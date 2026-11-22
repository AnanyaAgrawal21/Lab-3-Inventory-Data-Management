
# Inventory and Data Management System

## Assignment 3 - Web Dev III
Unit 3

## Project Overview
A RESTful backend application for managing product inventory using Node.js, Express.js, MongoDB, and Mongoose.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Features
- Create a product
- Get all products
- Search and filter products
- Sorting and pagination
- Get product by ID
- Update product details
- Update product stock
- Delete product
- Low-stock report
- Category-wise inventory summary
- Schema validation
- Centralized error handling

## Installation

1. Clone or download the project.
2. Install dependencies:

   npm install

3. Create a `.env` file in the root folder.

4. Add your MongoDB connection string:

   MONGO_URI=your_mongodb_connection_string
   PORT=5000

5. Start the development server:

   npm run dev

## API Base URL

http://localhost:5000/api/products

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/products | Create product |
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product by ID |
| PUT | /api/products/:id | Update product |
| PATCH | /api/products/:id/stock | Update stock |
| DELETE | /api/products/:id | Delete product |
| GET | /api/products/low-stock | Low-stock report |
| GET | /api/products/summary/category | Category summary |

## Database
MongoDB Atlas is used for storing product information.

## Testing
The Create Product API was tested using Postman and returned `201 Created`.
