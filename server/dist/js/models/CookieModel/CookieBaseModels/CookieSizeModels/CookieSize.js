"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cookieSizeSchema = new mongoose_1.Schema({
    regular: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "RegularSize",
        required: true,
        trim: true,
    },
    mini: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "MiniSize",
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CookieSize", cookieSizeSchema);
