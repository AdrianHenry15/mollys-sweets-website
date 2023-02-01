"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sheetSizeSchema = new mongoose_1.Schema({
    sheetSizes: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "RoundSize",
        require: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("SheetSize", sheetSizeSchema);
