"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const regularSizeCupcakeQuantitySchema = new mongoose_1.Schema({
    quantity: {
        type: String,
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("RegularSizeCupcakeQuantity", regularSizeCupcakeQuantitySchema);
