// import model
const Product = require("../models/product.model");

// Server Test:

module,
    (exports.apiTest = (req, res) => {
        res.json({ message: "Server is working!" });
    });

// 2 export all functions with placeholder

// Create One
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => res.status(400).json(err));
};

// Read All
module.exports.allProduct = (req, res) => {
    Product.find()
        .then((productList) => res.json(productList))
        .catch((err) => res.status(400).json(err));
};

// Read One
module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => res.status(400).json(err));
};

// Update One
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true, // Enabling validation step
    })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => res.status(400).json(err));
};

// Delete One
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((status) => res.json(status))
        .catch((err) => res.status(400).json(err));
};
