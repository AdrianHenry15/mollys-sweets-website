"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cakeFruitSchema = new mongoose_1.Schema({
    fruit: {
        type: Boolean,
        required: true,
        trim: true,
    },
    fruitType: {
        type: String,
        required: false,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CakeFruit", cakeFruitSchema);
