
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Inventory Management System API is running!");
});

// Load product routes safely
const productRoutesPath = path.join(__dirname, "routes", "productRoutes.js");

try {
    const productRoutes = require(productRoutesPath);
    app.use("/api/products", productRoutes);
} catch (error) {
    console.error("Product routes could not be loaded.");
    console.error("Check this file: routes/productRoutes.js");
    console.error(error.message);
    process.exit(1);
}

// 404 route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Central error handling
app.use((err, req, res, next) => {
    console.error(err);

    if (err.code === 11000) {
        return res.status(400).json({
            success: false,
            message: "SKU already exists"
        });
    }

    if (err.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }

    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid ID format"
        });
    }

    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
});

// Connect MongoDB and start server
async function startServer() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is missing in .env file");
        }

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
    }
}

startServer();
