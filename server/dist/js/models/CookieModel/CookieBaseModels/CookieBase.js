"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieBaseSchema = new mongoose_1.Schema({
    size: {
        type: String,
        require: true,
        trim: true,
    },
    quantity: {
        type: String,
        require: true,
        trim: true,
    },
    feeds: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CookieBase", cookieBaseSchema);
