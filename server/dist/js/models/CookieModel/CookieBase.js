"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieBaseSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
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
});
exports.default = (0, mongoose_1.model)("CookieBase", cookieBaseSchema);
