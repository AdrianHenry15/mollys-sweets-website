"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieFlavorSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
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
});
exports.default = (0, mongoose_1.model)("CookieFlavor", cookieFlavorSchema);
