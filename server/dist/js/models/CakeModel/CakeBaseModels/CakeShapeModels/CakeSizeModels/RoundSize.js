"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roundSizeSchema = new mongoose_1.Schema({
    cakeSize: {
        type: String,
        required: true,
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
exports.default = (0, mongoose_1.model)("RoundSize", roundSizeSchema);
