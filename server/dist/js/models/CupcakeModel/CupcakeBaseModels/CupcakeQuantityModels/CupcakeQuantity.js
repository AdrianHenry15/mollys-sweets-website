"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cupcakeQuantitySchema = new mongoose_1.Schema({
    miniSizeQuantity: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "MiniSize",
        trim: true,
    },
    regularSizeQuantity: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "RegularSize",
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});
exports.default = (0, mongoose_1.model)("CupcakeQuantity", cupcakeQuantitySchema);
