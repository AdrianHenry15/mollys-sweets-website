"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cakeSchema = new mongoose_1.Schema({
    cakeBase: {
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
    },
    cakeFlavor: {
        flavor: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        filling: {
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
        fruit: {
            type: Boolean,
            required: true,
            trim: true,
        },
        fruitType: {
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
exports.default = (0, mongoose_1.model)("Cake", cakeSchema);
