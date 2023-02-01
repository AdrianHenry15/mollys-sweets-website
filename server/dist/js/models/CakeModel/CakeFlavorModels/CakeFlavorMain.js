"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cakeFlavorsMainSchema = new mongoose_1.Schema({
    flavor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CakeFlavor",
        required: true,
    },
    filling: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CakeFilling",
        required: true,
    },
    frosting: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CakeFrosting",
        required: true,
    },
    fruit: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CakeFruit",
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("CakeFlavorsMain", cakeFlavorsMainSchema);
