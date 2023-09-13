// Import the controller
const ProductController = require("../controllers/product.controllers");

module.exports = (app) => {
    // Get requests
    // Get all route
    app.get("/api/products", ProductController.allProduct);

    // Get one by ID
    app.get("/api/products/:id", ProductController.oneProduct);

    // Post Requests
    app.post("/api/products/", ProductController.createProduct);

    // 	Put Requests
    // ? Put vs Patch?
    // ? Put sets the entire data entry and patch only does a piece
    app.put("/api/products/:id/edit", ProductController.updateProduct);

    // Delete Requests
    app.delete("/api/products/:id", ProductController.deleteProduct);
};

// 3 Import routes to our server!

// module.exports = router;
