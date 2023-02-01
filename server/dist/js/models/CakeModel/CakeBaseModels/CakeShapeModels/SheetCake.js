"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sheetCakeSchema = new mongoose_1.Schema({
    isShape: {
        type: Boolean,
        required: true,
        trim: true,
    },
    size: {
        type: String,
        require: true,
        trim: true,
    },
    feeds: {
        type: String,
        require: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("sheetCake", sheetCakeSchema);
