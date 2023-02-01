"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieFlavorSchema = new mongoose_1.Schema({
    flavor: {
        type: String,
        required: true,
        price: Number,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CookieFlavor", cookieFlavorSchema);
