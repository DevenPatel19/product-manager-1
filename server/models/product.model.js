// Define a DB structure with our models

// ! 1 import Mongoose

const mongoose = require("mongoose");

// ? 2. Define the schema with keys + validations

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "What do you call it?!"],
            minlength: [2, "Must be 2+ characters in length"],
        },
        price: {
            type: Number,
            required: [true, "How much is it?!"],
            min: [0.0, "It can't be Free."],
        },
        description: {
            type: String,
            required: [true, "What is it?!"],
            minlength: [2, "Give me more than 2 letters please."],
        },
    },
    { timestamps: true }
);

// * 3. Create a model with the schema and export it

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

// favorite: {
//     type: Boolean,
//     default: false,
// }
