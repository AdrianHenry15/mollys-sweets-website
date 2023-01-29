"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    // TODO: update for order
    products: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
    },
    status: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Order", orderSchema);
