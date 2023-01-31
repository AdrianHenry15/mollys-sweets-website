"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cakeBaseSchema = new mongoose_1.Schema({
    singleTier: {
        type: Boolean,
        price: Number,
        required: true,
        trim: true,
    },
    multipleTier: {
        type: Boolean,
        price: Number,
        required: true,
        trim: true,
    },
    roundCake: {
        type: Boolean,
        required: true,
        trim: true,
    },
    sheetCake: {
        type: Boolean,
        price: Number,
        required: true,
        trim: true,
    },
    cakeSize: {
        type: String,
        feeds: String,
        price: Number,
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CakeBase", cakeBaseSchema);
