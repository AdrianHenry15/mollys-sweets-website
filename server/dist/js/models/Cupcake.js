"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cupcakeSchema = new mongoose_1.Schema({
    cupcakeBase: {
        regular: {
            type: Boolean,
            required: true,
            price: Number,
            trim: true,
        },
        mini: {
            type: Boolean,
            required: true,
            price: Number,
            trim: true,
        },
        quantity: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        totalPrice: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    cupcakeFlavor: {
        flavor: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        frosting: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        totalPrice: {
            type: Number,
            required: true,
            trim: true,
        },
    },
});
exports.default = (0, mongoose_1.model)("Cupcake", cupcakeSchema);
