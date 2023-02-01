"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cakeSizeSchema = new mongoose_1.Schema({
    roundCakeSize: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "RoundSize",
    },
    sheetCakeSize: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "SheetSize",
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CakeSize", cakeSizeSchema);
