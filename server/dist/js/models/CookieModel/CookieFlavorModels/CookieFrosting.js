"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieFrostingSchema = new mongoose_1.Schema({
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
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CookieFrosting", cookieFrostingSchema);
