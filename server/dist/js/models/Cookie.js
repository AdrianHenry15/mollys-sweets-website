"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieSchema = new mongoose_1.Schema({
    cookieBase: {
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
    cookieFlavor: {
        flavor: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        frosting: {
            type: Boolean,
            required: true,
            trim: true,
        },
        frostingType: {
            type: String,
            required: false,
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
exports.default = (0, mongoose_1.model)("Cookie", cookieSchema);
