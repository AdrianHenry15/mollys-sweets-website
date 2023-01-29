"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Order",
    },
    quantity: {
        type: Number,
        min: 0,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Cart", cartSchema);
