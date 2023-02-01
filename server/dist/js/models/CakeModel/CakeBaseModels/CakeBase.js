"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cakeBaseSchema = new mongoose_1.Schema({
    shape: {
        type: String,
        require: true,
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
    tier: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CakeBase", cakeBaseSchema);
